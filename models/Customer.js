const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    propertyType: String,
    location: String,
    price: String,
    notes: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", customerSchema);
