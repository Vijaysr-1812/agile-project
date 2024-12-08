require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const privateKeySepolia = process.env.SEPOLIA_PRIVATE_KEY;
const privateKeyLocalhost = process.env.LOCALHOST_PRIVATE_KEY;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  defaultNetwork:"sepolia",
  networks:{
    hardhat:{},
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      accounts: [privateKeySepolia]
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      accounts: [privateKeyLocalhost]
    }
  }
};
