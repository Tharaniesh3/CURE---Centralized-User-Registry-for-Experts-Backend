const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 4001;
const router = require("./router/index.js");
const cors = require("cors");

// Enable parsing JSON
app.use(express.json());

// CORS configuration
const corsOptions = {
  origin: ['https://cure-centralized-user-registry-for-experts-m6vp.vercel.app', 'http://localhost:5173'],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS", // Add OPTIONS method
  credentials: true, // Enable credentials
  allowedHeaders: ['Content-Type', 'Authorization'], // Add any other headers you need
};

// Apply CORS to all routes
app.use(cors(corsOptions));

// Handle preflight requests explicitly for all routes
app.options('*', cors(corsOptions));

// Define the routes
app.use("/api", router);

// A test route to verify CORS functionality
app.get("/test-cors", (req, res) => {
  res.json({ message: "CORS test successful" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
