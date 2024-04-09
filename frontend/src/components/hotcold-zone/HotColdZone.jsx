import React from 'react';
import { Row, Col } from 'react-bootstrap';
import "./hotcoldzone.css";


function valueToColor(value){
  var h = ((1 - (parseFloat(value) / 1.0)) * 120).toString(10);
  return "hsl(" + h + ", 100%, 50%)";
}

const HotColdZone = ({ data }) => {
  const trimmedData = Object.fromEntries(
    Object.entries(data).slice(4).map(([key, value]) => [key, parseFloat(value === '-' ? 0 : value)])
  );

  const colorData = {};
  for (const key in trimmedData) {
    colorData[key] = valueToColor(trimmedData[key]);
  }

  return (
    <>
      <h2>Batting Average Heatmap</h2>
      <div className='plate'> 
        <Row>
          <Col className='zone' style={{ backgroundColor: colorData['01'] }}><p>{trimmedData['01']}</p></Col>
          <Col className='zone' style={{ backgroundColor: colorData['02'] }}><p>{trimmedData['02']}</p></Col>
          <Col className='zone' style={{ backgroundColor: colorData['03'] }}><p>{trimmedData['03']}</p></Col>
        </Row>
        <Row>
          <Col className='zone' style={{ backgroundColor: colorData['04'] }}><p>{trimmedData['04']}</p></Col>
          <Col className='zone' style={{ backgroundColor: colorData['05'] }}><p>{trimmedData['05']}</p></Col>
          <Col className='zone' style={{ backgroundColor: colorData['06'] }}><p>{trimmedData['06']}</p></Col>
        </Row>
        <Row>
          <Col className='zone' style={{ backgroundColor: colorData['07'] }}><p>{trimmedData['07']}</p></Col>
          <Col className='zone' style={{ backgroundColor: colorData['08'] }}><p>{trimmedData['08']}</p></Col>
          <Col className='zone' style={{ backgroundColor: colorData['09'] }}><p>{trimmedData['09']}</p></Col>
        </Row>
      </div>
    </>
  );
}

export default HotColdZone;