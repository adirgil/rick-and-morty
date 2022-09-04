import React from "react";
import { ColorRing } from "react-loader-spinner";
import Chart from "../../../components/chart";
import "./popularityGraph.scss";

export default function PopularityChart({ CharactersData, loading }) {
  const renderChart = () => {
    const chartHeight = 400;
    const chartWidth = 700;
    const title = "Population";
    return (
      <Chart
        height={chartHeight}
        width={chartWidth}
        data={CharactersData}
        title={title}
      />
    );
  };

  return (
    <div id="part2">
      <ColorRing height={100} width={100} visible={loading} />
      {!loading && renderChart()}
    </div>
  );
}
