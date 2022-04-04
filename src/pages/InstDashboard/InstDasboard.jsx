import React from 'react';
import './InstDasboard.scss';

function InstDasboard() {

    const [editing, setEditing] = React.useState(false);

  return (
    <div className='inst-dashboard'>
        <h1>Institution Dashboard</h1>
        <div className='inst-name-container'>
            <label htmlFor="">Inst. Name</label>
            <input placeholder='Institution Name' type="text" disabled={!editing} />
        </div>
        <div className='inst-id-container'>
            <label htmlFor="">Inst. Number</label>
            <input placeholder='Institution Number' type="text" disabled={!editing} />
        </div>
        <div className='inst-email-container'>
            <label htmlFor="">Email Id</label>
            <input placeholder='Email Id' type="email" disabled={!editing} />
        </div>
        <div className='inst-password-container'>
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
    </div>
  )
}

export default InstDasboard