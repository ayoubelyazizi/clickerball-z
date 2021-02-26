import React from "react";
import "./style.css";
import imgShenron from "../img/shenron.png";
import imgCoin from "../img/dragoncoin.png";

const TitreCBZ = { textAlign: "center", fontSize: "100px" };
const ImgShenronStyle = { textAlign: "center", marginBottom: "1vh" };
const PScore = { textAlign: "center", marginTop: "1vh" };

export const CookiesScors = (props) => {
  const { score, setScore, valueClick } = props;

  return (
    <div>
      <h1 style={TitreCBZ}> Clickerball Z </h1>

      <p style={PScore}>{" "}<img className="imgCoin" src={imgCoin} width="20" height="20" /> Ballz: {score}</p>

      <img
        style={ImgShenronStyle}
        src={imgShenron}
        width="420"
        height="320"
        className="cookie-btn"
        onClick={() => {
          setScore(score + valueClick);
        }}
      />
    </div>
  );
};
