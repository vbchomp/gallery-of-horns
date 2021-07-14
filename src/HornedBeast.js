import React from 'react';

class HornedBeast extends React.Component {
  render() {
    return (
      <section className="horns">
        <h2>{this.props.title}</h2>
        <img 
          src={this.props.imageUrl} 
          alt={this.props.keyword}
          title={this.props.title} 
        />
        <p>{this.props.description}</p>
        <p>{this.props.horns} Horns</p>
      </section>
    )
  }
}

export default HornedBeast;
