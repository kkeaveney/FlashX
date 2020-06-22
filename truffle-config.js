require("babel-register");
require("babel-polyfill");
require("dotenv").config();

const privateKeys = process.env.PRIVATE_KEYS || "";

const HDWalletProvider = require("truffle-hdwallet-provider-privkey");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
    },
    kovan: {
      provider: function() {
        return new HDWalletProvider(
          privateKeys.split(","),
          `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`
        );
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 42,
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(
          privateKeys.split(","),

          `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`
        );
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    },
  },
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis/",
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
