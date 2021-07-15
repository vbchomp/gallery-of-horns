import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import './HornedBeast.css';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favesForBeast: 0,
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
    })
  }

  render() {
    return (
      <Card>
      <section className="horns">
        <h2>{this.props.title}</h2>
        <Card.Img
          variant="top"
          src={this.props.imageUrl}
          alt={this.props.keyword}
          title={this.props.title}
        />
        <p>{this.props.horns} Horns</p>
        <p>{this.state.showFavorite ? '💚' : ''}</p>
        <p onClick={this.favoriteBeast}>{this.props.description}</p>
        <p>{this.state.favesForBeast} Favorites for this Beast</p>
        <Button onClick={this.addFave}>Add One More Vote!</Button>
      </section>
      </Card >
    )
  }
}

export default HornedBeast;
