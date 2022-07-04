import React from 'react';
import {useSelector} from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {getPermissions} from '../../../redux/permissionsRedux';

const Navigation = () => {
  const permissions = useSelector(state => getPermissions(state));
  console.log(permissions.authorised);
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Adverts App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          {permissions.authorised === true && <Nav.Link href="#signout">Sign out</Nav.Link>}
          {permissions.authorised === false && <Nav.Link href="https://google.com">Sign in</Nav.Link>}
          {permissions.authorised === false && <Nav.Link href="#signup">Sign up</Nav.Link>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
