import React from 'react'
import './QuestionCard.scss';
import {FiEdit} from 'react-icons/fi';
import {MdDone} from 'react-icons/md';

function QuestionCard({subject, question, module, difficulty}) {

    const [isEditing, setIsEditing] = React.useState(false);

  return (
    <div className='question-card'>
        <div className='question-card-edit-container'>
            {
                isEditing ? (
                    <MdDone className='done-icon' onClick={() => {setIsEditing(false)}} />
                ) : (
                    <FiEdit className='edit-icon' onClick={() => {setIsEditing(true)}} />
                )
            }
        </div>
        <h3 contentEditable={isEditing}>{question}</h3>
        <div className='sub-info'>
        <h5 contentEditable={isEditing} className='sub-subject'>{subject}</h5>
        <h5>Module <h4 contentEditable={isEditing} className='sub-module'>{module}</h4></h5>
        <h5 contentEditable={isEditing} className='sub-difficulty'>{difficulty}</h5>
        </div>
    </div>
  )
}

export default QuestionCard