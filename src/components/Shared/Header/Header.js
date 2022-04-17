import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo3 from '../../../images/logo3.png'
import './Header.css'
const Header = () => {
    return (
        <div className='container'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark " >
    <Container>
    <Navbar.Brand href="#home">
        <img style={{"color":"white"}} width={60} height={40} src={logo3} alt="" />
        </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto ">
      <Nav.Link className='text-white' as={Link} to="/home">Home</Nav.Link>
      <Nav.Link className='text-white' href="#services">Services</Nav.Link>
      <Nav.Link className='text-white' href="#pricing">Packages</Nav.Link>
      <Nav.Link className='text-white' as={Link} to="/checkout">CheckOut</Nav.Link>
      <Nav.Link className='text-white' as={Link} to="/about">About me</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;