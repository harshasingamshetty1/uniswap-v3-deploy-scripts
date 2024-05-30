require("@nomicfoundation/hardhat-toolbox");
require("dotenv/config");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 5000,
        details: { yul: false },
      },
    },
  },
  networks: {
    tanssi_test: {
      chainId: 99999,
      url: "https://fraa-flashbox-3064-rpc.a.stagenet.tanssi.network",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
  },
};
