import React from 'react'
import "./styles.css"

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

export default function Service() {
    const { height, width } = getWindowDimensions();
  return (
    <div className='service-bg' id='service'>
        <div className="service-container row"> 
            <div className="image">
              <div className="text">
                  <h1>Serwis</h1>
                  <hr />
                  <p>Szanowni Państwo, świadczymy pełny zakres usług następujących marek: </p>  
                  <ul>
                    <li>Longines</li>
                    <li>Omega</li>
                    <li>Certina</li>
                    <li>Tissot</li>
                    <li>Girard-Perregaux</li>
                    <li>Breitling</li>
                  </ul>
                  <p>Dla wtajemniczonych - dorabiamy czopy.</p>
                  <p>Wszelkie inne przypadki traktujemy z należytą uwagą. Naszym celem jest pozostanie w Państwa dobrej pamięci.</p>             
              </div>
            </div>
        </div>       
    </div>
  )
}
