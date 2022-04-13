import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"

import certina from './certina.jpg'
import hamilton from './hamilton.jpg'
import longines from './longines.jpg'
import omega from './omega.jpg'
import tissot from './tissot.jpg'

export default function Service() {
  return (
    <div className='service'>
      <h1>Serwis</h1>
      <hr />
      <p className='b'>Jesteśmy certyfikowanym serwisem marek:</p>
      <div className="logos-container">
        <ul className='logos'>
          <li>
            <img src={certina} alt="" />
          </li>
          <li>
            <img src={hamilton} alt="" />
          </li>
          <li>
            <img src={longines} alt="" />
          </li>
        </ul>
        <ul className='logos'>
          <li>
            <img src={omega} alt="" />
          </li>
          <li>
            <img src={tissot} alt="" />
          </li>
        </ul>
      </div>
      <p>Oferujemy również naprawę; marek: ,costam ,costam ,costam; zegarów: sciennych, antycznych</p>
    </div>
  )
}