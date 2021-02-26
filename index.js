import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";

import { BonusCookies } from "./component/BonusCookies";
import { useInterval } from "react-use-timeout";
import { CookiesScors } from "./component/CookiesScors";

const App = (props) => {
  const [score, setScore] = useState(0);
  const [valueClick, setValueClick] = useState(1);
  const [valueAutoClick, setValueAutoClick] = useState(0);
  const [isValueAutoClick, setIsValueAutoClick] = useState(false);
  const [priceValueClick, setPriceValueClick] = useState(10);
  const [priceAutoClick, setPriceAutoClick] = useState(50);

  /*-------------------------------------------( function par Coin/sec )---------------------------------------------------*/
  const coinSec = useCallback(() => {
    console.log("coinSec");

    setScore(score + valueAutoClick);
  }, [score, valueAutoClick]);
  const timeout = useInterval(coinSec, 1000);

  if (isValueAutoClick) {
    timeout.start();
  }

  /*-------------------------------------------( function )---------------------------------------------------*/
  return (
    <div>
      {/*-----------------------( function CookiesScors )--------------------------*/}
      <CookiesScors
        score={score}
        setScore={(score) => {
          setScore(score);
        }}
        valueClick={valueClick}
      />{" "}
      {/*-----------------------( function BonusCookies )--------------------------*/}
      <BonusCookies
        valueClick={valueClick}
        setValueClick={(valueClick) => {
          setValueClick(valueClick);
        }}
        valueAutoClick={valueAutoClick}
        setValueAutoClick={(valueAutoClick) => {
          setValueAutoClick(valueAutoClick);
        }}
        isValueAutoClick={isValueAutoClick}
        setIsValueAutoClick={() => {
          setIsValueAutoClick(true);
        }}
        priceValueClick={priceValueClick}
        priceAutoClick={priceAutoClick}
        score={score}
        setScore={(param) => {
          setScore(param);
        }}
        /*-----------------------( function Price )--------------------------*/

        setPriceValueClick={(newPrice) => {
          setPriceValueClick(newPrice);
        }}
        setPriceAutoClick={(newPrice) => {
          setPriceAutoClick(newPrice);
        }}
      />{" "}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("App"));
