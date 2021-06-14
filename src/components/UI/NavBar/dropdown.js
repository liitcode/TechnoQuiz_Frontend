
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './dropdown.scss';
import { logout } from '../../../Redux/actions/actionCreators/auth';

const Dropdown = () => {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
  };
  return (
    <>
      <ul className='dropdown-menu'>
      <li className='dropdown-item'>
              Pesto
      </li>
      <li className='dropdown-item'>
              Score : 420
      </li>
      <li>
        <Link to ='/signin'className='dropdown-link' onClick={logOut}>
          Logout
        </Link>
      </li>

      </ul>
    </>
  );
}

export default Dropdown;