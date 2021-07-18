import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.showBeastModal} onHide={this.props.handleCloseBeastModal}>
          <Modal.Header closeButton>
            <Modal.Title>This is a cool title</Modal.Title>
          </Modal.Header>
          <Modal.Body>This is a cool description</Modal.Body>
        </Modal>
      </>
    )
  }
}

export default SelectedBeast;
