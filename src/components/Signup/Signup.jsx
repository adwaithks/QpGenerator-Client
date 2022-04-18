import React from 'react';
import './Signup.scss';
import { useNavigate } from 'react-router-dom';
import AutoCompleteInput from '../AutoCompleteInput/AutoCompleteInput';

function Signup() {

  const [signupParticipant, setSignupParticipant] = React.useState('teacher');
  const [showConfirmPass, setShowConfirmPass] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div className='signup'>
      <div className='signup-category'>
        {
          signupParticipant == 'teacher' ? (
            <>
              <h2 className='cat-active'>Teacher</h2>
              <h2 onClick={() => { setSignupParticipant('institution') }} className='cat-inactive'>Institution</h2>
            </>
          ) : (
            <>
              <h2 onClick={() => { setSignupParticipant('teacher') }} className='cat-inactive'>Teacher</h2>
              <h2 className='cat-active'>Institution</h2>
            </>
          )
        }
      </div>
      <div className='signup-content'>
        <div className='signup-head'>
          <h1>Sign Up</h1>
        </div>
        <form className='signup-form'>
          {
            signupParticipant == 'teacher' ? (
              <>
                <div className='name-container'>
                  <label htmlFor="">Full Name</label>
                  <input placeholder='Full Name' type="text" />
                </div>
                <div className='id-container'>
                  <label htmlFor="">Reg Num</label>
                  <input placeholder='Registration Number' type="text" />
                </div>
                <div className='collegename-container'>
                  <label htmlFor="">College</label>
                  <AutoCompleteInput />
                  {/*<input placeholder='College Name' type="email" />*/}
                </div>
                <div className='email-container'>
                  <label htmlFor="">Email Id</label>
                  <input placeholder='Email Id' type="email" />
                </div>
                <div className='password-container'>
                  <label htmlFor="">Password</label>
                  <input placeholder='Password' type="password" name="" id="" />
                </div>
              </>
            ) : (
              <>
                <div className='name-container'>
                  <label htmlFor="">Inst. Name</label>
                  <input placeholder='Institution Name' type="text" />
                </div>
                <div className='id-container'>
                  <label htmlFor="">Inst. Number</label>
                  <input placeholder='Institution Number' type="text" />
                </div>
                <div className='email-container'>
                  <label htmlFor="">Email Id</label>
                  <input placeholder='Email Id' type="email" />
                </div>
                <div className='password-container'>
                  <label htmlFor="">Password</label>
                  <input placeholder='Password' type="password" name="" id="" />
                </div>
              </>
            )
          }
          <div className='login-button-container'>
            <button>Sign Up</button>
          </div>
          <div className='login-to-signup-links'>
            <span onClick={() => { navigate('/') }}>Already have an Account?</span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup;