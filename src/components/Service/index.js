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
            <div className="text col-sm-12 col-md-6">
                hej
            </div>
            <div className='map col-sm-12 col-md-6'>
                {/* https://google-map-generator.com stad przekopiowac src */}
                <iframe 
                title='Google Maps' 
                src="https://maps.google.com/maps?q=pu%C5%82awska&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                frameBorder="0" 
                style={{border:0, margin:0}} 
                allowFullScreen="" 
                aria-hidden="false" 
                tabIndex="0" />
            </div>
            
            
        </div>
        
    </div>
  )
}
