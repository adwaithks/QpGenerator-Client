import React from 'react';
import './TeacherDashboard.scss';

function TeacherDashboard() {

  const [currentView, setCurrentView] = React.useState('questions');
  const [editing, setEditing] = React.useState(false);

  return (
    <div className='teacher-dashboard'>
      <div className='teacher-category'>
          {
            currentView == 'questions' ? (
              <>
                <h2 className='cat-active'>Manage Questions</h2>
                <h2 onClick={() => { setCurrentView('profile') }} className='cat-inactive'>Edit Profile</h2>
              </>
            ) : (
              <>
                <h2 onClick={() => { setCurrentView('questions') }} className='cat-inactive'>Manage Questions</h2>
                <h2 className='cat-active'>Edit Profile</h2>
              </>
            )
          }
        </div>
      <div className='teacher-activity'>
        {
          currentView == 'questions' ? (
            <>
              
            </>
          ) : (
            <>
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
        </div>
            </>
          )
        }
      </div>
    </div>
  )
}

export default TeacherDashboard;