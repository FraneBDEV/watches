import React from 'react'
import "./styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'

import image1 from './01.jpg'

export default function News() {
  return (
    <div className="news" id='news'>
      <Carousel>
          <Carousel.Item>
              <img
              className="d-block"
              src={image1}
              alt="First slide"
              />
              <div className="caption">
                <h3>Od kamienia na sznurku do MoonSwatcha.</h3>
                <p>Za pierwowzór obenych mechanizmów zegarowych można uznać ten, pochodzący z XIII wieku, projekt francuskiego architekta Villarda de Honnecourt.
                Koło osadzone na osi wokół której, opleciono sznur obciążony kamieniem tak, aby swoim ciężarem obracał tę maszynerię.
                Wynika z tego, że historia znanego obecnie mechanizmu zagerka z własnym napędem zaczęła się osiem wieków temu. Ogrom wydarzeń na przestrzeni stuleci w dziejach zegarmistrzostwa to temat, którego nie sposób ująć encyklopedycznie. Pamiętajmy jednak, że współczesne zegarki, które fascynują nas głównie wzornictwem, dziś powiedzielibyśmy dizajnem, ukrywają w swoich wnętrzach myśl techniczną sięgającą bardzo odległych czasów. I nawet napęd kwarcowy zegarka z tradycyjnymi wskazówkami i tarczą to wciąż są zazębiające się ze sobą koła, tak jak to było na początku.
                </p>
              </div>
          </Carousel.Item>
          <Carousel.Item>
              <img
              className="d-block"
              src="https://picsum.photos/1920/1081"
              alt="Second slide"
              />
              <div className="caption">
                <h3>Na temat #2</h3>
                <p>W trakcie...</p>
              </div>
          </Carousel.Item>
      </Carousel>
    </div>
  )
}
