import React from 'react';

import './App.css';
import Navbar from './nav';
import Body from './body';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar siteName="Johnny's Site" />
        <Body />
      </header>
    </div>
  );
}

export default App;
