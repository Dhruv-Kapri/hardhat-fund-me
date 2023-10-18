const { network } = require("hardhat");
const {
  developmentChains,
  DECIMALS,
  INITIAL_PRICE,
} = require("../helper-hardhat-config");

// const DECIMALS = "8";
// const INITIAL_PRICE = "200000000000"; // 2000

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  // const chainId = network.config.chainId;

  if (developmentChains.includes(network.name)) {
    // if (chainId == 31337) {
    log("Local networks detected! Deploying mocks");
    await deploy("MockV3Aggregator", {
      contract: "MockV3Aggregator",
      from: deployer,
      log: true,
      args: [DECIMALS, INITIAL_PRICE],
    });
    log("Mocks deployed!");
    log("----------------------------------------------");
    log(
      "You are deploying to a local network, you'll need a local network running to interact"
    );
    log(
      "Please run `npx hardhat console` to interact with the deployed smart contracts!"
    );
    log("------------------------------------------------");
  }
};

module.exports.tags = ["all", "mocks"];
