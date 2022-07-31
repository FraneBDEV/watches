import React, { useState, useRef } from 'react'
import './index.css'
import OutsideClick from "./outsideClick";
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

export default function Header(props) {
    const [scroll, setscroll] = useState(false)
    const [showNavBar, setshowNavBar] = useState(false)

    const navRef = useRef(null);

    if(OutsideClick(navRef)) if(showNavBar) setshowNavBar(false)

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) setscroll(true) 
        else setscroll(false)
    })  
    function show() {
        if (showNavBar) setshowNavBar(false)
        else setshowNavBar(true)
    }  
  return (
    <>
    <header className={scroll? 'sticky' : ''}>
        <a className='home' href="/">Trzosek</a>
        <ul>
            <li>
            <HashLink to='/#firm'>Firma</HashLink>             
            </li>
            <li>
            <HashLink to='/#contact'>Kontakt</HashLink>     
            </li>
            <li>
            <HashLink to='/#service'>Serwis</HashLink>          
            </li>
            <li>
            <Link to='/gallery'>Galeria</Link>
            </li>
        </ul>
    </header>
    <div onClick={show} className='navBtn' id='navBtn' ref={navRef}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    <nav className={showNavBar ? 'show' : ''} >
        <ul>
            {props.return ? (<li><HashLink to='/'>Powrót</HashLink></li>) : ''}              
            <li>
            <HashLink to='/#firm'>Firma</HashLink>             
            </li>
            <li>
            <HashLink to='/#contact'>Kontakt</HashLink>     
            </li>
            <li>
            <HashLink to='/#service'>Serwis</HashLink>          
            </li>
            <li>
            <Link to='/gallery'>Galeria</Link> 
            </li>
        </ul>
    </nav>
    </>
  )
}
