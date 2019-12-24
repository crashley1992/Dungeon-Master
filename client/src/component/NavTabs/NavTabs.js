import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './nav-tabs.css'
import LoginModal from '../LoginModal/LoginModal';
import CreateAccountModal from '../CreateAccountModal/CreateAccountModal';

const NavTabs = () => {
    return (
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Dungeon Master</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#About">About</Nav.Link>
          </Nav>
<LoginModal />
<CreateAccountModal />
          </Navbar.Collapse>
</Navbar>
    )
}

export default NavTabs;

