import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import {editPermission} from '../../../redux/permissionsRedux';
import {useDispatch} from 'react-redux';

const AuthDropdown = () => {
  const dispatch = useDispatch();

  const clickHeandler = state => {
    state === 'login' && dispatch(editPermission(true));
    state === 'logout' && dispatch(editPermission(false));
  };

  return (
    <DropdownButton className="my-2" id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item href="#" onClick={() => clickHeandler('login')}>
        Zalogowany
      </Dropdown.Item>
      <Dropdown.Item href="#" onClick={() => clickHeandler('logout')}>
        Wylogowany
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default AuthDropdown;
