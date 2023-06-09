import React, { useState } from "react";

import Homepage from "@/components/homepage";

import "@/App.css";

import { connectWallet } from "./actions";

function Main() {
  const [account, setAccount] = useState<any>(null);

  const connect = async () => {
    account === null ? setAccount(await connectWallet()) : null;
    console.log(connectWallet());
  };
  const disconnect = async () => {
    setAccount(null);
  };
  return (
    <div className="app-root">
      <div className="nav-bar">
        <div onClick={account === null ? connect : disconnect}>
          {account === null
            ? "Connect Wallet"
            : `${account[0].substring(0, 4)}...${account[0].substring(38, 42)}`}
        </div>
      </div>
      <Homepage />
    </div>
  );
}

export default Main;
