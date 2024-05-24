import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './PlacementAssistance.css';

const PlacementAssistance = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <section className="PlacementAssistance-container py-4">
            <h1 className='h1 text-white'>100% Placement Assistance</h1>
            <p className='text-white'>We provide dedicated placement support to ensure you secure a position in top companies upon completion of your ACCA qualification.</p>
            <form className='d-flex flex-column'>
                <input type="text" placeholder="Enter your name" className='form-control' />
                <br />
                <input type="email" placeholder="Enter your email" className='form-control' />
                <br />
                <input type="tel" placeholder="Enter your phone number" className='form-control' />
                <br />
                <Button variant="primary" onClick={handleShow}>
                    Request Call Back
                </Button>
            </form>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thankyou ! </Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, We will get in touch with you !</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
};

export default PlacementAssistance;