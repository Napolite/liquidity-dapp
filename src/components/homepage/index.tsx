import React, { useState } from "react";
import "./homepage.css";
function Homepage() {
  const [activeTab, setTab] = useState<any>("swap");
  return (
    <div className="homepage-root">
      <div className="homepage">
        <div className="tabs">
          <div
            className={`${activeTab === "swap" ? "activeTab" : "tab"}`}
            onClick={() => setTab("swap")}
          >
            Swap
          </div>
          <div
            className={`${activeTab === "Pool" ? "activeTab" : "tab"}`}
            onClick={() => setTab("Pool")}
          >
            Liquidity
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
