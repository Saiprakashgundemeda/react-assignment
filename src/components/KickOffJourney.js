import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './Home.css';

const KickOffJourney = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="page-container">
            <section className="container py-4">
                <h2>Kick off your ACCA Prep journey with IndigoLearn</h2>
                <p>Start your ACCA preparation with IndigoLearn and benefit from our expert guidance and extensive resources.</p>
                <Button variant="primary" onClick={handleShow}>
                    Request Call Back
                </Button>
            </section>

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
        </div>
    );
};

export default KickOffJourney;
