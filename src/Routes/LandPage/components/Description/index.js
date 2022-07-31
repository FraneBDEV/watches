import React, { useEffect } from 'react'
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScroll, faHouse, faClock, faCrown, faCommentDots } from '@fortawesome/free-solid-svg-icons'


export default function Desc() {
  useEffect(() => {
    const c_nubmers = document.querySelector(".c-numbers");
    const c_numbers_count = 12;

    for (let i = 1; i <= c_numbers_count; i++) {
      let item = document.createElement("span");
      item.textContent = "-";
      item.classList.add("c-numbers-item");
      item.style.cssText = `transform:rotate(${
        (360 / c_numbers_count) * i
      }deg) translate(${69}px)`;
      c_nubmers.appendChild(item);
    }

    const c_second = document.querySelector(".c-second");
    const c_min = document.querySelector(".c-min");
    const c_hours = document.querySelector(".c-hours");
    setInterval(() => {
      let date = new Date();
      let sec_rotate = date.getSeconds() * 6;
      let min_rotate = date.getMinutes() * 6;
      let hour_rotate = date.getHours() * 30;
      sec_rotate += 6;
      if (date.getSeconds() === 60) min_rotate += 6;
      if (date.getMinutes() === 60) hour_rotate += 30;
      c_second.style.cssText = `transform: rotate(${sec_rotate}deg)`;
      c_min.style.cssText = `transform: rotate(${min_rotate}deg)`;
      c_hours.style.cssText = `transform: rotate(${hour_rotate}deg)`;
    }, 1000);
  }, [])
  
  return (
    <div className="description-wrapper">
        <div className="app">
          <div className="c-wrapper">
            <span>TRZOSEK</span>
            <div className="c-band"></div>
            <div className="c-body">
              <div className="c-numbers"></div>
              <div className="c-hours"></div>
              <div className="c-min"></div>
              <div className="c-second"></div>
              <div className="c-dot"></div>
            </div>
          </div>
        </div>
      <div className="description" id='firm'>
          <div className="text-card">
              <FontAwesomeIcon icon={faScroll} />
              <p>
                  Pracownia zegarmistrzowska Henryka Trzoska powstała w 1963 roku w Warszawie
              </p>     
          </div>
          <div className="text-card">
              <FontAwesomeIcon icon={faHouse} />
              <p>
                  Niezmiennie od początku istnienia związana jest z Mokotowem. Obecnie znajduje się przy ulicy Puławskiej 96, nieopodal zbiegu z ulicą Odyńca.
              </p>        
          </div>
          <div className="text-card">
            <FontAwesomeIcon icon={faClock} />
              <p>
                  Mokotowska pracownia, to dwa pokolenia zegarmistrzów, którzy dbają o to co było dawniej i o to, co jest aktualne i modne dziś. Obecnie firma działa pod nazwą Trzosek Henryk i Syn. Od lat 90-tych panowie Henryk i Maciej dbają o zegary odmierzające czas w Pałacu Prezydenckim, Belwederze i Urzędzie Rady Ministrów.
              </p>  
          </div>
          <div className="text-card">
            <FontAwesomeIcon icon={faCrown} />
              <p>
                  W portfolio Macieja znajdziemy doświadczenie zdobyte w La Boutique Swiss, Hermitage Boutique, Hublot, Swatch Group, Wrzeciono Czasu.
              </p>  
          </div>
          <div className="text-card">
            <FontAwesomeIcon icon={faCommentDots} />
              <p>
                  Do pracowni panów Henryka i Macieja zawsze warto zajrzeć. Jest to miejsce wyjątkowe na usługowej mapie współczesnej Warszawy. Tradycja łączy się tu z nowoczesnością, a niepowtarzalny klimat i fachowa obsługa sprawiają, że na Puławską 96 chce się po prostu wracać.
              </p>  
          </div>
      </div>
    </div>
  )
}
