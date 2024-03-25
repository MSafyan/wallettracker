const Wallet = require("../models/wallet");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = {
  createWallet: async (req, res) => {
    // create a new wallet
    const wallet = new Wallet({
      address: req.body.address,
      blockchain: req.body.blockchain,
    });
    // save the wallet to the database
    await wallet.save();

    res.send("Wallet created");
  },
  webhookStream: async (req, res) => {
    // create a new wallet
    // Specify the email options
    const message = {
      to: "msafyan080@gmail.com",
      from: process.env.SENDGRID_EMAIL,
      subject: "Webhook Data Received",
      text: `Webhook received with the following data: ${JSON.stringify(
        req.body,
        null,
        2
      )}`, // The body of the email
      // If you want to use HTML content, you can also specify a 'html' property
    };
    console.log("Webhook received");
    console.log(req.body);
    await sgMail.send(message);

    res.status(200).send("webhook received");
  },
};
