
import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './dropdown.scss';
import { logout } from '../../../Redux/actions/actionCreators/auth';

const Dropdown = () => {
  const dispatch = useDispatch();
  const logOut = () => dispatch(logout());
  const userName = useSelector((state) => state.auth.user.username);
  const score = useSelector((state) => state.auth.user.score);

  return (
    <>
      <ul className='dropdown-menu'>
      <li className='dropdown-item'>{userName}</li>
      <li className='dropdown-item'>{`Score : ${score}`}</li>
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