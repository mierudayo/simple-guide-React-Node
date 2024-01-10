const User = require("../models/user");

const test = (req, res) => {
  res.json("test is working");
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if name is provided
    if (!name) {
      return res.json({
        error: "Name is required",
      });
    }

    // Check if password is provided and has at least 6 characters
    if (!password || password.length < 6) {
      return res.json({
        error: "Password must be at least 6 characters",
      });
    }

    // Check if the email is already taken
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is already taken",
      });
    }

    // Create a new user
    const user = await User.create({ name, email, password });

    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

module.exports = { test, registerUser };
