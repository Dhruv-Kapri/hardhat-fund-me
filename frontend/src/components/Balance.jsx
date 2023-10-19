import { ethers } from "ethers";

import { contractAddress } from "./Constants.jsx";

const Balance = () => {
  const getBalance = async () => {
    if (typeof window.ethereum !== "undefined") {
      const provider = await new ethers.providers.Web3Provider(window.ethereum);
      const balance = await provider.getBalance(contractAddress);
      console.log(ethers.utils.formatEther(balance));
    } else {
      document.getElementById("connectButton").innerHTML =
        "Please install metamask!";
    }
  };

  return (
    <button id="balanceButton" onClick={getBalance}>
      Balance
    </button>
  );
};

export default Balance;
