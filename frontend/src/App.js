import React, { useState } from 'react';
import './App.css';

function App() {
  const [playerName, setPlayerName] = useState('');
  const [year, setYear] = useState('');
  const [data, setData] = useState(null); // Initialize data as null

  const handleSubmit = (e) => {
    e.preventDefault(); 

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
      console.log(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  };

  return (
    <div className="App">
        <h1>Hot Cold Zone Data</h1>
        <form onSubmit={handleSubmit}>
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
        </form>

        {data &&
          <div>
            <h2>Player Stats</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        }
    </div>
  );
}

export default App;