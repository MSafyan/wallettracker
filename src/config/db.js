const mongoose = require("mongoose");

const mongoURI = process.env.mongoURI; // Replace this with your actual MongoDB URI

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(mongoURI, options)
  .then(() => console.log("MongoDB connection established"))
  .catch((error) => console.error("MongoDB connection failed:", error.message));

module.exports = mongoose;
