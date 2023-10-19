import { ethers } from "ethers";
import ListenTransaction from "./ListenTransaction";

import { abi, contractAddress } from "./Constants";

const Withdraw = () => {
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
      document.getElementById("connectButton").innerHTML =
        "Please install metamask!";
    }
  };

  return (
    <button id="withdrawButton" onClick={withdrawFromWallet}>
      Withdraw
    </button>
  );
};

export default Withdraw;
