const router = require("express").Router();
const walletController = require("../controllers/wallet");
const { tryCatch } = require("../utils/tryCatch");

// Define the wallet routes
router.post("/", tryCatch(walletController.createWallet));
router.post("/webhook", tryCatch(walletController.webhookStream));

module.exports = router;
