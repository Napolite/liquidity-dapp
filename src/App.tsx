import React, { useState } from "react";

import Homepage from "@/components/homepage";

import "@/App.css";

import { connectWallet } from "./actions";

function Main() {
  const [account, setAccount] = useState(null);

  const connect = async () => {
    account === null ? setAccount(await connectWallet()) : null;
  };
  return (
    <div className="app-root">
      <div className="nav-bar">
        <div onClick={connect}>
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
