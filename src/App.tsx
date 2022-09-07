import React from 'react';
import Routers from './routes'
import './App.css';

function App() {
  return (
    <div className="App" style={{ width: "100vw", height: "100vh", display: "flex", position: "relative" }}>
        <Routers/>
    </div>
  );
}

export default App;
