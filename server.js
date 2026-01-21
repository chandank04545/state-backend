const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Health check (IMPORTANT for Render)
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// Routes
app.use("/api/owners", require("./routes/ownerRoutes"));
app.use("/api/customers", require("./routes/customerRoutes"));

// MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  })
  .catch(err => {
    console.error("Mongo connection error:", err);
  });
