import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Stack } from 'react-bootstrap';
import { HotColdZone } from './components'; 

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
        setPlayerName('');
        setYear('');
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  return (
    <div className="App">
      <Row>
        <h1 className='m-5'>Hot Cold Zone Data</h1>
      </Row>
      <Row>
        <Col>
          <form onSubmit={handleSubmit}>
            <Stack>
              <label>
                Enter a baseball player name:
                <input
                  type="text"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                />
              </label>
              <label>
                Enter a year:
                <input
                  type="text"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </label>
              <button type='submit'>Get Player Stats</button>
            </Stack>
          </form>
        </Col>
        <Col>
          {loading && <p>Loading...</p>}
          {!loading && data &&
            <HotColdZone data={data}/>
          }
        </Col>
      </Row>
    </div>
  );
}

export default App;