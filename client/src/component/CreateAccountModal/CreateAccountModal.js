import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import CreateAccountButton from '../CreateAccountButton/CreateAccountButton';
import './create-account-modal.css';

function CreateAccountModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
<Button className="create-account" variant="outline-secondary" type="submit" onClick={handleShow}>Create Account</Button>  
  
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login to your Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <CreateAccountButton />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default CreateAccountModal;