import React from 'react';
import {useSelector} from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';

import {getUser} from '../../../redux/userRedux';
import SearchForm from '../../features/SearchForm/SearchForm';

const Navigation = () => {
  const userLogged = useSelector(state => getUser(state));
  return (
    <Navbar className="d-flex justify-content-between mb-3 px-3" bg="light" expand="lg">
      <Navbar.Brand className="flex-fill" href="#home">
        Adverts App
      </Navbar.Brand>
      <SearchForm />
      <Navbar.Toggle className="ms-5" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end ms-2" id="basic-navbar-nav">
        <Nav>
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          {userLogged && <Nav.Link href="#signout">Sign out</Nav.Link>}
          {!userLogged && <Nav.Link href="https://google.com">Sign in</Nav.Link>}
          {!userLogged && <Nav.Link href="#signup">Sign up</Nav.Link>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
