import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import logo from '../../images/Urban Riders.png'
import { Form, FormControl, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home"> <img src={logo} className ="logo" alt=""/> </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Destination</Nav.Link>
      <Nav.Link href="#link">Blog</Nav.Link>
      <Nav.Link href="#link">Contact</Nav.Link>
      <Nav.Link to="#link">Login</Nav.Link>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
    );
};

export default Header;