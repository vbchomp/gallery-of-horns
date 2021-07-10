import React from 'react';
import Footer from './Footer.js';
import Header from './Header.js';
import HornedBeast from './HornedBeast.js';
import Main from './Main.js';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main 
          title="TBD"
          imageUrl="TBD"
          description="TBD"
        />
        <Main 
          title="TBD"
          imageUrl="TBD"
          description="TBD"
        />
        <Footer />
      </>
    )
  }
}

export default App;
