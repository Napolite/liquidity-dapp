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
        {activeTab === "swap" && (
          <div>
            <div>
              <div>
                <div>You sell</div>
                <div>Balance : 0</div>
              </div>
              <div>
                <div>
                  <select name="tokens" id="">
                    <option value="Napolite">Nap</option>
                    <option value="Constantinite">Cons</option>
                  </select>
                </div>
                <div>
                  <input type="text" name="amount" />
                </div>
              </div>
              <div>
                <div>Napolite</div>
                <div>no price</div>
              </div>
            </div>
            <div>
              <div>
                <div>You sell</div>
                <div>Balance : 0</div>
              </div>
              <div>
                <div>
                  <select name="tokens" id="">
                    <option value="Napolite">Nap</option>
                    <option value="Constantinite">Cons</option>
                  </select>
                </div>
                <div>
                  <input type="text" name="amount" />
                </div>
              </div>
              <div>
                <div>Napolite</div>
                <div>no price</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Homepage;
