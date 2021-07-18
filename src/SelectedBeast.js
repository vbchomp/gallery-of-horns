import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.showBeastModal} onHide={this.props.handleCloseBeastModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.beast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.props.beast.image_url} alt="beast pictures"/><br />
            {this.props.beast.description}
          </Modal.Body>
        </Modal>
      </>
    )
  }
}

export default SelectedBeast;
