import { useState } from "react";

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
    <button id="connectButton" onClick={connectToWallet}>
      {buttonContent}
    </button>
  );
};

export default Connect;
