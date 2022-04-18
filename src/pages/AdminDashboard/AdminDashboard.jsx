import React from 'react';
import AdminTeacherReqCard from '../../components/AdminTeacherReqCard/AdminTeacherReqCard';
import './AdminDashboard.scss';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { IoIosArrowDropright } from 'react-icons/io';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Modal from 'react-modal';
import InstReqCard from '../../components/InstReqCard/InstReqCard';
import CourseCard from '../../components/CourseCard/CourseCard';


function AdminDashboard() {
  const [generating, setGenerating] = React.useState(false);
  const [courseViewing, setCourseViewing] = React.useState(false);
  const [publish, setPublish] = React.useState(false);
  const [currentView, setCurrentView] = React.useState('pending');
  const [subject, setSubject] = React.useState('English');
  const [partADiff, setPartADiff] = React.useState('easy');
  const [partBDiff, setPartBDiff] = React.useState('easy');
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [previewIsOpen, setPreviewIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function openPreviewModal() {
    setPreviewIsOpen(true);
  }

  function closePreviewModal() {
    setPreviewIsOpen(false);
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
        className='preview-modal'
        isOpen={previewIsOpen}
        onRequestClose={closePreviewModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.9)'
          }
        }}
      >
        <div className='pdf-previewer'>
          <h1>Nothing to Preview</h1>
        </div>
        <div className='publish-btn-container'>
          {
            publish ? (<button style={{ opacity: 0.7 }}>Publishing...</button>) : (<button onClick={() => {
              setPublish(true);
              setTimeout(() => { closePreviewModal() }, 3000);
            }}>Publish</button>)
          }
        </div>
      </Modal>


      <Modal
        className="admin-qpgen-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.9)'
          }
        }}
      >
        <div className='sub-select-container'>
          <h1>Select Subject</h1>
          <Select
            labelId="demo-simple-select-label"
            className='sub-select'
            value={subject}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={'English'}>English</MenuItem>
            <MenuItem value={'Physics'}>Physics</MenuItem>
            <MenuItem value={'Chemistry'}>Chemistry</MenuItem>
          </Select>
        </div>
        <div className='part-a-diff-container'>
          <div className='part-a-head'>
            <h1>Part A Difficulty</h1>
          </div>
          <div className='part-a-diff'>
            {
              partADiff == 'easy' ? (
                <h1 className='part-a-active'>Easy</h1>
              ) : (<h1 onClick={() => { setPartADiff('easy') }}>Easy</h1>)
            }
            {
              partADiff == 'medium' ? (<h1 className='part-a-active'>Medium</h1>) : (<h1 onClick={() => { setPartADiff('medium') }}>Medium</h1>)
            }
            {
              partADiff == 'hard' ? (<h1 className='part-a-active'>Hard</h1>) : (<h1 onClick={() => { setPartADiff('hard') }}>Hard</h1>)
            }
          </div>
        </div>
        <div className='part-b-diff-container'>
          <div className='part-b-head'>
            <h1>Part B Difficulty</h1>
          </div>
          <div className='part-b-diff'>
            {
              partBDiff == 'easy' ? (
                <h1 className='part-b-active'>Easy</h1>
              ) : (<h1 onClick={() => { setPartBDiff('easy') }}>Easy</h1>)
            }
            {
              partBDiff == 'medium' ? (<h1 className='part-b-active'>Medium</h1>) : (<h1 onClick={() => { setPartBDiff('medium') }}>Medium</h1>)
            }
            {
              partBDiff == 'hard' ? (<h1 className='part-b-active'>Hard</h1>) : (<h1 onClick={() => { setPartBDiff('hard') }}>Hard</h1>)
            }
          </div>
        </div>
        <div className='qp-publish-container'>
          {
            generating ? (<button style={{ opacity: 0.7 }}>Generating...Please Wait</button>) : (<button onClick={() => {
              setGenerating(true);
              setTimeout(() => {
                closeModal();
                openPreviewModal();
              }, 3000);
            }}>Generate Question Paper</button>)
          }

        </div>
      </Modal>
      <div className='qp-gen-container' onClick={() => { openModal() }}>
        <h1><AiOutlineFileAdd className='gen-qp-icon' />Generate Question Paper</h1>
      </div>
      <div className='create-course-container'>
        <div className='create-course-btn-container'>
          <button>Create New Course</button>
        </div>
        <div className='courses-container'>
          <div className='create-course-head' onClick={() => { setCourseViewing(!courseViewing) }}>
            <h1>Active Courses</h1>
            <IoIosArrowDropright className='side-arrow-icon' />
          </div>
          {
            courseViewing ? (
              <div className='courses-list'>
                <CourseCard name="Data Mining" code="CS401" branch="CSE" />
                <CourseCard name="Data Mining" code="CS401" branch="CSE" />
                <CourseCard name="Data Mining" code="CS401" branch="CSE" />

              </div>
            ) : (null)
          }

        </div>

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
              <InstReqCard name="College of Engineering Kallooppara" instno="PTA" email="cek@gmail.com" />
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