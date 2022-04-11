import React from 'react'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from './Photos/image1.jpg'
import image2 from './Photos/image2.jpg'
import image3 from './Photos/image3.jpg'

export default function Gallery() {
  return (
    <div className='gallery'>
      <h1>Galeria</h1>
      <hr />
      <div class="row">
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            src={image1}
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />

          <img
            src={image2}
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
          />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
          <img
            src={image3}
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Mountains in the Clouds"
          />

          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
          />

          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Yosemite National Park"
          />
        </div>
      </div>
    </div>
  )
}
