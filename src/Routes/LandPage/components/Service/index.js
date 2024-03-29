import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Carousel from 'react-bootstrap/Carousel'

import './index.css'

import certina from './certina.webp'
import hamilton from './hamilton.webp'
import longines from './longines.webp'
import omega from './omega.webp'
import tissot from './tissot.webp'

import certyfikat1 from './certyfikaty/certyfikat1.jpg'
import certyfikat2 from './certyfikaty/certyfikat2.jpg'
import certyfikat3 from './certyfikaty/certyfikat3.jpg'
import certyfikat4 from './certyfikaty/certyfikat4.jpg'
import certyfikat5 from './certyfikaty/certyfikat5.jpg'
import certyfikat6 from './certyfikaty/certyfikat6.jpg'

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
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block mx-auto"
                src={certyfikat1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block mx-auto"
                src={certyfikat2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block mx-auto"
                src={certyfikat3}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block mx-auto"
                src={certyfikat4}
                alt="Fourth slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block mx-auto"
                src={certyfikat5}
                alt="Fifth slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block mx-auto"
                src={certyfikat6}
                alt="Sixth slide"
                />
            </Carousel.Item>
        </Carousel>

      <p style={{fontFamily: 'Orbitron'}}>Zapraszamy ze wszystkimi innymi markami zegarków, które potrzebują fachowej pomocy. Na wykonane usługi udzielamy 2 letniej gwarancji.</p>
    </div>
  )
  
}
