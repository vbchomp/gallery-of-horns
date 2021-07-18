import React from 'react';
import HornedBeast from './HornedBeast.js';
import CardColumns from 'react-bootstrap/CardColumns';

class Main extends React.Component {
   render() {
    // wanted to try a map function
    let beastToRender = this.props.data.map((beast, index) => {
      return (
        <HornedBeast
          handleShowBeastModal={this.props.handleShowBeastModal}
          handleFavorites={this.props.handleFavorites}
          showHandleFavorites={this.props.showHandleFavorites}
          key={index}
          title={beast.title}
          imageUrl={beast.image_url}
          description={beast.description}
          keyword={beast.keyword}
          horns={beast.horns}
        />
      )
    })
        
    // forEach function
    // let beastToRender = [];
    // data.forEach((beast, index) => {
    //   beastToRender.push(
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
