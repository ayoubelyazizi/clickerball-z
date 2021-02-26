import React from "react";

import imgCoin from "../img/dragoncoin.png";
import imgYolo from "../img/powerup.png";
import imgClick from "../img/godgoku.png";

export const BonusCookies = (props) => {
  const {
    valueClick,
    valueAutoClick,
    priceValueClick,
    priceAutoClick,

    score,
    setScore, 
    setValueClick,
    setValueAutoClick,
    setIsValueAutoClick,
    setPriceValueClick,
    setPriceAutoClick,

  } = props;

  /*----------------------( function addBonusClick )--------------------------*/
  function addBonusClick() {
    setValueClick(valueClick + 1);
    setScore(score - priceValueClick);
    setPriceValueClick(priceValueClick * 2);
  }
  
  /*----------------------( function setAutoClick )--------------------------*/
  function setAutoClick() {
    if (valueAutoClick === 0) {
      setIsValueAutoClick();
    }
    setValueAutoClick(valueAutoClick + 1);
    setScore(score - priceAutoClick);
    setPriceAutoClick(priceAutoClick * 2);
  }
  /*-----------------------------------( Btn 1: btnValueClick )-------------------------------------------*/
  const btnValueClick =
    score >= priceValueClick ? (
      <button
        onClick={() => {
          addBonusClick();
        }}
      >
        <h3 style={{color: "orangered"}}>Double Goku Power</h3>
        <img src={imgYolo} width="150" height="200" />
        <h4 style={{color: "orangered"}}>
          {" "}
          <img className="imgCoin" src={imgCoin} width="20" height="20" />
          Price: {priceValueClick} ballZ
        </h4>
      </button>
    ) : (
      <button disabled style={{ background: "transparent", opacity: "0.4" }}>
        <h3 style={{color: "orangered"}}>Double Goku Power</h3>
        <img src={imgYolo} width="150" height="200" />
        <h4 style={{color: "orangered"}}>
          {" "}
          <img className="imgCoin" src={imgCoin} width="20" height="20" />
          Price: {priceValueClick} ballZ
        </h4>
      </button>
    );

  /*-----------------------------------( Btn 2: btnAutoClick )-------------------------------------------*/
  const btnAutoClick =
    score >= priceAutoClick ? (
      <button
        onClick={() => {
          setAutoClick();
        }}
      >
        <h3 style={{color: "orangered"}}>Auto God Goku Click</h3>
        <img src={imgClick} width="150" height="200" />
        <h4 style={{color: "orangered"}}>
          {" "}
          <img className="imgCoin" src={imgCoin} width="20" height="20" />
          Price: {priceAutoClick} BallZ
        </h4>
      </button>
    ) : (
      <button disabled style={{ background: "transparent", opacity: "0.4" }}>
        <h3 style={{color: "orangered"}}>Auto God Goku Click </h3>
        <img src={imgClick} width="150" height="200" />
        <h4 style={{color: "orangered"}}>
          {" "}
          <img className="imgCoin" src={imgCoin} width="20" height="20" />
          Price: {priceAutoClick} BallZ
        </h4>
      </button>
    );

  return (
    <>
      {btnValueClick}
      {btnAutoClick}
      {/* {score>=100 && btn3} */}
    </>
  );
};
