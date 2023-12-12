import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../../images/logo.png';

const Header = ({ navData }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/admin">
          <img src={Logo} alt="Hirolaimage" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navData?.map((nav, index) => (
              <Nav.Link href={`${nav?.url}`} key={index}>{nav?.name}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
