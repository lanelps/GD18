import React from 'react'
import { Link } from 'react-router-dom'

import gd18logo from '../../assets/images/wcad/GD18.svg'
import crest from '../../assets/images/wcad/wcad.svg'
import blink from '../../assets/images/wcad/blink.svg'
import epic from '../../assets/images/wcad/epic.svg'

export default function Home() {
  document.documentElement.style.setProperty('--main-bg', '#00a0e9')
  document.documentElement.style.setProperty('--main-color', '#fff')
  document.body.style.overflowY = 'hidden'

  const showDirections = () => {
    document.querySelector('.page-directions').style.visibility = 'visible'
    console.log('Directions')
  }

  const showAbout = () => {
    document.querySelector('.page-about').style.visibility = 'visible'
    console.log('About')
  }

  const showWorks = () => {
    document.querySelector('.page-works').style.visibility = 'visible'
    console.log('Works')
  }

  const showPhotos = () => {
    document.querySelector('.page-photos').style.visibility = 'visible'
    console.log('Photos')
  }

  const showFacebook = () => {
    document.querySelector('.page-facebook').style.visibility = 'visible'
    console.log('Facbook')
  }

  const showInstagram = () => {
    document.querySelector('.page-instagram').style.visibility = 'visible'
    console.log('Instagram')
  }

  const hide = () => {
    document.querySelectorAll('.page-titles h1').forEach(function(item) {
      item.style.visibility = 'hidden'
    })
    console.log('Hide')
  }

  return (
    <React.Fragment>
      <div className="grid-auto">
        <div className="gd18">
          <a href="#">
            <img src={gd18logo} />
          </a>
        </div>

        <div className="map">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 711 1122.13">
            <defs />
            <g id="Layer_14" data-name="Layer 14">
              <Link to="/about">
                <polygon
                  className="cls map-about"
                  onMouseEnter={showAbout}
                  onMouseLeave={hide}
                  points="19.06 19.06 19.06 691.94 277.83 691.94 277.83 277.83 691.94 277.83 691.94 19.06 19.06 19.06"
                />
              </Link>
            </g>
            <g id="Layer_15" data-name="Layer 15">
              <Link to="/works">
                <polygon
                  className="cls map-works"
                  onMouseEnter={showWorks}
                  onMouseLeave={hide}
                  points="277.83 691.94 277.83 484.88 484.88 484.88 484.88 277.83 691.94 277.83 691.94 691.94 277.83 691.94"
                />
              </Link>
            </g>
            <g id="Layer_16" data-name="Layer 16">
              <Link to="/directions">
                <rect
                  className="cls map-directions"
                  onMouseEnter={showDirections}
                  onMouseLeave={hide}
                  x="277.83"
                  y="277.83"
                  width="207.06"
                  height="207.06"
                />
              </Link>
            </g>
            <g id="Layer_17" data-name="Layer 17">
              <a
                href="https://www.facebook.com/events/329106797669601/"
                target="blank"
              >
                <rect
                  className="cls map-facebook"
                  onMouseEnter={showFacebook}
                  onMouseLeave={hide}
                  x="19.06"
                  y="691.94"
                  width="258.76"
                  height="205.56"
                />
              </a>
            </g>
            <g id="Layer_18" data-name="Layer 18">
              <a
                href="https://www.instagram.com/gd18exhibition/"
                target="blank"
              >
                <rect
                  className="cls map-instagram"
                  onMouseEnter={showInstagram}
                  onMouseLeave={hide}
                  x="19.06"
                  y="897.5"
                  width="258.76"
                  height="205.56"
                />
              </a>
            </g>
            <g id="Layer_19" data-name="Layer 19">
              <Link to="/photos">
                <rect
                  className="cls map-photos"
                  onMouseEnter={showPhotos}
                  onMouseLeave={hide}
                  x="277.83"
                  y="691.94"
                  width="414.11"
                  height="411.12"
                />
              </Link>
            </g>
          </svg>

          <div className="page-titles">
            <h1 className="page-about">About</h1>
            <h1 className="page-directions">Directions</h1>
            <h1 className="page-facebook">Facebook</h1>
            <h1 className="page-instagram">Instagram</h1>
            <h1 className="page-works">Works</h1>
            <h1 className="page-photos">Photos</h1>
          </div>
        </div>

        <div className="crest">
          <img src={crest} />
          <div className="crest-text">
            <h3>
              Whitecliffe College of Arts & Design <br /> Te Whare Takiura o
              Wikiriwhi
            </h3>
            <p>
              Graphic Design Department <br /> Tari o Hoahoa Whakairoiro
            </p>
          </div>
        </div>

        <div className="sponsors">
          <a
            className="blink"
            href="https://www.instagram.com/blinkboys/?hl=en"
            target="blank"
          >
            <img src={blink} alt="Blink Boys" />
          </a>

          <a className="epic" href="https://epicbeer.com/" target="blank">
            <img src={epic} alt="Epic Beer" />
          </a>
        </div>
      </div>
    </React.Fragment>
  )
}
