import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Stack } from 'react-bootstrap';
import { HotColdZone } from './components';
import bg from "./assets/img/fenway-bg.png";

function App() {
  const [playerName, setPlayerName] = useState('');
  const [year, setYear] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch("http://localhost:5000/data", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ playerName: playerName, year: year })
    })
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  return (
    <div className="App bg" style={{ backgroundImage: `url(${bg})` }}>
      <Row>
        <h1 className='p-2'>StrikeZoneTracker</h1>
        <h6>Visualize your favorite players' batting averages across sections of the strike zone</h6>
      </Row>
      <Row >
        <Col className='form-container me-5'>
          <form onSubmit={handleSubmit}>
            <Stack gap={4} className='px-4 my-5 align-items-end'>
              <input
                type="text"
                placeholder="Enter players' name"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
              />
              <input
                type="text"
                placeholder='Enter a year'
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
              <button className='view-btn' type='submit'>View</button>
            </Stack>
          </form>
        </Col>
        <Col className='ms-5'>
          {loading &&
            <div className='placeholder-zone-loading'>
              <div className='spinner'></div>
            </div>}
          {!loading && data &&
            <HotColdZone data={data} playerName={playerName} year={year}/>
          }
          {!loading && !data &&
            <div className='placeholder-zone'>
              <div className='pt-3'>Batting Average by Zone</div>
            </div>
          }
        </Col>
      </Row>
    </div>
  );
}

export default App;