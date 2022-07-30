import React from 'react'
import Contact from './components/Contact'
import Header from './components/Header'
import Start from './components/Start'
import Parallax from './components/Parallax'
import Service from './components/Service'
import Description from './components/Description'
import Footer from './components/Footer'
import News from './components/News'

export default function Main() {
  return (
    <>
        <Header />
        <Start />
        <Description />
        <News />
        <Contact />
        <Parallax />
        <Service />
        <Footer />
    </>
  )
}
