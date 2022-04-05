import React from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Modal from 'react-modal';
import {GrAddCircle} from 'react-icons/gr';
import './TeacherQuestionContr.scss'
import TeacherDashNav from '../../components/TeacherDashNav/TeacherDashNav';
import QuestionCard from '../../components/QuestionCard/QuestionCard';

function TeacherQuestionContr() {

    const [qp, setQp] = React.useState([
        {
            id: 1,
            question: 'What is Black Box?',
            subject: 'Physics'
        }
    ])

    const [question, setQuestion] = React.useState('');
    const [generating, setGenerating] = React.useState(false);
    const [publish, setPublish] = React.useState(false);
    const [subject, setSubject] = React.useState('English');
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
    <div>
        <TeacherDashNav />
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
        <div className='qp-input'>
          <textarea value={question} onChange={(e) => {setQuestion(e.target.value)}} placeholder="Enter your question..." name="" id="" cols="30" rows="5"></textarea>
        </div>
        <div className='qp-publish-container'>
          {
            publish ? (<button style={{ opacity: 0.7 }}>Publishing...Please Wait</button>) : (<button onClick={() => {
                setPublish(true);
                setTimeout(() => {
                setQp(qp => [...qp, {id: qp[qp.length - 1]['id'] + 1, question: question, subject: subject}])
                closeModal();
                console.log(qp)
                setPublish(false);
              }, 3000);
            }}>Publish Question</button>)
          }

        </div>
      </Modal>
        <div className='pub-new-question' onClick={() => {openModal()}}>
            <h1><GrAddCircle className='teacher-qp-add-icon'/>Publish New Question</h1>
        </div>
        <div className='contributions'>
            <div className='contr-questions-head'>
                <h1>Contributions</h1>
            </div>
            <div className='contr-questions'>
                {
                    qp.map((item) => {
                        return (<QuestionCard key={item.id} question={item.question} subject={item.subject} />)
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default TeacherQuestionContr