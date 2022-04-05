import React from 'react'
import './QuestionCard.scss';
import {FiEdit} from 'react-icons/fi';
import {MdDone} from 'react-icons/md';

function QuestionCard({subject, question}) {

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
        <h5 contentEditable={isEditing}>{subject}</h5>
    </div>
  )
}

export default QuestionCard