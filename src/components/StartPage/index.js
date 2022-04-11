import React from 'react'
import "./styles.css"

export default function StartPage() {

  return (
    <>

    <div className='bg-image' id='home'>
        <div className='container'>
        <div className='title'>
            <h1>Maciej Trzosek</h1>
            <a href="#history">
            <button>
              Firma
            </button>
            </a>
            <a href="#news">
            <button>
              Na temat
            </button>
            </a>          
            <a href="#contact">
            <button>
              Kontakt 
            </button>
            </a>       
            <a href="#service">
            <button > 
              Serwis
            </button>
            </a>
            <a href="/gallery">
              <button>
                Galeria
              </button>
            </a>
        </div>
        <b className='creator'>Designed and Created by <a href="https://github.com/FraneBDEV">FraneB</a></b>
        </div>
    </div>
    </>
    
  )
}
