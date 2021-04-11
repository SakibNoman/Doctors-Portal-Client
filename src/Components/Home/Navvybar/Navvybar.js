import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Navvybar = () => {
    return (
        <Navbar expand="lg">
            <Navbar.Toggle className="ml-auto" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className="ml-5" href="#home">Home</Nav.Link>
                    <Nav.Link className="ml-5" href="#link">About</Nav.Link>
                    <Nav.Link className="ml-5" href="#link">Dental Services</Nav.Link>
                    <Nav.Link className="ml-5 text-white" href="#link">Reviews</Nav.Link>
                    <Nav.Link className="ml-5 text-white" href="#link">Blog</Nav.Link>
                    <Nav.Link className="ml-5 text-white" href="#link">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navvybar;