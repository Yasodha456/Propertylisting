const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  contactNumber: String,
  alternateContact: String,
  locality: String,
  address: String,
  spaceType: String,
  petsAllowed: Boolean,
  preference: String,
  bachelors: String,
  furnishing: String,
  bhk: Number,
  floor: String,
  landmark: String,
  washroomType: String,
  coolingFacility: String,
  carParking: Boolean,
  rent: Number,
  maintenance: Number,
  photos: [String],
  area: Number,
  appliances: [String],
  amenities: [String],
  about: String,
  views: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Property", PropertySchema);