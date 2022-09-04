import React from "react";
import "./bar.scss";

export default function Bar({ height, name, value, color, width }) {
  const divStyle = {
    height: `${height}px`,
    width: `${window.innerWidth > 768 ? width : width / 2}px`,
    backgroundColor: `${color}`,
  };

  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <div className="bar-div">
      <label>{numberWithCommas(value)}</label>
      <div style={divStyle}></div>
      <label className="label-text">{name}</label>
    </div>
  );
}
