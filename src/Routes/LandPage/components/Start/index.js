import React from 'react'
import './index.css'
import maciej from './maciej.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashLink } from 'react-router-hash-link';

export default function Start() {
  return (
    <div className="start-page row g-0" id='home'>
      <div className="image col-md-6 col-sm-12">
        <img src={maciej} alt="" />
        </div>
      <div className="col-md-6 col-sm-12">
        <div className="text">
          <h1 className='name'>Maciej Trzosek</h1>
          <p className='desc'>Zegarmistrz</p>
          <div className="buttons">
            <HashLink to='#contact'><button>KONTAKT</button></HashLink>
            <HashLink to='#service'><button>SERWIS</button></HashLink>
          </div>
        </div>
      </div>
    </div>
  )
}
