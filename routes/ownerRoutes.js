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


// ✅ DELETE - Delete Owner by ID
router.delete("/:id", async (req, res) => {
  try {
    const owner = await Owner.findByIdAndDelete(req.params.id);

    if (!owner) {
      return res.status(404).json({ message: "Owner not found" });
    }

    res.json({
      message: "Owner deleted successfully",
      id: req.params.id
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE - Edit Customer
router.put("/:id", async (req, res) => {
  try {
    const updatedOwner = await Owner.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedOwner) {
      return res.status(404).json({ message: "Owner not found" });
    }

    res.json(updatedOwner);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



module.exports = router;
