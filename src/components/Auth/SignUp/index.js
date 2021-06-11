/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
import React , { useState,useRef } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Form from 'react-validation/build/form';
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { register } from '../../../Redux/actions/actionCreators/auth';

import '../auth.css';

const required = (value) => {
    if (!value) {
        return (
            <div className='alert alert-danger' role='alert'>
            This field is required
            </div>
        );
    }
};

const mail = value => {
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

    const [ email, setEmail ] = useState('');
    const [ password , setPassword ] = useState('');
    const [ username , setUsername ] = useState('');
    const [ successful,setSuccessful ] = useState(false);

    const { message } = useSelector(state => state.message);

    const dispatch = useDispatch();
    
    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };
    
    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleRegister = (e) => {
        e.preventDefault();

        setSuccessful(false);

        form.current.validateAll();

        if (checkButton.current.context._errors.length === 0){
            dispatch(register(username,email,password))
            .then(()=>{
                setSuccessful(true);
                <Redirect to='/category' />
            })
            .catch(()=>{
                setSuccessful(false);
            });
        }
    };

    return(
        <div className='col-md-12'>
            <div className='card card-container'>
                <img
                src = '//ssl.gstatic.com/accounts/ui/avatar_2x.png'
                alt = 'profile-img'
                className = 'profile-img-card'
                />

                <Form onSubmit={handleRegister} ref={form}>
                {!successful && (
                    <div>
                    <div className='form-group'>
                        <label htmlFor='username' >Name</label>
                        <Input
                            type = 'text'
                            className = 'form-control'
                            name = 'username'
                            value = {username}
                            onChange = {onChangeUsername}
                            validations = {[required,vusername]}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email' >Email</label>
                        <Input
                            type = 'text'
                            className = 'form-control'
                            name = 'email'
                            value = {email}
                            onChange = {onChangeEmail}
                            validations = {[required,mail]}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password' >Password</label>
                        <Input
                            type = 'password'
                            className = 'form-control'
                            name = 'password'
                            value = {password}
                            onChange = {onChangePassword}
                            validations = {[required,vpassword]}
                        />
                    </div>
                    <div className="form-group">
                       <button className="btn btn-primary btn-block" type='button'>Sign Up</button>
                    </div>
                </div>
                )}
                {message && (
                    <div className="form-group">
                        <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                        {message}
                        </div>
                    </div>
                )}
                    <CheckButton style={{ display: "none" }} ref={checkButton} />
                </Form>
            </div>
        </div>
    );
};

export default Register;