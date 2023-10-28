import { ethers } from "ethers";
import ListenTransaction from "./ListenTransaction";

import { abi, contractAddress } from "./Constants";
import { Button } from "@mantine/core";
import { BsFillLockFill } from "react-icons/bs";

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
    <Button
      variant="filled"
      color="cyan"
      size="md"
      radius="md"
      id="withdrawButton"
      onClick={withdrawFromWallet}
    >
      <BsFillLockFill />
      Withdraw
    </Button>
  );
};

export default Withdraw;
