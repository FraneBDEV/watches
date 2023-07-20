import React, { useEffect } from 'react'
import './index.css'
import maciej from './maciej.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function Start() {
  useEffect(() => {
    return document.querySelector(".side-panel-toggle").addEventListener("click", () => {
      document.querySelector(".side-panel").classList.toggle("side-panel-open");
      document.querySelector(".sp-icon-open").classList.toggle("sp-icon-rotate");
    });
    
  }, [])
  
  return (
    <div className="start-page row g-0" id='home'>
      <div className='sidepanel-wrapper'>
      {/* sidepanel: https://codepen.io/dcode-software/pen/OJxEWWz */}
      <button className="side-panel-toggle" type="button">
        <FontAwesomeIcon icon={faArrowLeft} className='sp-icon-open'/>
      </button>
      <div className="side-panel">
        <img src="https://niewiadow.pl/wp-content/uploads/2021/12/CG-01.png" alt="" />
        <a href="https://nordynski-nowe.otomoto.pl/inventory">Przyczepy Niewiadów</a>  - Twój dom jest zawsze tam gdzie Ty. Adam Baś zaprasza do Nordyński Centrum Motoryzacyjne w Łodzi.
    </div>
      </div>
      
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
