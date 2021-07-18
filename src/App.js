import React from 'react';
import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main.js';
import data from './data.json';
import SelectedBeast from './SelectedBeast.js';
import './App.css';
import './Main.css';
import './Footer.css';
import './Header.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBeastModal: false,
      favorites: 0,
    }
  }

  handleFavorites = () => {
    this.setState({
      favorites: this.state.favorites + 1,
    });
  }

  handleShowBeastModal = () => {
    this.setState({
      showBeastModal: true,
    });
  }

  handleCloseBeastModal = () => {
    this.setState({
      showBeastModal: false,
    });
  }

  render() {
    return (
      <>
        <Header />
        <Main data={data} 
          handleShowBeastModal={this.handleShowBeastModal} 
          handleFavorites={this.handleFavorites} 
          showHandleFavorites={this.state.favorites}
        />
        <SelectedBeast showBeastModal={this.state.showBeastModal}
          handleCloseBeastModal={this.handleCloseBeastModal}
        />
        <Footer>
          <h3>Wallet Balance: ${this.state.wallet}</h3>
        </Footer>
      </>
    )
  }
}

export default App;
