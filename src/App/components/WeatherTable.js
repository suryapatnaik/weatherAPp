import "./styles.css";
import React from "react";

export default function WeatherTable({ weatherDataObj }) {
  const tempUnits = "°C";
  const { dt_txt, main } = weatherDataObj;

  const displayDateText = dt_txt.split(" ")[0];

  const { temp_min, temp_max, pressure, humidity } = main;

  return (
    <table id="TableContainer">
      <tr>
        <th>Date: {displayDateText}</th>
      </tr>

      <table>
        <tr>
          <td>Temperature</td>
        </tr>
      </table>

      <table>
        <tr id="Subheading">
          <td className="TableData">Min</td>
          <td className="TableData">Max</td>
        </tr>
      </table>
      <table>
        <tr id="Subheading">
          <td className="TableData">
            {temp_min} {tempUnits}
          </td>
          <td className="TableData">
            {temp_max} {tempUnits}
          </td>
        </tr>
      </table>
      <table>
        <tr>
          <td className="TableData">Pressure</td>
          <td className="TableData">{pressure}</td>
        </tr>
      </table>
      <table>
        <tr>
          <td className="TableData">Humidity</td>
          <td className="TableData">{humidity}</td>
        </tr>
      </table>
    </table>
  );
}
