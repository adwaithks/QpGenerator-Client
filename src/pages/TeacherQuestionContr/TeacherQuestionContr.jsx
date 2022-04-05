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
            subject: 'Physics',
            difficulty: 'Easy',
            module: '1'
        }
    ])

    const [question, setQuestion] = React.useState('');
    const [generating, setGenerating] = React.useState(false);
    const [publish, setPublish] = React.useState(false);
    const [subject, setSubject] = React.useState('English');
    const [subDiff, setSubDiff] = React.useState('Easy');
    const [subModule, setSubModule] = React.useState('1');
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    function handleSubModule(e) {
      setSubModule(e.target.value);
    }

    function handleSubDiff(e) {
      setSubDiff(e.target.value);
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
          <h1>Enter Question</h1>
          <textarea value={question} onChange={(e) => {setQuestion(e.target.value)}} placeholder="Enter your question..." name="" id="" cols="30" rows="5"></textarea>
        </div>
        <div className='sub-select-container'>
          <h1>Select Difficulty</h1>
          <Select
            labelId="demo-simple-select-label"
            className='sub-select'
            value={subDiff}
            label="Age"
            onChange={handleSubDiff}
          >
            <MenuItem value={'Easy'}>Easy</MenuItem>
            <MenuItem value={'Medium'}>Medium</MenuItem>
            <MenuItem value={'Hard'}>Hard</MenuItem>
          </Select>
        </div>
        <div className='sub-select-container'>
          <h1>Select Module</h1>
          <Select
            labelId="demo-simple-select-label"
            className='sub-select'
            value={subModule}
            label="Age"
            onChange={handleSubModule}
          >
            <MenuItem value={'1'}>1</MenuItem>
            <MenuItem value={'2'}>2</MenuItem>
            <MenuItem value={'3'}>3</MenuItem>
            <MenuItem value={'4'}>4</MenuItem>
            <MenuItem value={'5'}>5</MenuItem>
            <MenuItem value={'6'}>6</MenuItem>
          </Select>
        </div>
        <div className='qp-publish-container'>
          {
            publish ? (<button style={{ opacity: 0.7 }}>Publishing...Please Wait</button>) : (<button onClick={() => {
                setPublish(true);
                setTimeout(() => {
                setQp(qp => [...qp, {id: qp[qp.length - 1]['id'] + 1, question: question, subject: subject, module: subModule, difficulty: subDiff}])
                closeModal();
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
                        return (<QuestionCard modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} key={item.id} question={item.question} subject={item.subject} difficulty={item.difficulty} module={item.module} />)
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default TeacherQuestionContr