import React from 'react';
import AdminTeacherReqCard from '../../components/AdminTeacherReqCard/AdminTeacherReqCard';
import './AdminDashboard.scss';
import { AiOutlineFileAdd } from 'react-icons/ai';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Modal from 'react-modal';


function AdminDashboard() {

  const [currentView, setCurrentView] = React.useState('pending');
  const [subject, setSubject] = React.useState('');
  const [partADiff, setPartADiff] = React.useState('');
  const [partBDiff, setPartBDiff] = React.useState('');
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleChange(e) {
    setSubject(e.target.value);
  }

  return (
    <div className='admin-dashboard'>
      <Modal
        className="admin-qpgen-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
          }
        }}
      >
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={subject}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={'English'}>English</MenuItem>
          <MenuItem value={'Physics'}>Physics</MenuItem>
          <MenuItem value={'Chemistry'}>Chemistry</MenuItem>
        </Select>
      </Modal>
      <div className='qp-gen-container' onClick={() => { openModal() }}>
        <h1><AiOutlineFileAdd className='gen-qp-icon' />Generate Question Paper</h1>
      </div>
      <div className='admin-activity'>
        <div className='admin-category'>
          {
            currentView == 'pending' ? (
              <>
                <h2 className='cat-active'>Pending Requests</h2>
                <h2 onClick={() => { setCurrentView('teachers') }} className='cat-inactive'>Teachers Onboard</h2>
              </>
            ) : currentView == 'teachers' ? (
              <>
                <h2 onClick={() => { setCurrentView('pending') }} className='cat-inactive'>Pending Requests</h2>
                <h2 className='cat-active'>Teachers Onboard</h2>
              </>
            ) : null
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
          ) : currentView == 'teachers' ? (
            <div className='teachers-onboard'>
              <h1>No teachers has enrolled.</h1>
            </div>
          ) : (null)
        }
      </div>
    </div>
  )
}

export default AdminDashboard