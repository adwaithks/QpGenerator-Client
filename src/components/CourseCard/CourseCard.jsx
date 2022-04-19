import React from 'react'
import './CourseCard.scss'

function CourseCard({ name, semester, code, branch }) {
  return (
    <div className='course-card'>
      <h1>{name}</h1>
      <h3>{code}</h3>
      <h3>{semester}</h3>
      <h3>{branch}</h3>
    </div>
  )
}

export default CourseCard