const express = require("express");
const cors = require("cors");
const app = express();

const petRoutes = require("./routes/petRoutes");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1", petRoutes);

module.exports = app;
