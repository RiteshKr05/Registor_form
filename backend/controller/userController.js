const user = require("../models/user");

const register = async (req, res) => {
  try {
    const {
      name,
      mobileNumber,
      state,
      district,
      blockVillage,
      retailerName,
      retailerNumber,
      sawa7301_2023,
      sawa7501_2023,
      sawa7301_2024,
      sawa7501_2024,
    } = req.body;
    // Check if user already exists
    const existingUser = await user.findOne({ mobileNumber });
    if (existingUser) {
      return res.send({ message: "User already exists" });
    }

    // Create new user
    const newUser = new user({
      name,
      mobileNumber,
      state,
      district,
      blockVillage,
      retailerName,
      retailerNumber,
      sawa7301_2023,
      sawa7501_2023,
      sawa7301_2024,
      sawa7501_2024,
    });
    await newUser.save();
    res.send({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
  }
};

module.exports = register;
