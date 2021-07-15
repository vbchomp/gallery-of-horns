import React from 'react';
import HornedBeast from './HornedBeast.js';
import data from './data.json';
import CardColumns from 'react-bootstrap/CardColumns';

class Main extends React.Component {
  render() {
    let beastToRender = [];
    data.forEach((beast, index) => {
      beastToRender.push(
        <HornedBeast
          key={index}
          title={beast.title}
          imageUrl={beast.image_url}
          description={beast.description}
          keyword={beast.keyword}
          horns={beast.horns}
        />
      )
    })

    // wanted to try a map function
    // let beastToRender = data.map((beast, index) => {
    //   return (
    //     <HornedBeast
    //       key={index}
    //       title={beast.title}
    //       imageUrl={beast.image_url}
    //       description={beast.description}
    //       keyword={beast.keyword}
    //       horns={beast.horns}
    //     />
    //   )
    // })

    return (
      <main>
        <CardColumns>
          {beastToRender}
        </CardColumns>
      </main>
    )
  }
}

export default Main;
