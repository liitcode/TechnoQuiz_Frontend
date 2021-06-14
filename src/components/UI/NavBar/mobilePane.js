
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './dropdown.scss';
import { logout } from '../../../Redux/actions/actionCreators/auth';
import { Button } from '../Button';

const MobilePane = () => {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
  };
  return(
    <>
      <li className='nav-item'><p className='nav-links'>Pesto</p></li>
      <li className='nav-item'><p className='nav-links'>Score : 420</p></li>
      <li className='nav-item'>
      <Link to='/signin' className='btn--link' onClick={logOut} >
      <Button buttonStyle = 'btn--outline' buttonSize ='btn--mobile'>Logout</Button></Link>
      </li>
    </>
    );
};

export default MobilePane;
