import React from 'react';
import HornedBeast from './HornedBeast.js';

class Main extends React.Component {
  render() {
    return (
      <>
        <HornedBeast
          title="Horned Beast 1"
          imageUrl="Image 1"
          description="Desc 1"
          keyword="Keyword 1"
          horns="Horns 1"
        />
        <HornedBeast
          title="Horned Beast 2"
          imageUrl="Image 2"
          description="Desc 2"
          keyword="Keyword 2"
          horns="Horns 2"
        />
        <HornedBeast
          title="Horned Beast 3"
          imageUrl="Image 3"
          description="Desc 3"
          keyword="Keyword 3"
          horns="Horns 3"
        />
      </> 
    )
  }
}

export default Main;
