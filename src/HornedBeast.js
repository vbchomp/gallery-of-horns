import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import './HornedBeast.css';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favesForBeast: 0,
      favorites: this.props.showHandleFavorites,
      showFavorite: false,
    }
  }

  favoriteBeast = () => {
    this.setState({
      showFavorite: true,
    })
  }

  addFave = () => {
    this.setState({
      favesForBeast: this.state.favesForBeast + 1,
    });
    this.props.handleFavorites();
  }

   render() {
    return (
      <Card>
      <section className="horns">
        <h2>{this.props.beast.title}</h2>
        <Card.Img
          variant="top"
          src={this.props.beast.image_url}
          alt={this.props.beast.keyword}
          title={this.props.beast.title}
          onClick={() => this.props.handleShowBeastModal(this.props.beast)}
        />
        <p>{this.props.beast.horns} Horns</p>
        <p>{this.state.showFavorite ? '💚' : ''}</p>
        <p onClick={this.favoriteBeast}>{this.props.beast.description}</p>
        <p>{this.state.favesForBeast} Favorites for this Beast</p>
        <Button onClick={this.addFave}>Add One More Vote!</Button>
      </section>
      </Card >
    )
  }
}

export default HornedBeast;
