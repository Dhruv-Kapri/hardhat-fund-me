// import
// main function
// calling of main function

const { network } = require("hardhat");
const {
  networkConfig,
  developmentChains,
} = require("../helper-hardhat-config");
const { verify } = require("../utils/verify");
require("dotenv").config();

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  // if chainId is X, use address Y
  // if chainId is Z, use address A

  // const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"];
  let ethUsdPriceFeedAddress;
  // if (developmentChains.includes(network.name)) {
  if (chainId == 31337) {
    const ethUsdAggregator = await deployments.get("MockV3Aggregator");
    ethUsdPriceFeedAddress = ethUsdAggregator.address;
  } else {
    ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"];
  }

  log("----------------------------------------------------");
  log(ethUsdPriceFeedAddress);

  // if the contract dosen't exist, we deploy a minimal version of for our local testing

  // what happens when we want to change chains?
  // when going for localhost or hardhat network, we want to use a mock

  log("Deploying FundMe and waiting for confirmations...");
  // const args = [ethUsdPriceFeedAddress];

  const args = [ethUsdPriceFeedAddress];
  const fundMe = await deploy("FundMe", {
    from: deployer,
    args: args, //put price feed address
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });
  log(`FundMe deployed at ${fundMe.address}`);

  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    log("Verifying....");
    await verify(fundMe.address, args);
  }

  log("------------------------------------------------");
};

module.exports.tags = ["all", "fundme"];
