import React from 'react'

import crest from '../../assets/images/wcad/wcad.svg'

export default function Footer() {
  return (
    <div className="footer grid-auto">
      <img src={crest} />

      <div className="footer-div-1">
        <h3>
          Whitecliffe College of Arts&nbsp;&amp;&nbsp;Design <br /> 
          Te Whare Takiura o Wikiriwhi
        </h3>
        <h3>
          &copy; GD18. WCAD. 2018 <br />
          All Rights Reserved
        </h3>
      </div>

      <div className="footer-div-2">
        <h3>
          Graphic Design Department <br />
          Tari o Hoahoa Whakairoiro
        </h3>
        <p>
          <a href="tel:+6493095970">+64 9 309 5970</a>
          <br />
          <a href="mailto:gd18@whitecliffe.ac.nz">gd18@whitecliffe.ac.nz</a>
        </p>
        <div>
          <p>
            Brooke House <br />
            24 Balfour Road <br />
            Auckland 1052
          </p>
        </div>
      </div>
    </div>
  )
}
