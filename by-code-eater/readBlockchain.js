const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/d39bda9dc9734b43a9114723883f71be"
);

const queryBlockchain = async () => {
  const block = await provider.getBlockNumber();
  console.log("current block numner : ", block);
};

queryBlockchain();
