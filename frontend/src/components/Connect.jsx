import { useState } from "react";
import { Button } from "@mantine/core";

const Connect = () => {
  const [buttonContent, setButtonContent] = useState("Connect to Wallet");

  const connectToWallet = async () => {
    console.log(window.ethereum);
    if (typeof window.ethereum !== "undefined") {
      try {
        await ethereum.request({ method: "eth_requestAccounts" });
      } catch (error) {
        console.error(error);
      }
      setButtonContent("Connected");
      const accounts = await ethereum.request({ method: "eth_accounts" });
      console.log(`Accounts: ${accounts}`);
    } else {
      setButtonContent("Please install metamask!");
    }
  };

  return (
    <Button
      variant="filled"
      color="cyan"
      size="md"
      radius="md"
      id="connectButton"
      onClick={connectToWallet}
    >
      {/* <button id="connectButton" onClick={connectToWallet}> */}
      {buttonContent}
      {/* </button> */}
    </Button>
  );
};

export default Connect;
