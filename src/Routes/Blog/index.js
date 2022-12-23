import React, { useEffect } from 'react'
import Header from '../LandPage/components/Header';
import Footer from '../LandPage/components/Footer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useLocation, Navigate } from 'react-router';

import "./index.css"

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./Articles/images', false, /\.(png|jpg|svg|webp)$/));

function searchStringInArrayElement (str, array) {
  for (var j=0; j<array.length; j++) {
      if (array[j].search(str) !== -1) return array[j];
  }
  return -1;
}

export default function Blog() {
  window.scrollTo(0, 0);

  const location = useLocation()
  const props = location.state

  useEffect(() => {
    if (!props) return
      window.addEventListener('scroll', ()=> {
          let icon = document.querySelector('.icon')
          if(icon.classList.contains('rotated')) if(window.scrollY === 0) {
              icon.classList.remove('rotated')
          }
      })
  }, [])
  useEffect(() => {
  if (!props) return
    let titleParent = document.getElementById('bg')
    let textParent = document.getElementById('text')

    var text = article.text

    let h = document.createElement("H1");
    let t = document.createTextNode(article.title);
    h.appendChild(t);
    titleParent.appendChild(h)
    for (let index = 0; index < article.images.length; index++) {
      text = text.replace('{image}', `<p/><img src=${searchStringInArrayElement(article.images[index].replace(/\.[^/.]+$/, ""), images)} alt="" /><p>`)      
    }
    textParent.innerHTML = `<p>${text}</p>`
        
  }, [])

  if(!props) return (<Navigate to='/'/>) 
  var article = props.article.article

  function rotate() {
    let icon = document.querySelector('.icon')
    icon.classList.add('rotated')
  }
  console.log(article.titleBackgroundImage)
  let titleBackgroundImage = searchStringInArrayElement(article.titleBackgroundImage.replace(/\.[^/.]+$/, ""), images)
  console.log(titleBackgroundImage)
  return (
    <div className='aarticle'>
      <Header return/>
        <div className="title-wrapper" id='title-wrapper'>
            <div className="bg" id='bg' style={{ 
              background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${titleBackgroundImage})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
              }}>
              {/* title h1 appendChild */}
            </div>
            <div className="icon-wrapper">
                <span onClick={() => {window.scrollTo(0, Math.max(document.documentElement.clientHeight || 0) * 0.4)}}><FontAwesomeIcon onClick={rotate} className='icon' icon={faArrowDown} /></span>  
            </div>
        </div>
        <div className="text-wrapper row g-0">
          <div className="text col-lg-8 col-11" id='text'>
            {/* text append child with images */}
          </div>
        </div>
        <Footer />
    </div>
  )
}
