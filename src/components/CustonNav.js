import React from 'react';
import {
  NavDropdown, Navbar, Nav,
} from 'react-bootstrap';

const CustomNav = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">POKEDEX</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#features">Pokemons</Nav.Link>
        <Nav.Link href="#pricing">Locations</Nav.Link>
        <Nav.Link href="#pricing">Evolutions</Nav.Link>
      </Nav>
      <Nav>
        <NavDropdown title="Jorge Calvo" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">My pokemons</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">My friends</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#deets">Sign out</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

);

export default CustomNav;
