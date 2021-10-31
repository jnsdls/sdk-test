// const ethers = require("ethers");
// const { NFTLabsSDK } = require("@3rdweb/sdk");
import { ethers } from "ethers";
import { NFTLabsSDK } from "@3rdweb/sdk";

(async () => {
  console.log(ethers.Wallet.createRandom());
  console.log(new NFTLabsSDK(ethers.Wallet.createRandom()).isReadOnly());
})();