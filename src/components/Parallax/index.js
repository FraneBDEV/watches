import React from 'react'
import "./styles.css"
import { Link } from 'react-router-dom'

export default function Parallax() {

  return (
    <div className='parallax'>
      <Link to='/gallery'><a><h1>Galeria</h1></a></Link>
    </div>
  )
}
