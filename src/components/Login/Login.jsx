import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

  return (
    <div className='login'>
      <div className='login-head'>
        <h1>Sign In</h1>
      </div>
      <div className='login-form'>
        <div className='email-container'>
          <label htmlFor="">Email Id</label>
          <input placeholder='Email Id' type="email" />
        </div>
        <div className='password-container'>
          <label htmlFor="">Password</label>
          <input placeholder='Password' type="password" name="" id="" />
        </div>
        <div className='login-button-container'>
          <button>Sign In</button>
        </div>
        <div className='login-to-signup-links'>
          <span onClick={() => { navigate('/signup') }}>Don't have an Account?</span>
        </div>
      </div>
    </div>
  )
}

export default Login