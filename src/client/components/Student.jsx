import React from 'react'

import studentsData from '../../data/students-data.json'

const Student = props => {
  const url = props.match.params.url
  const student = studentsData.filter(student => student.url === url)[0]

  const studentImage = student.images.map(image => (
    <img
      key={image}
      src={image ? require(`../assets/images/${image}.jpg`) : ''}
      width="400"
      height="400"
    />
  ))

  const studentContact = Object.keys(student.contact).map((info, i) => (
    <React.Fragment key={i}>
      {console.log(info)}
      <h3>{info}</h3>
      <a
        href={
          info === 'email'
            ? `mailto:${student.contact[info]}`
            : info === 'instagram'
            ? `https://www.instagram.com/${student.contact[info]}`
            : `https://${student.contact[info]}`
        }
        target="blank"
      >
        <span>
          {info === 'instagram'
            ? `@${student.contact[info]}`
            : student.contact[info]}
        </span>
      </a>
    </React.Fragment>
  ))

  // console.log(student)

  return (
    <React.Fragment>
      <h1 className="name">{student.name}</h1>
      <h2 className="project">{student.project}</h2>
      <div className="image">{studentImage}</div>
      <div className="statement">{student.statement}</div>
      <div className="contact">{studentContact}</div>
    </React.Fragment>
  )
}

export default Student
