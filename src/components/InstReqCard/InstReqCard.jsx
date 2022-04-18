import React from 'react'
import './InstReqCard.scss'

function InstReqCard({ name, instno, email, pass }) {
  return (
    <div className='inst-req-card'>
      <div className='admin-teacher-name'>
        <h1>{name}</h1>
      </div>
      <div className='admin-teacher-regno'>
        <h3>{instno}</h3>
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

export default InstReqCard