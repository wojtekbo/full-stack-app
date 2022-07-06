import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import {editUser} from '../../../redux/userRedux';
import {useDispatch} from 'react-redux';

const AuthDropdown = () => {
  const dispatch = useDispatch();

  const clickHeandler = state => {
    state === 'login' && dispatch(editUser('peter_smth'));
    state === 'logout' && dispatch(editUser(null));
  };

  return (
    <DropdownButton className="my-2" id="dropdown-basic-button" title="User">
      <Dropdown.Item href="#" onClick={() => clickHeandler('login')}>
        Login
      </Dropdown.Item>
      <Dropdown.Item href="#" onClick={() => clickHeandler('logout')}>
        Logout
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default AuthDropdown;
