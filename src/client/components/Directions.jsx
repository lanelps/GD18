import React from 'react'

import GD18 from './GD18Logo'
import Footer from './Footer'

import Iframe from 'react-iframe'

export default function Directions() {
  document.documentElement.style.setProperty('--main-bg', '#fff')
  document.documentElement.style.setProperty('--main-color', '#00a0e9')
  return (
    <React.Fragment>
      <div className="directions grid-auto">
        <GD18 />
        <h1 className="title">Directions</h1>
        <div className="opening">
          <h2>Opening</h2>
          <p>
            Nov 16th 17:30 – 20:00 <br />
            Nov 17th 10:00 – 16:00
          </p>
        </div>
        <div className="demo-gallery">
          <h2>DEMO Gallery</h2>
          <p>
            21 Shaddock Street, <br />
            Eden Terrace, Auckland
          </p>
        </div>
        <div className="direction-iframe">
          <Iframe
            url="https://snazzymaps.com/embed/160486"
            width="100%"
            height="426px"
          />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}
