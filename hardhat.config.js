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
      accounts: [
        "a5ab70ea6a174c695d779c8e88ef2919c046832839100e6efbf4723ac522a9de" ||
          "",
      ],
    },
  },
};
