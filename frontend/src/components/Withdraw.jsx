import { useState } from "react";
import { ethers } from "ethers";
import ListenTransaction from "./ListenTransaction";

import { abi, contractAddress } from "./constants.js";

const Withdraw = () => {
  const [buttonContent, setButtonContent] = useState("Connect to Wallet");

  const withdrawFromWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        const transactionResponse = await contract.withdraw();
        await ListenTransaction(transactionResponse, provider);
      } catch (error) {
        console.error(error);
      }
    } else {
      setButtonContent("Please install metamask!");
    }
  };

  return (
    <button id="withdrawButton" onClick={withdrawFromWallet}>
      {buttonContent}
    </button>
  );
};

export default Withdraw;
