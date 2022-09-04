import React from "react";
import { ColorRing } from "react-loader-spinner";
import Table from "../../../components/table";
import "./unpopularCharacter.scss";

const inputs = [
  { id: "name", label: "Character name" },
  { id: "locationName", label: "Origin name" },
  { id: "dimension", label: "Origin dimension" },
  { id: "popularity", label: "Poplurity" },
];

export default function UnpopularCharacter({ unpopularCharacter, loading }) {
  return (
    <div id="part1">
      <div className="part1-header">Most Unpopular Character</div>
      <ColorRing height={100} width={100} visible={loading} />
      {!loading && <Table inputs={inputs} data={unpopularCharacter} />}
    </div>
  );
}
