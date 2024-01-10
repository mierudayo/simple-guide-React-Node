const express = require("express");
const router = express.Router();
const cors = require("cors");
const { test, registerUser } = require("../controllers/authController");

// middleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.get("/", test);

// Use a POST route for user registration
router.post("/register", registerUser);

module.exports = router;
