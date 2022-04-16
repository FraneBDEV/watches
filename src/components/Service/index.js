import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"

import certina from './certina.webp'
import hamilton from './hamilton.webp'
import longines from './longines.webp'
import omega from './omega.webp'
import tissot from './tissot.webp'

export default function Service() {
  return (
    <div className='service' id='service'>
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
      <p style={{fontFamily: 'Orbitron'}}>Zapraszamy ze wszystkimi innymi markami zegarków, które potrzebują fachowej pomocy. Na wykonane usługi udzielamy 2 letniej gwarancji.</p>
    </div>
  )
}
