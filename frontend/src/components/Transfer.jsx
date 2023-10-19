import { ethers } from "ethers";
import ListenTransaction from "./ListenTransaction";

import { abi, contractAddress } from "./Constants.jsx";

const Transfer = () => {
  const fund = async () => {
    const ethAmount = document.getElementById("ethAmount").value;
    console.log(`Funding with ${ethAmount}...`);
    if (typeof window.ethereum !== "undefined") {
      // provider / connection to blockchain
      // signer / wallet / someone with gas
      // contract that we are interacting with
      // ^ ABI & Address
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        const transactionResponse = await contract.fund({
          value: ethers.utils.parseEther(ethAmount),
        });
        await ListenTransaction(transactionResponse, provider);
        console.log(`Funded with ${ethAmount}...`);
      } catch (error) {
        console.error(error);
      }
    } else {
      document.getElementById("connectButton").innerHTML =
        "Please install metamask!";
    }
  };

  return (
    <>
      <label htmlFor="fund">ETH Amount</label>
      <input id="ethAmount" placeholder="0.1" />
      <button id="fundButton" onClick={fund}>
        Fund
      </button>
    </>
  );
};

export default Transfer;
