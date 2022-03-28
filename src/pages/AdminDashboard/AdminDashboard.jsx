import React from 'react';
import AdminTeacherReqCard from '../../components/AdminTeacherReqCard/AdminTeacherReqCard';
import './AdminDashboard.scss'

function AdminDashboard() {

  const [currentView, setCurrentView] = React.useState('pending');

  return (
    <div className='admin-dashboard'>
      <div className='admin-category'>
        {
          currentView == 'pending' ? (
            <>
              <h2 className='cat-active'>Pending Requests</h2>
              <h2 onClick={() => { setCurrentView('teacher') }} className='cat-inactive'>Teachers Onboard</h2>
            </>
          ) : (
            <>
              <h2 onClick={() => { setCurrentView('pending') }} className='cat-inactive'>Pending Requests</h2>
              <h2 className='cat-active'>Teachers Onboard</h2>
            </>
          )
        }
      </div>
      {
        currentView == 'pending' ? (
          <div className='pending-reqs'>
            <AdminTeacherReqCard name="Adwaith KS" regno="PTA18CS001" clgname="College of Engineering Kallooppara" email="adwaith@gmail.com" />
            <AdminTeacherReqCard name="Adwaith KS" regno="PTA18CS001" clgname="College of Engineering Kallooppara" email="adwaith@gmail.com" />
            <AdminTeacherReqCard name="Adwaith KS" regno="PTA18CS001" clgname="College of Engineering Kallooppara" email="adwaith@gmail.com" />
            <AdminTeacherReqCard name="Adwaith KS" regno="PTA18CS001" clgname="College of Engineering Kallooppara" email="adwaith@gmail.com" />
          </div>
        ) : (
          <div className='teachers-onboard'>
            <h1>No teachers has enrolled.</h1>
          </div>
        )
      }

    </div>
  )
}

export default AdminDashboard