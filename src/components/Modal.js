import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const RequestModal = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Request Call Back</Modal.Title>
            </Modal.Header>
            <Modal.Body>Success! We will contact you shortly.</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default RequestModal;
