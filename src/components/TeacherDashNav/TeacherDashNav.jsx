import React from 'react';
import {BiUser} from 'react-icons/bi';
import './TeacherDashNav.scss';
import {useNavigate} from 'react-router-dom'

function TeacherDashNav() {

    const navigate = useNavigate()
  return (
    <nav className='teacher-dash'>
        <div className='teacher-dash-head'><h1>Teacher Dashboard</h1></div>
        <div className='teacher-dash-links'>
            <h3 onClick={() => {navigate('/teacher/dashboard/manage')}}>Manage Questions</h3>
            <div className='teacher-dash-avatar' onClick={() => {
              navigate('/teacher/dashboard')
            }}>
                <BiUser className='teacher-avatar-icon' />
                <h2>Adwaith</h2>
            </div>
        </div>
    </nav>
  )
}

export default TeacherDashNav