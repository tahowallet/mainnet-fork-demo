require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      loggingEnabled: true,
      chainId: 1337,
      forking: {
        enabled: true,
        url: "https://eth-mainnet.alchemyapi.io/v2/Z1usZFe7CYQqZ3pCstpOF6_ANak5AVNy",
      },
      allowUnlimitedContractSize: true,
      timeout: 5000,
      mining: {
        auto: false,
        interval: 5000,
        mempool: {
          order: "fifo",
        },
      },
    },
  },
};
