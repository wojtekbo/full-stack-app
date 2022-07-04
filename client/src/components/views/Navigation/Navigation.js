import React from 'react';
import {useSelector} from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';

import {isAuthorised} from '../../../redux/permissionsRedux';
import SearchForm from '../../features/SearchForm/SearchForm';

const Navigation = () => {
  const userLoged = useSelector(state => isAuthorised(state));
  return (
    <Navbar className="mb-3 px-3" bg="light" expand="lg">
      <Navbar.Brand href="#home">Adverts App</Navbar.Brand>
      <SearchForm />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          {userLoged && <Nav.Link href="#signout">Sign out</Nav.Link>}
          {userLoged === false && <Nav.Link href="https://google.com">Sign in</Nav.Link>}
          {userLoged === false && <Nav.Link href="#signup">Sign up</Nav.Link>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
