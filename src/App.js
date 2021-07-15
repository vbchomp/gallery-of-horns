import React from 'react';
import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main.js';
import './App.css';
import './Main.css';
import './Footer.css';
import './Header.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}

export default App;
