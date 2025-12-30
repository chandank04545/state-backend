const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    address: String,
    propertyType: String,
    propertySize: String,
    location: String,
    propertyAge: String,
    price: String,
    notes: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Owner", ownerSchema);
