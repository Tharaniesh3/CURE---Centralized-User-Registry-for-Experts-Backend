const express = require("express");
const app = express(); // `require("express")()` is not necessary, just `express()` is fine.
require("dotenv").config();
const port = process.env.PORT || 4001;
const router = require("./router/index.js");
const cors = require("cors");

// Middleware to parse JSON bodies
app.use(express.json());

// CORS configuration
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Temporarily allow all origins
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200); // Respond to OPTIONS preflight requests
  }
  next();
});

// Use your router for handling API routes
app.use("/api", router);

// Start the server
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
