const express = require("express");
const Owner = require("../models/Owner");

const router = express.Router();

// POST - Add Owner
router.post("/", async (req, res) => {
  try {
    const owner = new Owner(req.body);
    await owner.save();
    res.status(201).json(owner);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET - Get All Owners
router.get("/", async (req, res) => {
  try {
    const owners = await Owner.find();
    res.json(owners);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
