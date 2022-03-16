import React from 'react'
import "./styles.css"

export default function StartPage({ scrollToNews }) {

 
  
  return (
    <>

    <div className='bg-image'>
        <div className='container'>
        <div className='title'>
            <h1>Maciej Trzosek</h1>
            <a href="#newsbg">
            <button>
              Aktualności
            </button>
            </a>   
            <button > 
              Serwis
            </button>
            <button>
              Kontakt 
            </button>
        </div>
        </div>
    </div>
    </>
    
  )
}
