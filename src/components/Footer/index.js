import React from 'react'
import "./styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer-item">
        <p>
          Menu
        </p>
        <a href="#home">Home</a>
        <br />
        <a href="#history">Biografia</a>
        <br />
        <a href="#news">Aktualności</a>
        <br />
        <a href="/galery">Galeria</a>
        <br />
        <a href="#contact">Kontakt</a>
        <br />
        <a href="#service">Serwis</a>
      </div>
      <div className="footer-item">
        <p>
          Kontakt
        </p>
        📞(+48) 502 909 763
        <br />
        🏠ul. Puławska 96 02-620 Warszawa
        <br />
        📩trzosekzegarmistrz@gmail.com
      </div>
    </div>
  )
}
