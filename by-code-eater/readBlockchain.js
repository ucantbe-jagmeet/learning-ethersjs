const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/d39bda9dc9734b43a9114723883f71be"
);

const queryBlockchain = async () => {
  // current block number
  //   const block = await provider.getBlockNumber();
  //   console.log("current block numner : ", block);

  const balance = await provider.getBalance(
    "0xBf6397894C305a73dCcBAf7AB6Cdf8953784CF9E"
  );
  console.log("account balance: ", balance.toString());
  console.log("account balance: ", ethers.utils.formatEther(balance));
  // converted to Wei
  // we can perform various operations on bigNumber Object thats why it is very useful
  console.log(
    "account balance: ",
    ethers.utils.parseEther(ethers.utils.formatEther(balance))
  );
};

queryBlockchain();
