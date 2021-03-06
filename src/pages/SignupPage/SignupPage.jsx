import React from 'react'
import './SignupPage.scss';
import { FaRegPaperPlane } from 'react-icons/fa';
import Signup from '../../components/Signup/Signup';
import Login from '../../components/Login/Login';

function Home() {
  return (
    <div className='home'>
      <div className='login-banner'>
        <div className='login-head'>
          <FaRegPaperPlane className='qp-icon' />
          <h1>Question Paper Generator</h1>
          <h4>Generate | Validate | All at your Convenience</h4>
        </div>
      </div>
      <div className='login-container'>
        <Signup />
      </div>
    </div>
  )
}

export default Home