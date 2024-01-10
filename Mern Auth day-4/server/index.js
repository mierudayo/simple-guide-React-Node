// entry point
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

dotenv.config();

// app
const app = express();

// mongodb
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.error("Database Connection Error", err));

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/", require("./routes/authRoutes"));

const port = process.env.PORT || 8000;
app.listen(port, () =>
  console.log(`Server is running on port http://localhost:${port}`)
);
