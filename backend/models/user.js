const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobileNumber:{type: Number, required: true},
  state: { type: String, required: true },
  district: { type: String, required: true },
  blockVillage: { type: String, required: true },
  retailerName: { type: String, required: true },
  retailerNumber : { type: Number, required: true },
  sawa7301_2023: { type: Number, required: true },
  sawa7501_2023: { type: Number, required: true },
  sawa7301_2024: { type: Number, required: true },
  sawa7501_2024: { type: Number, required: true },
});

module.exports  = mongoose.model("User", UserSchema);