import React from 'react';

import './App.css';
import Navbar from './nav';
import Body from './body';
import Footer from './footer';

function App() {
  let pages = [
    { page: 'Home' },
    { page: 'Page 1' },
    { page: 'Page 2' },
    { page: 'Page 3' }
  ];
  console.log(pages);
  return (
    <div className="App">
      <header className="App-header">
        <Navbar siteName="Johnny's Site" pages={pages} />
        <Body />
      </header>
      <Footer />
    </div>
  );
}

export default App;
