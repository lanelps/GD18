import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Directions from './Directions'
import Photos from './Photos'
import Student from './Student'

const App = () => {
  const bodyStyle = {
    backgroundColor: 'var(--main-cyan);',
    color: 'yellow'
  }

  return (
    <React.Fragment>
      <Router>
        <div className="wrapper" style={bodyStyle}>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/directions" component={Directions} />
          <Route exact path="/photos" component={Photos} />
          <Route exact path="/student/:url" component={Student} />
        </div>
      </Router>
    </React.Fragment>
  )
}

export default App
