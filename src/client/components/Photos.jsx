import React from 'react'

// import photosData from '../../data/photos-data.json'
import photosArr from '../../data/photos-data'

import GD18 from './GD18Logo'
import Footer from './Footer'

export default function Photos() {
  document.documentElement.style.setProperty('--main-bg', '#fff')
  document.documentElement.style.setProperty('--main-color', '#00a0e9')
  document.body.style.overflowY = 'scroll'

  // const photosImages = photosData[0].images.map(image => (
  //   <div
  //     key={image}
  //     className="photo"
  //     style={{
  //       backgroundImage: `url(./src/assets/images/exhibition/${image}.jpg)`
  //     }}
  //   />
  // ))

  const photosImages = photosArr.map(image => (
    <div
      key={image}
      className="photo"
      style={{ backgroundImage: `url(${image})` }}
    />
  ))

  return (
    <React.Fragment>
      <div className="photos grid-auto">
        <GD18 />
        <div className="section-photos">
          <h1>Exhibiton Photos</h1>
          {photosImages}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}
