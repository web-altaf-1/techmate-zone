import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
  const [user, loading, error] = useAuthState(auth);



  const handleSignOut = event => {
    signOut(auth)
  }

  return (
    <Navbar className='navbar-style' sticky='top' collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/"><h3>TechMate Zone</h3> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          </Nav>

          <Nav >

            <Nav.Link className='text-white text-center ' as={Link} to="/">Home</Nav.Link>
            <Nav.Link className='text-white text-center' as={Link} to="/products">Products</Nav.Link>
            <Nav.Link className='text-white text-center' as={Link} to="/blogs">Blogs</Nav.Link>
            <Nav.Link className='text-white text-center' as={Link} to="/about">About</Nav.Link>
            {user ? <Nav.Link className='text-white text-center' as={Link} to="/portfolio">Portfolio</Nav.Link> : <></>}
            {
              user ? <Nav.Link className='text-white text-center' as={Link} to="/dashboard">Dashboard</Nav.Link> : <></>
            }
            {
              user ? <button className='btn text-white text-decoration-none' onClick={handleSignOut}>Log Out</button> : <Nav.Link className='text-white ' as={Link} to="login">
                Login
              </Nav.Link>
            }
          </Nav>

          <Nav>
            

            {user ?
              <span style={{ border: '1px solid white' }} className="px-4 user-name text-white d-flex  align-items-center fw-bold shadow-lg">
                Hello, {user?.displayName ? user.displayName.split(' ')[1] : 'User'}
              </span> : <></>}
              
          </Nav>

          <Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;