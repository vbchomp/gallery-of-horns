import React from 'react';
import Modal from 'react-bootstrap/Modal';

import './SelectedBeast.css'

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal 
          className="SelectedBeast"
          show={this.props.showBeastModal} 
          onHide={this.props.handleCloseBeastModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.beast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img 
              // style={width: '100%'}              
              src={this.props.beast.image_url} 
              alt="beast pictures"
            />
            {this.props.beast.description}
          </Modal.Body>
        </Modal>
      </>
    )
  }
}

export default SelectedBeast;
