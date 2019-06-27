import React from 'react'

import studentsData from '../../data/students-data.json'

import GD18 from './GD18Logo'
import Footer from './Footer'

const Student = props => {
  document.documentElement.style.setProperty('--main-bg', '#fff')
  document.documentElement.style.setProperty('--main-color', '#00a0e9')
  document.body.style.overflowY = 'scroll'

  const url = props.match.params.url
  const student = studentsData.filter(student => student.url === url)[0]

  const studentImage = student.images.map(image => (
    <img
      key={image}
      src={image ? require(`../assets/images/${student.url}/${image}`) : ''}
    />
  ))

  const studentStatement = student.statement.map(state => (
    <p key={state}>{state}</p>
  ))

  const studentContact = Object.keys(student.contact).map((info, i) => (
    <React.Fragment key={i}>
      <a
        href={
          info === 'email'
            ? `mailto:${student.contact[info]}`
            : info === 'instagram'
            ? `https://www.instagram.com/${student.contact[info]}`
            : info === 'github'
            ? `https://www.github.com/${student.contact[info]}`
            : info === 'facebook'
            ? `https://www.facebook.com/${student.contact[info]}`
            : `https://${student.contact[info]}`
        }
        target="blank"
      >
        <h2>
          {info === 'instagram'
            ? `@${student.contact[info]}`
            : info === 'github'
            ? `github/${student.contact[info]}`
            : info === 'facebook'
            ? `facebook.com/${student.contact[info]}`
            : student.contact[info]}
        </h2>
      </a>
      <br />
    </React.Fragment>
  ))

  // console.log(student)

  return (
    <React.Fragment>
      <div className="student grid-auto">
        <GD18 />
        <div className="section-student">
          <div className="student-title">
            <h1 className="student-name">{student.name}</h1>
            <p className="student-project">{student.project}</p>
            <p className="student-qulification">{student.qual}</p>
          </div>

          <div className="student-image">{studentImage}</div>
          <div className="student-statement">{studentStatement}</div>
          <div className="student-contact">{studentContact}</div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Student
