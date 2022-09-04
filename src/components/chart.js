import React from "react";
import Bar from "./bar";
import "./chart.scss";

export default function Chart({ width, height, data, title }) {
  const maxBarHeight = 0.7;
  const maxBarValue = Math.max(...data.map((d) => d.value));

  const valueToPixel = (height * maxBarHeight) / maxBarValue;
  const widthForSingleBar = (width / data.length) * 0.8;

  const divStyle = {
    height: `${height}px`,
    backgroundColor: "#fff842",
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    alignItems: "end",
    margin: "0 auto 2rem auto",
  };
  return (
    <>
      <p className="legend">
        <span className="title">{title}</span>
        <span className="best-title">Highest {title}</span>
      </p>
      <div id="chart-div" style={divStyle}>
        {data.map((singleData, index) => {
          const { name, value } = singleData;
          return (
            <Bar
              key={index}
              name={name}
              value={value}
              height={value * valueToPixel}
              width={widthForSingleBar}
              color={value === maxBarValue ? "#fb667a" : "#323c50"}
            />
          );
        })}
      </div>
    </>
  );
}
