import React from 'react'
import "./styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'

export default function News() {
  return (
    <div className="news" id='news'>
      <Carousel>
          <Carousel.Item>
              <img
              className="d-block"
              src="https://picsum.photos/1920/1080"
              alt="First slide"
              />
              <div className="caption">
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
          </Carousel.Item>
          <Carousel.Item>
              <img
              className="d-block"
              src="https://picsum.photos/1920/1081"
              alt="Second slide"
              />
              <div className="caption">
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
          </Carousel.Item>
          <Carousel.Item>
              <img
              className="d-block"
              src="https://picsum.photos/1920/1082"
              alt="Third slide"
              />
              <div className="caption">
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
          </Carousel.Item>
      </Carousel>
    </div>
  )
}
