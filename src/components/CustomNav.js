import React from 'react';
import { NavDropdown, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pokeball from '../assets/images/pokeball.png';
import '../assets/styles/CustomNav.scss';

const CustomNav = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Link to="/">
      <Navbar.Brand>
        <img src={Pokeball} alt="pokeball" className="pokeball-image" />
        POKECENTER
      </Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Link to="/types" className="nav-link">Types</Link>
        <Link to="/building" className="nav-link">Pokemons</Link>
        <Link to="/building" className="nav-link">Evolutions</Link>
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
