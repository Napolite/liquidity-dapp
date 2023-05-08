import React, { useRef, useState } from "react";
import "./homepage.css";

import settings from "@/assets/images/settings-1389-svgrepo-com.svg";
import eth from "@/assets/images/pngwing.com.png";
function Homepage() {
  const [activeTab, setTab] = useState<String>("swap");
  const [slider, setSlider] = useState<Boolean>(false);

  const sliderRef = useRef<any>(null);

  const slideOut = () => {};

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
                <div
                  className="token"
                  onClick={() => {
                    setSlider(!slider);
                    slider === false
                      ? (sliderRef.current.style.animation =
                          "slide-out 1s forwards")
                      : (sliderRef.current.style.animation =
                          "slide-in 1s forwards");
                  }}
                >
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

      <div className="slide-out" ref={sliderRef}>
        <div>
          <img src={eth} />
          <div>Napolite</div>
        </div>
        <div>
          <img src={eth} />
          <div>Napolite</div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
