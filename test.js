const Moralis = require("moralis").default;
require("dotenv").config();

// Wallet address you want to track
const walletAddress = "0xB8378746e2361d8A581F72e942cA03A790472e51";

// Initialize Moralis
Moralis.start({ apiKey: process.env.moralisApiKey });
console.log({ apiKey: process.env.moralisApiKey });

// Function to fetch transactions for a given wallet address
async function fetchTransactions(address) {
  try {
    // Use Moralis Cloud Function or direct API request as per your setup
    // This is a generic example to initiate the concept
    // You might need to adjust based on the specific blockchain and Moralis server configuration

    // Example using Moralis Web3API (ensure the plugin or feature is enabled in your Moralis Server)
    const transactions = await Moralis.EvmApi.wallets.getWalletActiveChains({
      address: address,
    });

    console.log(transactions);
    return transactions;
  } catch (error) {
    console.error("Failed to fetch transactions:", error);
    throw error; // Or handle it as per your application's error handling policy
  }
}

// Fetch and log transactions for the specified wallet address
fetchTransactions(walletAddress);

// Create a new stream
async function fetchTransactions(address) {
  const response = await Moralis.Streams.add({
    webhookUrl: "https://webhook.site/1e7ded60-9b44-4708-8a2e-d1c86b2e82d8", // replace with your own webhook URL
    description: "My first stream",
    tag: "my_stream",
    chains: ["0x1"],
    includeNativeTxs: true,
  });
  console.log(response.toJSON().id); // print the stream id
}
