import React from "react";

import Homepage from "@/components/homepage";

import "@/App.css";

function Main() {
  return (
    <div className="app-root">
      <div className="nav-bar">
        <div>Connect Wallet</div>
      </div>
      <Homepage />
    </div>
  );
}

export default Main;
