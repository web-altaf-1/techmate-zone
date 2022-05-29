import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  
  return (
    <Navbar className='navbar-style' sticky='top' collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand  as={Link} to="/"><h3>TechMate Zone</h3> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          </Nav>
          
          <Nav>
          <Nav.Link className='text-white ' as={Link} to="/blog">Blog</Nav.Link>
            
          </Nav>
          <Nav>
            
          </Nav>
          <Nav>
            
          </Nav>

          <Nav>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;