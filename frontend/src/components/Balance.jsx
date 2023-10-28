import { ethers } from "ethers";
import { Button, Group, Text } from "@mantine/core";

import { contractAddress } from "./Constants.jsx";
import { useState } from "react";

const Balance = () => {
  const [visible, setVisible] = useState(false);
  const [balance, setBalance] = useState("");
  const getBalance = async () => {
    if (typeof window.ethereum !== "undefined") {
      // const provider = await new ethers.providers.Web3Provider(window.ethereum);
      const provider = await new ethers.BrowserProvider(window.ethereum);
      const balance = await provider.getBalance(contractAddress);
      setBalance(`${ethers.formatEther(balance)} Ethereum`);
      console.log();
    } else {
      document.getElementById("connectButton").innerHTML =
        "Please install metamask!";
    }
  };

  return (
    <>
      <Group>
        <Button
          variant="filled"
          color="cyan"
          size="md"
          radius="md"
          id="balanceButton"
          onClick={getBalance}
        >
          Fund Raised
        </Button>
        <Text c="cyan" tt="capitalize" fw={700} size="lg">
          {balance}
        </Text>
      </Group>
    </>
  );
};

export default Balance;
