import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Directions from './Directions'
import Photos from './Photos'
import Student from './Student'

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <Header />
          <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/directions" component={Directions} />
            <Route exact path="/photos" component={Photos} />
            <Route exact path="/student:name" component={Student} />
          </Router>
          <Footer />
        </div>
      </React.Fragment>
    )
  }
}
