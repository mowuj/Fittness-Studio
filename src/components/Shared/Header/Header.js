import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo3 from '../../../images/logo3.png'
import { AiOutlineLogin } from "react-icons/ai";
import { FaSignOutAlt } from 'react-icons/fa'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Header.css'
import { signOut } from 'firebase/auth';
import CustomLink from '../../Auth/CustomLink/CustomLink';
const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth)
  }
    return (
    <Navbar  collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark " >
    <Container>
    <Navbar.Brand href="#home">
        <img style={{"color":"white"}} width={60} height={40} src={logo3} alt="" />
        </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto ">
      <Nav.Link className='text-white' as={CustomLink} to="/home">Home</Nav.Link>
      <Nav.Link className='text-white'href="home#services">Services</Nav.Link>
      
      <Nav.Link className='text-white' as={CustomLink} to="/checkout">CheckOut</Nav.Link>
      <Nav.Link className='text-white' as={CustomLink} to="/blogs">Blogs</Nav.Link>
      
      </Nav>

    <Nav>
    <Nav.Link className='text-white' as={CustomLink} to="/about">About me</Nav.Link>
    {
      user?
      <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}><FaSignOutAlt className='fs-4'></FaSignOutAlt>Signout</button>
      :
      <Nav.Link className='text-white' as={CustomLink} to="/login"><AiOutlineLogin className='fs-4'></AiOutlineLogin > Login</Nav.Link>
    }
    
    </Nav>            
    </Navbar.Collapse>
    </Container>
  </Navbar>
    );
};

export default Header;