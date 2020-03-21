import React from 'react';

import './App.css';
import NavBar from "./Components/NavBar";
import PlayerDisplay from "./Components/PlayerDisplay";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <PlayerDisplay/>
    </div>
  );
}

export default App;
