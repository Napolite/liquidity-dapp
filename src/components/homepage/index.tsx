import React, { useRef, useState } from "react";
import "./homepage.css";

import settings from "@/assets/images/settings-1389-svgrepo-com.svg";
import eth from "@/assets/images/pngwing.com.png";
function Homepage() {
  interface Token {
    name: String;
    address: String;
    symbol: String;
  }
  const [activeTab, setTab] = useState<String>("swap");
  const [slider, setSlider] = useState<Boolean>(false);

  const [from, setFrom] = useState<Token>({
    name: "Napolite",
    address: "Unknown",
    symbol: "Nap",
  });

  const [to, setTo] = useState<Token>({
    name: "Constantine",
    address: "Unknown",
    symbol: "Con",
  });

  const [selected, setSelected] = useState<String>("");

  const tokens = [
    { name: "Napolite", address: "unknown", symbol: "Nap" },
    { name: "Constantine", address: "unknown", symbol: "Con" },
    { name: "Scudite", address: "unknown", symbol: "Scu" },
  ];

  const sliderRef = useRef<any>(null);

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
                    setSelected("From");
                    setSlider(!slider);
                    slider === false
                      ? (sliderRef.current.style.animation =
                          "slide-out 1s forwards")
                      : (sliderRef.current.style.animation =
                          "slide-in 1s forwards");
                  }}
                >
                  <img src={eth} className="token-img" />
                  <div>{from.symbol}</div>
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
                  <div
                    className="token"
                    onClick={() => {
                      setSlider(!slider);
                      setSelected("To");
                      slider === false
                        ? (sliderRef.current.style.animation =
                            "slide-out 1s forwards")
                        : (sliderRef.current.style.animation =
                            "slide-in 1s forwards");
                    }}
                  >
                    <img src={eth} className="token-img" />
                    <div>{to.symbol}</div>
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
        {tokens.map((token) => (
          <div
            onClick={() => {
              selected === "From" ? setFrom(token) : setTo(token);
            }}
          >
            <img src={eth} />
            <div>{token.symbol}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
