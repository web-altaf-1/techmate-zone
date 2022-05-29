import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const handleSignOut = event =>{
    signOut(auth)
  }
  
  return (
    <Navbar className='navbar-style' sticky='top' collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand  as={Link} to="/"><h3>TechMate Zone</h3> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          </Nav>
          
          <Nav>
          <Nav.Link className='text-white ' as={Link} to="/">Home</Nav.Link>
          <Nav.Link className='text-white ' as={Link} to="/product">Product</Nav.Link>
          <Nav.Link className='text-white ' as={Link} to="/portfolio">Portfolio</Nav.Link>
          <Nav.Link className='text-white ' as={Link} to="/about">About</Nav.Link>
          {
              user ? <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Log Out</button> : <Nav.Link className='text-white ' as={Link} to="login">
                Login
              </Nav.Link>
            }
            
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