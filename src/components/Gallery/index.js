import React from 'react'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./Photos', false, /\.(png|jpe?g|svg|webp)$/));

const threePartIndex = Math.ceil(images.length / 3);

const thirdPart = images.splice(-threePartIndex);
const secondPart = images.splice(-threePartIndex);
const firstPart = images;     

export default function Gallery() {
  return (
    <div className='gallery'>
      <h1>Galeria</h1>
      <hr />
      <div className="row">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
        {
          thirdPart.map(item => (
            <img
            loading='lazy'
            src={item}
            className="w-100 shadow-1-strong rounded mb-4"
            alt='img'
            key={item}
          />
          ))
        }
        </div>

        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
        {
          secondPart.map(item => (
            <img
            src={item}
            className="w-100 shadow-1-strong rounded mb-4"
            alt='img'
            key={item}
          />
          ))
        }
        </div>

        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
        {
          firstPart.map(item => (
            <img
            src={item}
            className="w-100 shadow-1-strong rounded mb-4"
            alt='img'
            key={item}
          />
          ))
        }
        </div>
      </div>
    </div>
  )
}