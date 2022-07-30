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
            <HashLink to='/#firm'><a href="/">Firma</a></HashLink>             
            </li>
            <li>
            <HashLink to='/#contact'><a href="/">Kontakt</a></HashLink>     
            </li>
            <li>
            <HashLink to='/#service'><a href="/">Serwis</a></HashLink>          
            </li>
            <li>
            <Link to='/gallery'><a href="/">Galeria</a></Link>
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
            {props.return ? (<li><HashLink to='/'><a href=''>Powrót</a></HashLink></li>) : ''}              
            <li>
            <HashLink to='/#firm'><a href="/">Firma</a></HashLink>             
            </li>
            <li>
            <HashLink to='/#contact'><a href="/">Kontakt</a></HashLink>     
            </li>
            <li>
            <HashLink to='/#service'><a href="/">Serwis</a></HashLink>          
            </li>
            <li>
            <Link to='/gallery'><a href="/">Galeria</a></Link> 
            </li>
        </ul>
    </nav>
    </>
  )
}
