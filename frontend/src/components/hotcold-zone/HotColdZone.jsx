import React from 'react';
import Plot from 'react-plotly.js';



const HotColdZone = ({ data }) => {
  const trimmedData = Object.fromEntries(
    Object.entries(data).slice(4).map(([key, value]) => [key, parseFloat(value === '-' ? null : value)])
  );

  const zData = [
    [trimmedData["01"], trimmedData["02"], trimmedData["03"]],
    [trimmedData["04"], trimmedData["05"], trimmedData["06"]],
    [trimmedData["07"], trimmedData["08"], trimmedData["09"]]
  ];

  var plotData = [
    {
      z: zData,
      type: 'heatmap',
      // cmin: 0,      
      // cmax: 1,   
      colorscale: [
        [0, 'blue'],
        [0.25, 'white'],
        [1, 'red']  
      ], 
      showscale: true,
      hoverongaps: false
    }
  ];

  const layout = {
    title: 'Batting Average by Zone',
    xaxis: {
      tickvals: [0, 1, 2],
      ticktext: ['Left', 'Center', 'Right']
    },
    yaxis: {
      tickvals: [0, 1, 2],
      ticktext: ['Bottom', 'Middle', 'Top'],
      autorange: 'reversed'
    },
    width: 600,
    height: 600
  };

  return <Plot data={plotData} layout={layout} config={{ displayModeBar: false }} />;
}

export default HotColdZone;