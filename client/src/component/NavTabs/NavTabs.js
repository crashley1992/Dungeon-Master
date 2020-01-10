import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './nav-tabs.css'

const NavTabs = () => {
    return (
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Dungeon Master</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#About">About</Nav.Link>
          </Nav>
          <Nav className="mr-auto">
          <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
          <Nav className="mr-auto">
          <Nav.Link href="/signup">Signup</Nav.Link>
          </Nav>
          </Navbar.Collapse>
</Navbar>
    )
}

export default NavTabs;

