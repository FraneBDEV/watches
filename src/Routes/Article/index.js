import React, { useEffect } from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { HashLink } from 'react-router-hash-link';
import Header from '../LandPage/components/Header';
import Footer from '../LandPage/components/Footer'



import rotomat from './images/rotomat.jpg'
import porownanie from './images/porownanie.webp'
import dat from './images/dat.jpg'

export default function Article() {
window.scrollTo(0, 0);

useEffect(() => {
    window.addEventListener('scroll', ()=> {
        let icon = document.querySelector('.icon')
        if(icon.classList.contains('rotated')) if(window.scrollY === 0) {
            icon.classList.remove('rotated')
        }
    })
}, [])

function rotate() {
    let icon = document.querySelector('.icon')
    icon.classList.add('rotated')
}

  return (
    <div className='article'>
        <Header return/>
        <div className="title-wrapper" id='title-wrapper'>
            <div className="bg"><h1>Jak dbać o zegarek?</h1></div>

            <div className="icon-wrapper">
                <HashLink to='#text'><FontAwesomeIcon onClick={rotate} className='icon' icon={faArrowDown} /></HashLink>  
            </div>
        </div>
        <div className="text-wrapper row g-0">
            <div className="text col-lg-8 col-11" id="text">
                <p>
                Mechanizm zegarka, tak jak każdy inny stworzony jest po to, aby pracować. Jeśli pozostawimy zegarek na dłuższy czas w bezruchu, to może obrazić się i nie chcieć dalej odmierzać czasu. Delikatne oliwy, smarujące obracające się osie kół zgęstnieją i unieruchomią urządzenie. Dlatego używaj swojego zegarka często, a jeśli musi poleżeć, to nakręć go choćby jeden raz w tygodniu. Dla zegarków z automatycznym naciągiem dobrym rozwiązaniem jest rotomat, urządzenie, na którym zegarek pozostaje w ruchu. 
                </p>
                <img src={rotomat} alt="" />
                <p>
                Jeśli mowa o naciągu automatycznym, to jest on tak pomyślany, aby sprawnie naciągnął sprężynę bez konieczności nakręcania zegarka przy pomocy koronki. Jednocześnie konstrukcja tego modułu jest nader delikatna i mało odporna na usilne - co niekiedy się zdarza - nakręcanie ręczne. Zespół kół odpowiadających za dwukierunkowe  nakręcanie sprężyny (wszak ręką wykonujemy ruchy w różne strony), to dwa zębniki sprzężone ze sobą delikatnymi zapadkami, które łatwo ulegają zatarciu. Właściwe i regularne ich smarowanie pozwala na wieloletnie, dobre funkcjonowanie. Jeżeli nasz "automat" nie był noszony ostatnio, to pewnie się zatrzymał. Aby go uruchomić wystarczy wykonać kilka delikatnych obrotów koronką do chwili, kiedy sekundnik ruszy. Dalsze nakręcanie odbędzie się automatycznie poprzez noszenie zagarka na ręce.
                </p>
                <img src={porownanie} alt="" />
                <p>
                Mówiąc o delikatności mechanizmu nie sposób nie wspomnieć o datowniku. Zwykle, około północy nasz zegarek zaczyna zmieniać datę. W zależności od zastosowanej konstrukcji odbywa się to w różnym tempie, raz na zasadzie szybkiego przeskoku innym razem powoli, przez dłuższy czas, dochodzący nawet do kilku godzin. Dla nas ważne jest to, aby rano, po przebudzeniu "znaleźć" w okienku właściwy dzień. Gdyby jednak wystąpiła konieczność szybkiej korekty(na drugiej pozycji koronki lub odpowiednim przyciskiem na kopercie), na przykład z 30-go, ostatniego dnia miesiąca na dzień 1-szy następnego, to w żadnym wypadku nie należy robić tego w czasie między godzinami 21-szą a 3-cią rano. Wtedy to następuje zazębianie mechanizmu datownika i jakiekolwiek nasze działanie może go uszkodzić. 
                </p>
                <img src={dat} alt="" />
                <p>
                Dziękuję za uwagę.
                </p>
            </div>
        </div>
        <Footer />
    </div>
  )
}