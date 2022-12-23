import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom'

export default function News() {
  let article = 
  {
    "title": "Jak dbać o zegarek?",
    "titleBackgroundImage": "01background.webp",
    "text": "Mechanizm zegarka, tak jak każdy inny stworzony jest po to, aby pracować. Jeśli pozostawimy zegarek na dłuższy czas w bezruchu, to może obrazić się i nie chcieć dalej odmierzać czasu. Delikatne oliwy, smarujące obracające się osie kół zgęstnieją i unieruchomią urządzenie. Dlatego używaj swojego zegarka często, a jeśli musi poleżeć, to nakręć go choćby jeden raz w tygodniu. Dla zegarków z automatycznym naciągiem dobrym rozwiązaniem jest rotomat, urządzenie, na którym zegarek pozostaje w ruchu. {image} Jeśli mowa o naciągu automatycznym, to jest on tak pomyślany, aby sprawnie naciągnął sprężynę bez konieczności nakręcania zegarka przy pomocy koronki. Jednocześnie konstrukcja tego modułu jest nader delikatna i mało odporna na usilne - co niekiedy się zdarza - nakręcanie ręczne. Zespół kół odpowiadających za dwukierunkowe nakręcanie sprężyny (wszak ręką wykonujemy ruchy w różne strony), to dwa zębniki sprzężone ze sobą delikatnymi zapadkami, które łatwo ulegają zatarciu. Właściwe i regularne ich smarowanie pozwala na wieloletnie, dobre funkcjonowanie. Jeżeli nasz 'automat' nie był noszony ostatnio, to pewnie się zatrzymał. Aby go uruchomić wystarczy wykonać kilka delikatnych obrotów koronką do chwili, kiedy sekundnik ruszy. Dalsze nakręcanie odbędzie się automatycznie poprzez noszenie zagarka na ręce. {image} Mówiąc o delikatności mechanizmu nie sposób nie wspomnieć o datowniku. Zwykle, około północy nasz zegarek zaczyna zmieniać datę. W zależności od zastosowanej konstrukcji odbywa się to w różnym tempie, raz na zasadzie szybkiego przeskoku innym razem powoli, przez dłuższy czas, dochodzący nawet do kilku godzin. Dla nas ważne jest to, aby rano, po przebudzeniu 'znaleźć' w okienku właściwy dzień. Gdyby jednak wystąpiła konieczność szybkiej korekty(na drugiej pozycji koronki lub odpowiednim przyciskiem na kopercie), na przykład z 30-go, ostatniego dnia miesiąca na dzień 1-szy następnego, to w żadnym wypadku nie należy robić tego w czasie między godzinami 21-szą a 3-cią rano. Wtedy to następuje zazębianie mechanizmu datownika i jakiekolwiek nasze działanie może go uszkodzić. {image} Dziękuję za uwagę.",
    "images": ["01rotomat.jpg", "01porownanie.webp", "01datownik.jpg"]
  }
  return (
    <div className='news'>
        <div className='center'>
            <p>Promowany Artukuł:</p>
                <div className="inline">
                    <h1>{article.title}</h1><Link to="/blog" state={{ article: {article} }}><h1>CZYTAJ</h1></Link>
                </div>
        </div>
    </div>
  )
}
