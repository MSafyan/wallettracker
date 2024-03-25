const express = require("express");
const helmet = require("helmet");
const app = express();

require("dotenv").config();

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/wallet", require("./src/routes/wallet"));
// require("./src/utils/tracker");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
