import React from "react";
import "./table.scss";

export default function Table({ data, inputs }) {
  return (
    <table className="container">
      <tbody>
        {inputs.map((input) => {
          return (
            <tr key={input.id} className="active-row">
              <td>{input.label}</td>
              <td>{data[input.id]}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
