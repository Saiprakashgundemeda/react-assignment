import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import './Header.css';

const Header = ({ handleShow }) => {
    return (
        <Navbar variant="dark" className="custom-navbar" expand="lg">
            <Container fluid className="custom-navbar">
                <div>
                    <Navbar.Brand as={Link} to="/">ACCA Course</Navbar.Brand>
                </div>

                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                    <Nav>
                        <Nav.Link as={Link} to="/whychooseus">Why choose us</Nav.Link>
                        <Nav.Link as={Link} to="/eligibility">ACCA – Eligibility</Nav.Link>
                        <Nav.Link as={Link} to="/whatwillyoulearn">What will you learn ?</Nav.Link>
                        <Nav.Link as={Link} to="/placementassistance">100% Placement Assistance</Nav.Link>
                    </Nav>
                    <Button variant="outline-light" className="button" onClick={handleShow}>Request CallBack</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;