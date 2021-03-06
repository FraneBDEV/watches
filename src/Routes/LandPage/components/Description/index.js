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
                  Pracownia zegarmistrzowska Henryka Trzoska powsta??a w 1963 roku w Warszawie
              </p>     
          </div>
          <div className="text-card">
              <FontAwesomeIcon icon={faHouse} />
              <p>
                  Niezmiennie od pocz??tku istnienia zwi??zana jest z Mokotowem. Obecnie znajduje si?? przy ulicy Pu??awskiej 96, nieopodal zbiegu z ulic?? Ody??ca.
              </p>        
          </div>
          <div className="text-card">
            <FontAwesomeIcon icon={faClock} />
              <p>
                  Mokotowska pracownia, to dwa pokolenia zegarmistrz??w, kt??rzy dbaj?? o to co by??o dawniej i o to, co jest aktualne i modne dzi??. Obecnie firma dzia??a pod nazw?? Trzosek Henryk i Syn. Od lat 90-tych panowie Henryk i Maciej dbaj?? o zegary odmierzaj??ce czas w Pa??acu Prezydenckim, Belwederze i Urz??dzie Rady Ministr??w.
              </p>  
          </div>
          <div className="text-card">
            <FontAwesomeIcon icon={faCrown} />
              <p>
                  W portfolio Macieja znajdziemy do??wiadczenie zdobyte w La Boutique Swiss, Hermitage Boutique, Hublot, Swatch Group, Wrzeciono Czasu.
              </p>  
          </div>
          <div className="text-card">
            <FontAwesomeIcon icon={faCommentDots} />
              <p>
                  Do pracowni pan??w Henryka i Macieja zawsze warto zajrze??. Jest to miejsce wyj??tkowe na us??ugowej mapie wsp????czesnej Warszawy. Tradycja ????czy si?? tu z nowoczesno??ci??, a niepowtarzalny klimat i fachowa obs??uga sprawiaj??, ??e na Pu??awsk?? 96 chce si?? po prostu wraca??.
              </p>  
          </div>
      </div>
    </div>
  )
}
