import React from 'react'
import "./styles.css"
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

export default function StartPage() {

  return (
    <>

    <div className='bg-image' id='home'>
        <div className='container'>
        <div className='title'>
            <h1>Maciej Trzosek</h1>
            <HashLink to="#firm">
              <button>
                Firma
              </button>
            </HashLink>   
            <HashLink to='#news'>
              <button>
                Na temat
              </button>
            </HashLink>
            <HashLink to='#contact'>
              <button>
                Kontakt 
              </button>
            </HashLink>          
            <HashLink to='#service'>
              <button > 
                Serwis
              </button>
            </HashLink>       
            <Link to='/gallery'>
              <a>
              <button>
                Galeria
              </button>
              </a>
            </Link>    
        </div>
        <b className='creator'>Designed and Created by <a href="https://github.com/FraneBDEV">FraneB</a></b>
        </div>
    </div>
    </>
    
  )
}
