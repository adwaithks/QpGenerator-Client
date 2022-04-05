import React from 'react';
import TeacherDashNav from '../../components/TeacherDashNav/TeacherDashNav';
import './TeacherDashboard.scss';
import {BiUser} from 'react-icons/bi';

function TeacherDashboard() {

  const [editing, setEditing] = React.useState(false);

  return (
    <div className='teacher-dashboard'>
      <TeacherDashNav />
          <div className='teacher-dash-profile'>
            <div className='teacher-dash-profile-pic'>
              <BiUser className='teacher-profile-pic-icon' />
              <h1>Adwaith</h1>
            </div>
              <div className='name-container'>
                  <label htmlFor="">Full Name</label>
                  <input placeholder='Full Name' type="text" disabled={!editing} />
                </div>
                <div className='id-container'>
                  <label htmlFor="">Reg Num</label>
                  <input placeholder='Registration Number' type="text" disabled={!editing} />
                </div>
                <div className='collegename-container'>
                  <label htmlFor="">College</label>
                  <input placeholder='College Name' type="email" disabled={!editing} />
                </div>
                <div className='email-container'>
                  <label htmlFor="">Email Id</label>
                  <input placeholder='Email Id' type="email" disabled={!editing} />
                </div>
                <div className='password-container'>
                  <label htmlFor="">Password</label>
                  <input placeholder='Password' type="password" name="" id="" disabled={!editing} />
                </div>
                <div className='inst-edit-container'>
            {
                editing ? (
                    <button className='editing-on' onClick={() => {
                        setEditing(false)
                    }}>Save</button>
                ) : (
                    <button className='editing-off' onClick={() => {
                        setEditing(true)
                    }}>Edit</button>
                )
            }
              <button className='teacher-dash-logout'>Logout</button>
              </div>
              </div>
    </div>
  )
}

export default TeacherDashboard;