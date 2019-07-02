import React from 'react'
import { Link } from 'react-router-dom'

import studentsData from '../../data/students-data.json'

import GD18 from './GD18Logo'
import Footer from './Footer'

export default function Works() {
  window.scrollTo(0, 0)
  document.documentElement.style.setProperty('--main-bg', '#fff')
  document.documentElement.style.setProperty('--main-color', '#00a0e9')
  document.body.style.overflowY = 'scroll'

  const studentList = studentsData.map(student => (
    <li key={student.id}>
      <Link to={`/student/${student.url}`}>{student.name}</Link>
    </li>
  ))
  return (
    <React.Fragment>
      <GD18 />
      <div className="works grid-auto">
        <div className="works-section">
          <h1>Works</h1>
          <ul>{studentList}</ul>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}
