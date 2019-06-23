import React from 'react'
import { Link } from 'react-router-dom'

import studentsData from '../../data/students-data.json'

export default function Home() {
  const studentList = studentsData.map(student => (
    <li key={student.id}>
      <Link to={`/student/${student.url}`}>{student.name}</Link>
    </li>
  ))

  return (
    <React.Fragment>
      <div className="gd18">
        <a href="#">
          <img src="./src/client/assets/images/GD18.svg" />
        </a>
      </div>

      <div className="map">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 711 1122.13">
          <defs />
          <g id="Layer_14" data-name="Layer 14">
            <Link to="/about">
              <polygon
                className="cls"
                points="19.06 19.06 19.06 691.94 277.83 691.94 277.83 277.83 691.94 277.83 691.94 19.06 19.06 19.06"
              />
            </Link>
          </g>
          <g id="Layer_15" data-name="Layer 15">
            <polygon
              className="cls"
              points="277.83 691.94 277.83 484.88 484.88 484.88 484.88 277.83 691.94 277.83 691.94 691.94 277.83 691.94"
            />
          </g>
          <g id="Layer_16" data-name="Layer 16">
            <Link to="/directions">
              <rect
                className="cls"
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
                className="cls"
                x="19.06"
                y="691.94"
                width="258.76"
                height="205.56"
              />
            </a>
          </g>
          <g id="Layer_18" data-name="Layer 18">
            <a href="https://www.instagram.com/gd18exhibition/" target="blank">
              <rect
                className="cls"
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
                className="cls"
                x="277.83"
                y="691.94"
                width="414.11"
                height="411.12"
              />
            </Link>
          </g>
        </svg>
      </div>

      <div className="crest">
        <img src="./src/client/assets/images/wcad.svg" />
      </div>

      <div className="crest-text">
        <p>
          Whitecliffe College of Arts & Design <wbr /> Te Whare Takiura o
          Wikiriwhi
        </p>
        <p>
          Graphic Design Department <wbr /> Tari o Hoahoa Whakairoiro
        </p>
      </div>

      <div className="sponsors">
        <a
          className="blink"
          href="https://www.instagram.com/blinkboys/?hl=en"
          target="blank"
        >
          <img src="./src/client/assets/images/blink.svg" alt="Blink Boys" />
        </a>

        <a className="epic" href="https://epicbeer.com/" target="blank">
          <img src="./src/client/assets/images/epic.svg " alt="Epic Beer" />
        </a>
      </div>
    </React.Fragment>
  )
}
