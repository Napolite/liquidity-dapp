import React, { useState } from "react";
import "./homepage.css";

import settings from "@/assets/images/settings-1389-svgrepo-com.svg";
import eth from "@/assets/images/pngwing.com.png";
function Homepage() {
  const [activeTab, setTab] = useState<any>("swap");
  return (
    <div className="homepage-root">
      <div className="homepage">
        <div className="top-bar">
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
          <div className="img-div">
            <img src={settings} alt="setting" />
          </div>
        </div>
        {activeTab === "swap" && (
          <div className="swap-root">
            <div className="swap-item">
              <div className="swap-from-top">
                <div>You sell</div>
                <div>Balance : 0</div>
              </div>
              <div className="trade-item">
                <div className="token">
                  <img src={eth} className="token-img" />
                  <div>Nap</div>
                </div>
                <div>
                  <input type="text" name="amount" />
                </div>
              </div>
              <div className="swap-from-top">
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="swap-item">
              <div className="swap-from-top">
                <div>You sell</div>
                <div>Rate ~ 0</div>
              </div>
              <div className="trade-item">
                <div>
                  <div className="token">
                    <img src={eth} className="token-img" />
                    <div>Nap</div>
                  </div>
                </div>
                <div>
                  <input type="text" name="amount" />
                </div>
              </div>
              <div className="swap-from-top">
                <div></div>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
            <button>Swap</button>
          </div>
        )}
      </div>
      <div className="slide-out">
        <div>hello</div>
        <div>world</div>
      </div>
    </div>
  );
}

export default Homepage;
