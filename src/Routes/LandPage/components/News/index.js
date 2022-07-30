import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom'

export default function News() {
  return (
    <div className='news'>
        <div className='center'>
            <p>Promowany Artukuł:</p>
                <div className="inline">
                    <h1>Jak dbać o zegarek?</h1><Link to='/article'><h1>CZYTAJ</h1></Link>
                </div>
        </div>
    </div>
  )
}
