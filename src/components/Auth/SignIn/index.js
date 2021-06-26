/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, withRouter } from 'react-router-dom';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail } from 'validator';
import { MdFingerprint } from 'react-icons/md';
import loginImg from '../../../assets/images/login.svg';
import { login } from '../../../Redux/actions/actionCreators/auth';
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

const Login = (props) => {
  const form = useRef();
  const checkButton = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { isLoggedin } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    const emailUpdate = e.target.value;
    setEmail(emailUpdate);
  };

  const onChangePassword = (e) => {
    const passwordUpdate = e.target.value;
    setPassword(passwordUpdate);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkButton.current.context._errors.length === 0) {
      dispatch(login(email, password))
        .then(() => {
          props.history.push('/category');
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedin) return <Redirect to="/category" />;

  return (
    <div className="base">
      <div className='col'>
        <Link className='col-logo-link shine' to='/'>
          <MdFingerprint className='col-logo' />
          TechnoQuiz
        </Link>
      </div>
      <div className="base-container">
        <div className="header">LOGIN</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="" />
          </div>
          <Form onSubmit={handleLogin} ref={form}>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
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
              <label className="form-label" htmlFor="password">Password</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={onChangePassword}
                validations={[required]}
              />
            </div>
            <div className="form-group">
              <Button
                buttonSize='btn--wide'
                buttonColor='primary'
                disabled={loading}
              >
                {loading && (
                  <span className="spinner-border spinner-border-sm" />
                )}
                <span>Login</span>
              </Button>
            </div>
            {message && (
              <div className="form-group">
                <div className="alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
            <div className="form-group">
              <div className="form-text">
                Don&apos;t have an account yet? <Link className='form-text-link' to='/signup'>SignUp!</Link>
              </div>
            </div>
            <CheckButton
              style={{ display: 'none' }}
              ref={checkButton}
            />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
