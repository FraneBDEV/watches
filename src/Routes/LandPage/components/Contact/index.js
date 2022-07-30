import React from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
  return (
    <div className="contact-page row g-0" id='contact'>
        <div className="map col-lg-8">
        <iframe 
        width="100%" 
        height="100%" 
        id="gmap_canvas" 
        src="https://maps.google.com/maps?q=%20Pu%C5%82awska%2096&t=&z=13&ie=UTF8&iwloc=&output=embed" 
        frameBorder="0" 
        scrolling="no" 
        marginHeight="0" 
        marginWidth="0">
        </iframe>
        </div>
        <div className="contact col-lg-4">
            <h1>Kontakt</h1>
            <hr />
            <form
                    action="https://formspree.io/f/mayvlvgk"
                    method="POST"
            >   
                <div className="inputBox">
                    <input className='input name col-lg-6' name="name" required/>
                    <span>Imie i nazwisko</span>
                </div>
                <div className="inputBox">
                    <input className='input email' type="email" name="email" required/>
                    <span>Email</span>
                </div>
                <div className="inputBox">
                    <textarea className='input message' name="message" required/>
                    <span>Wiadomość</span>
                </div>
                <button className='input-button' type="submit">Wyślij</button>
            </form>
            <p>Lub zadzwoń na numer: (+48) 502 909 763</p>
        </div>
    </div>
    
  )
}
