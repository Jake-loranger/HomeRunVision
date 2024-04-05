import { React, useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setdata] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/data").then(
      res => res.json()
    ).then(
      data => {
        setdata(data);
        console.log(data)
      }
    )
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Hot Cold Zone Data</h1>
        <p>{JSON.stringify(data)}</p>
      </header>
    </div>
  );
}

export default App;