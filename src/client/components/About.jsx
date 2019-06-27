import React from 'react'

import GD18 from './GD18Logo'
import Footer from './Footer'

export default function About() {
  document.documentElement.style.setProperty('--main-bg', '#fff')
  document.documentElement.style.setProperty('--main-color', '#00a0e9')
  document.body.style.overflowY = 'scroll'
  return (
    <React.Fragment>
      <div className="about grid-auto">
        <GD18 />

        <div className="section-about-1">
          <h1>About</h1>
          <p>
            GD18 is a graduate exhibition of Graphic Design students from
            Whitecliffe College of Arts and Design. The exhibition takes
            inspiration from the interface of Adobe InDesign, the exhibition
            space makes visible the invisible elements integral to the structure
            of an InDesign document. GD18 is a showcase of projects varying in
            media as well as lines of enquiry, come along to support and
            celebrate our graduating designers.
          </p>
          <div>
            <img
              src="./src/assets/images/wcad/image_about_01.png"
              alt="Imgage of an InDesign document"
            />
          </div>
          <div>
            <a href="https://www.instagram.com/gd18exhibition/" target="blank">
              @gd18exhibition
            </a>
            <br />
            <a href="mailto:gd18@whitecliffe.ac.nz" target="blank">
              gd18@whitecliffe.ac.nz
            </a>
          </div>
        </div>

        <div className="section-about-banner">
          <img
            src="./src/assets/images/wcad/image_about_02.png"
            alt="about-banner"
          />
        </div>

        <div className="section-about-2">
          <p>
            Whitecliffe Graphic Design graduates are thinking practitioners with
            an understanding of both contemporary practice and traditional
            mythologies of the sphere of Graphic Design. Their broad technical
            skills mean they are well equipped to explore and articulate a
            diverse range of visual outcomes for design projects, making them
            highly sought after by the industry
          </p>
          <div>
            <h2>
              <a href="mailto:enquiries@whitecliffe.ac.nz">
                enquiries@whitecliffe.ac.nz
              </a>
              <a
                href="https://whitecliffe.ac.nz/programmes/graphic-design"
                target="blank"
              >
                whitecliffe.ac.nz/programmes/graphic-design
              </a>
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}
