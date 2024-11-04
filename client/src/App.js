import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';

function App() {

  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from the backend
    axios.get('/api')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error("There was an error fetching data!", error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         {message}
        </p>
      </header>
    </div>
  );
}

export default App;
