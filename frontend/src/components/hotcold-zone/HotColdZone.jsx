import React from 'react';
import { HeatMapGrid } from 'react-grid-heatmap';

const HotColdZone = ({ data }) => {
  console.log("unformatted data", data)

  const formattedData = Object.entries(data)
  .slice(4)
  .map(([zone, battingAverage]) => ({
    x: parseInt(zone.charAt(1), 10),
    y: parseInt(zone.charAt(0), 10),
    value: parseFloat(battingAverage === '-' ? 0 : battingAverage)
  }));

  console.log("formatted data", formattedData)

  const heatmapData = formattedData.map((row, y) =>
    row.map((value, x) => ({
      x,
      y,
      value: parseFloat(value === '-' ? 0 : value)
    }))
  ).flat();

  console.log("heatmapData", heatmapData);

  return (
    <div>
      <h2>Batting Average Heatmap</h2>
      {/* <HeatMapGrid
        data={heatmapData}
        xLabels={['1', '2', '3']}
        yLabels={['Lower', 'Middle', 'Upper']}
        cellStyle={(background, value, min, max) => ({
          background: `rgba(0, 255, 0, ${value})`
        })}
      /> */}
    </div>
  );
}
export default HotColdZone;