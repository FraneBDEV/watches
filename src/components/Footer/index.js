import React from 'react'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

export default function Footer() {
  return (
    <div className="footer">
        <div className="footer-item">
        <h6>Menu</h6>
        <HashLink className='a' to='#home'>Home</HashLink>
        <br />
        <HashLink className='a' to='#firm'>Firma</HashLink>
        <br />
        <Link className='a' to='/gallery'>Galeria</Link>
        <br />
        <HashLink className='a' to='#contact'>Kontakt</HashLink>
        <br />
        <HashLink className='a' to='#service'>Serwis</HashLink>
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
