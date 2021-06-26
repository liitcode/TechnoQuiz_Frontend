/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail } from 'validator';
import { MdFingerprint } from 'react-icons/md';
import regImg from '../../../assets/images/register.svg';
import { register } from '../../../Redux/actions/actionCreators/auth';
import { Button } from '../../UI/Button';
import '../auth.scss';

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required
      </div>
    );
  }
};

const mail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Register = () => {
  const form = useRef();
  const checkButton = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [successful, setSuccessful] = useState(false);
  const { message } = useSelector((state) => state.message);
  const { redir } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  if (redir === true) return <Redirect to='/signin' />

  const onChangeEmail = (e) => {
    const emailUpdate = e.target.value;
    setEmail(emailUpdate);
  };

  const onChangeUsername = (e) => {
    const usernameUpdate = e.target.value;
    setUsername(usernameUpdate);
  };

  const onChangePassword = (e) => {
    const passwordUpdate = e.target.value;
    setPassword(passwordUpdate);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkButton.current.context._errors.length === 0) {
      dispatch(register(username, email, password))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };

  return (
    <div className="base">
      <div className='col'>
        <Link className='col-logo-link' to='/'>
          <MdFingerprint className='col-logo' />
          TechnoQuiz
        </Link>
      </div>
      <div className="base-container">
        <div className="header">REGISTER</div>
        <div className="content">
          <div className="image">
            <img src={regImg} alt="" />
          </div>
          <Form onSubmit={handleRegister} ref={form}>
            <div>
              <div className="form-group">
                <label htmlFor="username">Name</label>
                <Input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required, vusername]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, mail]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                />
              </div>
              <div className="form-group">
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Sign Up
                </Button>
              </div>
            </div>
            {message && (
              <div className="form-group">
                <div className={!successful ? 'alert-success' : 'alert-danger'} role="alert">
                  {message}
                </div>
              </div>
            )}
            <div className="form-group">
              <div className="form-text">
                Already have an account? <Link className='form-text-link' to='/signin'>SignIn!</Link>
              </div>
            </div>
            <CheckButton
              className="btn"
              style={{ display: 'none' }}
              ref={checkButton}
            />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
