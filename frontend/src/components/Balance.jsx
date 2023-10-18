import { useState } from "react";
import { ethers } from "ethers";

import { contractAddress } from "./constants.js";

const Balance = () => {
  const [buttonContent, setButtonContent] = useState("Connect to Wallet");

  const getBalance = async () => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const balance = await provider.getBalance(contractAddress);
      console.log(ethers.utils.formatEther(balance));
    } else {
      setButtonContent("Please install metamask!");
    }
  };

  return (
    <button id="balanceButton" onClick={getBalance}>
      {buttonContent}
    </button>
  );
};

export default Balance;
