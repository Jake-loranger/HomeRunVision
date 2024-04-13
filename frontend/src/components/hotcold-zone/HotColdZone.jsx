import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';



const HotColdZone = ({ data, playerName, year }) => {
  const [plotTitle, setPlotTitle] = useState(`Batting Average by Zone`);

  useEffect(() => {
    setPlotTitle(`Batting Average by Zone - ${playerName}, ${year}`);
  }, []);

  const trimmedData = Object.fromEntries(
    Object.entries(data).slice(4).map(([key, value]) => [key, parseFloat(value === '-' ? null : value)])
  );

  const zData = [
    [trimmedData["01"], trimmedData["02"], trimmedData["03"]],
    [trimmedData["04"], trimmedData["05"], trimmedData["06"]],
    [trimmedData["07"], trimmedData["08"], trimmedData["09"]],
  ];

  var plotData = [
    {
      z: zData,
      type: 'heatmap',
      zmin: 0,      
      zmax: 1,   
      colorscale: [
        [0, '#0013BE'],
        [0.20, '#C3B2E1'],
        [0.3, '#F4A2A2'],
        [.7, '#DF2727'],
        [1, '#931212']    
      ], 
      showscale: true,
      hoverongaps: false,
      colorbar: {
        x: 1.10,  
        xpad: 10, 
        ypad: 10, 
        tickfont: {
          color: 'white'
        },
      }
    }
  ];

  const layout = {
    title: `${plotTitle}`,
    titlefont: {
      color: 'white',
      size: 16
    },
    paper_bgcolor: "#1D1D1D",  
    plot_bgcolor: "#1D1D1D",  
    xaxis: {
      tickvals: [0, 1, 2],
      ticktext: ['Left', 'Center', 'Right'],
      tickfont: {
        color: 'white'  
      },
      gridcolor: 'gray'  
    },
    yaxis: {
      tickvals: [0, 1, 2],
      ticktext: ['Bottom', 'Middle', 'Top'],
      tickfont: {
        color: 'white' 
      },
      gridcolor: 'gray'
    },
    width: 500,
    height: 600,
    margin: {
      l: 85,
      r: 125,
      t: 100,
      b: 75
    }
  };

  return <Plot data={plotData} layout={layout} config={{ displayModeBar: false }} />;
}

export default HotColdZone;