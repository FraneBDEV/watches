import React from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

export default function Footer() {
  return (
    <div className="footer">
        <div className="footer-item">
        <h6>Menu</h6>
        <HashLink to='/#home'>Home</HashLink>
        <br />
        <HashLink to='/#firm'>Firma</HashLink>
        <br />
        <Link to='/gallery'>Galeria</Link>
        <br />
        <HashLink to='/#contact'>Kontakt</HashLink>
        <br />
        <HashLink to='/#service'>Serwis</HashLink>
      </div>
      <div className="footer-item">
        <h6>Kontakt</h6>
        📞(+48) 502 909 763
        <br />
        🏠ul. Puławska 96 02-620 Warszawa
        <br />
        📩trzosekzegarmistrz@gmail.com
        <br />
        ✅pn-pt 10:00-18:00
      </div>
    </div>
  )
}
