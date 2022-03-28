import React from 'react';
import './AdminTeacherReqCard.scss';

function AdminTeacherReqCard({ name, regno, clgname, email }) {
  return (
    <div className='admin-teacher-req-card'>
      <div className='admin-teacher-name'>
        <h1>{name}</h1>
      </div>
      <div className='admin-teacher-regno'>
        <h3>{regno}</h3>
      </div>
      <div className='admin-teacher-clgname'>
        <h3>{clgname}</h3>
      </div>
      <div className='admin-teacher-email'>
        <h3>{email}</h3>
      </div>
      <div className='admin-teacher-accept-container'>
        <button className='accept-btn'>Accept</button>
        <button className='decline-btn'>Decline</button>
      </div>
    </div>
  )
}

export default AdminTeacherReqCard