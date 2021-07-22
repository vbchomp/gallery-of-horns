import React from 'react';
import HornedBeast from './HornedBeast.js';
import CardColumns from 'react-bootstrap/CardColumns';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beastHornData: this.props.data,
      beastToRender: [],
    }
  }

  handleChange = e => {
    console.log(this.props.data);
    let newArr = this.props.data.filter(beast => beast.horns === +e.target.value);
    console.log(newArr);
    this.setState({
      beastHornData: newArr,
    })
    return this.renderBeasts();
  }

  renderBeasts = () => {
    let renderBeastArr = this.state.beastHornData.map((beast, index) => {
      return (
        <HornedBeast
          handleShowBeastModal={this.props.handleShowBeastModal}
          handleFavorites={this.props.handleFavorites}
          showHandleFavorites={this.props.showHandleFavorites}
          key={index}
          beast={beast}
          // title={beast.title}
          // imageUrl={beast.image_url}
          // description={beast.description}
          keyword={beast.keyword}
          horns={beast.horns}
        />
      )
    })
    this.setState({
      beastToRender: renderBeastArr
    })
  }

  componentDidMount = () => {
    this.renderBeasts();
  }

  // // 1 Horns
  // if (e.target.value === '1') {
  //   //need to figure out how to iterate over array to check for 1 horns
  //   let beastToRender = 
  // }

  render() {
    // this was my hard coded render function that did not allow for dynamically changing something...
    // wanted to try a map function
    // let beastToRender = this.state.beastHornData.map((beast, index) => {
    //   return (
    //     <HornedBeast
    //       handleShowBeastModal={this.props.handleShowBeastModal}
    //       handleFavorites={this.props.handleFavorites}
    //       showHandleFavorites={this.props.showHandleFavorites}
    //       key={index}
    //       beast={beast}
    //       // title={beast.title}
    //       // imageUrl={beast.image_url}
    //       // description={beast.description}
    //       keyword={beast.keyword}
    //       horns={beast.horns}
    //     />
    //   )
    // })

    return (
      <main>
        {/* The form was me. */}
        <Container>
          <Form>
            <Form.Group>
              <Form.Label>Find A Beast By The Number Of Horns</Form.Label>
              <Form.Control as="select" onChange={this.handleChange}>
                <option value="">All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="100">Way More Than That</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Container>
        <CardColumns>
          {/* This was Michael. Because of how we re-did my render method to be more dynamic instead of hard coded. */}
          {this.state.beastToRender}
        </CardColumns>
      </main>
    )
  }
}

export default Main;
