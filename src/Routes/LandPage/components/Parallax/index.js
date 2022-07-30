import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom'

export default function Parallax() {

  return (
    <div className='parallax'>
      <Link to='/gallery'><h1>Galeria</h1></Link>
    </div>
  )
}
