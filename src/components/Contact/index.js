import React from 'react'
import "./styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
  return (
    <div className='contact row' id='contact'>
        <div className="map col-lg-8">
            <div className="phone" onClick={() =>  navigator.clipboard.writeText('502909763')}>📞(+48) 502 909 763</div>
        </div>
        <div className="form col-lg-4">
            <h1>Kontakt</h1>
            <hr />
            <form
                action="https://formspree.io/f/xvolqbno"
                method="POST"
            >
                <input className='input name col-lg-6' name="name" placeholder='Imie i nazwisko' required/>
                <br />
                <input className='input email' type="email" name="email" placeholder='Email' required/>
                <br />
                <textarea className='input message' name="message" placeholder='Wiadomość' required/>
                <br />
                <div className="form-btn-container">
                    <button className='input-button' type="submit">Wyślij</button>
                </div>  
            </form>
        </div>
    </div>
  )
}
