import React from 'react'
import './index.css'
import maciej from './maciej.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Start() {
  return (
    <div className="start-page row" id='home'>
      <div className="image col-md-6 col-sm-12">
        <img src={maciej} alt="" />
        </div>
      <div className="col-md-6 col-sm-12">
        <div className="text">
          <h1 className='name'>Maciej Trzosek</h1>
          <p className='desc'>Zegarmistrz</p>
        </div>
      </div>
    </div>
    // <div className='start-page-bg'>
    //   <div className="container">
    //     <div className="center">
    //       <div className="name">
    //         <h1>Maciej Trzosek</h1>
    //         <p>s</p>
    //         </div>
    //     </div>
    //   </div>
    // </div>
  )
}
