import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo3 from '../../../images/logo3.png'
import { AiOutlineLogin } from "react-icons/ai";
import './Header.css'
const Header = () => {
    return (
    <Navbar  collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark " >
    <Container>
    <Navbar.Brand href="#home">
        <img style={{"color":"white"}} width={60} height={40} src={logo3} alt="" />
        </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto ">
      <Nav.Link className='text-white' as={Link} to="/home">Home</Nav.Link>
      <Nav.Link className='text-white' href="home#services">Services</Nav.Link>
      
      <Nav.Link className='text-white' as={Link} to="/checkout">CheckOut</Nav.Link>
      <Nav.Link className='text-white' as={Link} to="/blogs">Blogs</Nav.Link>
      
      </Nav>

    <Nav>
    <Nav.Link className='text-white' as={Link} to="/about">About me</Nav.Link>
    <Nav.Link className='text-white' as={Link} to="/login"><AiOutlineLogin></AiOutlineLogin> Login</Nav.Link>
    
    </Nav>            
    </Navbar.Collapse>
    </Container>
  </Navbar>
    );
};

export default Header;