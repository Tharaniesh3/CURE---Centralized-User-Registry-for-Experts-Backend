const express = require("express");
const app = require("express")();
require("dotenv").config();
const port = process.env.PORT || 4001;
const router = require("./router/index.js");
const cors = require("cors");

app.use(express.json());

const corsOptions = {
  origin: "http://localhost:5173/", 
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOptions)); 

app.use("/api", router);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
