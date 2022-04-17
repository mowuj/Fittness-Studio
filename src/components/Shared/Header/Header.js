import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className='container'>
            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">
        <img style={{"color":"white"}} width={50} height={30} src={logo} alt="" />
    </Navbar.Brand>
    <Nav className="me-auto ">
      <Nav.Link className='text-white' as={Link} to="/home">Home</Nav.Link>
      <Nav.Link className='text-white' href="#features">Services</Nav.Link>
      <Nav.Link className='text-white' href="#pricing">Packages</Nav.Link>
      <Nav.Link className='text-white' as={Link} to="/checkout">CheckOut</Nav.Link>
      <Nav.Link className='text-white' as={Link} to="/about">About me</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;