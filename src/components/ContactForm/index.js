import React from 'react';
import "./styles.css"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ContactForm() {
  return (
    <div className="contact-main" id='contact'>
        <div className='contact-container'>
        <h1>Kontakt</h1>
        <form
        action="https://formspree.io/f/xvolqbno"
        method="POST"
        >
            <input className='input name col-lg-6' name="name" placeholder='Pełne imie i nazwisko' required/>
            <br />
            <input className='input email' type="email" name="email" placeholder='Email' required/>
            <br />
            <textarea className='input message' name="message" placeholder='Wiadomość' required/>
            <br />
            <Button variant="outline-dark" className='input-button' type="submit">Wyślij</Button>
        </form>
        <p>Lub zadzwoń na numer (+48) 997 2137</p>
        </div>
    </div>
  );
}
