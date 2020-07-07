import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from './reducers'
import App from './routes/App';


const initialState = {
        "user": {},
        "myBlog": [],
        "certificados": [
          {
            "id": 1,
            "title": "MySQL y SQL",
            "year": 2020,
            "hour": 30,
            "png": "https://github.com/dignelidxdx/PersonalPortfolio/blob/master/src/assets/static/diploma-sql-mysql-1.png?raw=true"
          },

          {
            "id": 2,
            "title": "JAVA SE Avanzado",
            "year": 2020,
            "hour": 120,
            "png": "https://github.com/dignelidxdx/PersonalPortfolio/blob/master/src/assets/static/diploma-java-avanzado-1.png?raw=true"
          },
          {
            "id": 3,
            "title": "ReactJS",
            "year": 2020,
            "hour": 20,
            "png": "https://github.com/dignelidxdx/PersonalPortfolio/blob/master/src/assets/static/diploma-react-ejs-1.png?raw=true"
          },
          {
            "id": 4,
            "title": "Frontend Developer",
            "year": 2020,
            "hour": 50,
            "png": "https://github.com/dignelidxdx/Portfolio/blob/master/src/assets/static/diploma-frontend-developer-1.png?raw=true"
          },
          {
            "id": 5,
            "title": "Postman",
            "year": 2020,
            "hour": 6,
            "png": "https://github.com/dignelidxdx/Portfolio/blob/master/src/assets/static/diploma-postman-1.png?raw=true"
          },
          {
            "id": 6,
            "title": "Fundamento de Ing. de Software",
            "year": 2019,
            "hour": 16,
            "png": "https://github.com/dignelidxdx/Portfolio/blob/master/src/assets/static/diploma-ingenieria-1.png?raw=true"
          },
          {
            "id": 7,
            "title": "SCRUM",
            "year": 2019,
            "hour": 16,
            "png": "https://github.com/dignelidxdx/Portfolio/blob/master/src/assets/static/diploma-scrum-1.png?raw=true"
          },
          {
            "id": 8,
            "title": "Comunicación efectiva para equipos",
            "year": 2019,
            "hour": 8,
            "png": "https://github.com/dignelidxdx/Portfolio/blob/master/src/assets/static/diploma-comunicacion-equipos-1.png?raw=true"
          },
        ],
        "blogs": [
          {
            "id": 1,
            "title": "Planificación para viajar fácil",
            "paragraph": "La idea de hablar de la innovación es entenderla. Debe existir por nuestra visión por lo que queremos para el futuro. Es mejorar cosas ya existentes así que todos podemos innovar con muchas ganas y creatividad.",
            
          },
          {
            "id": 2,
            "title": "¿Cómo hago la maquetación?",
            "paragraph": "Y porqué hablar de desición? Se que es algo rutinario y hay tantas buenas como malas decisiones de la cual aprendemos o le sacamos provecho, pero como sabemos cuando tomamos una y como hacerlo?.",
          },
          {
            "id": 3,
            "title": "Java, como mi lenguaje de programación",
            "paragraph": "Seria muy redundante hablar de ella? La tecnología esta presente en todo, pero como la podemos entender mejor y porque existe? Claro esta para mejorar nuestra calidad de vida, pero hasta que punto?.",
          },
          {
            "id": 4,
            "title": "How (not) to learn english",
            "paragraph": "Are very intelligent people better at learning languages that average people? No, experts have shown that intelligence doesn't make a lot of differente. What makes the biggest difference is your attitude.",
          },
          {
            "id": 5,
            "title": "Porqué Python?",
            "paragraph": "Es incrible como podemos escuchar tanto un lenguaje, tanto su versatilidad, muy limpio y fácil de entender hasta tocar los datos e inteligencia artifical.",
          },
          {
            "id": 6,
            "title": "Motivación",
            "paragraph": "Se que muchos pensaran, todos tenemos motivación, hay veces que se nos hace dificil mantenerlo o saber identificarlo al momento, es ahí donde entra la disciplina.",
          },
          {
            "id": 7,
            "title": "Framework Vs Librerías",
            "paragraph": "A muchos se nos hace difcil aun cuando identificar cuando es una libreria o framework, en este articulo te ayudare a identificar cual es cual, y si son dos visiones totalmente diferentes.",
          },
          {
            "id": 8,
            "title": "Los filtros que hacen al reclutar",
            "paragraph": "Como todos sabemos todas las empresas tienen sus filtrs propios, algunos agregados de empresas externas, pero no siempre son las mismas, siempre hay sorpresas.",
          },
          {
            "id": 9,
            "title": "NodeJs vs Backend",
            "paragraph": "Nodejs es el backend de parte de javascript pero que tan diferente es de las sintaxis de Java, C++ o PHP.",
          }

        ],
        "trends": [
          {
            "id": 2,
            "slug": "tvshow-2",
            "title": "In the Dark",
            "type": "Scripted",
            "language": "English",
            "year": 2009,
            "contentRating": "16+",
            "duration": 164,
            "cover": "http://dummyimage.com/800x600.png/99118E/ffffff",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
          },
          {
            "id": 3,
            "slug": "tvshow-3",
            "title": "Instinct",
            "type": "Adventure",
            "language": "English",
            "year": 2002,
            "contentRating": "16+",
            "duration": 137,
            "cover": "http://dummyimage.com/800x600.png/302140/ffffff",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
          },
          {
            "id": 4,
            "slug": "tvshow-4",
            "title": "Grand Hotel",
            "type": "Comedy",
            "language": "English",
            "year": 2014,
            "contentRating": "16+",
            "duration": 163,
            "cover": "http://dummyimage.com/800x600.png/5472FF/ffffff",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
          },
          {
            "id": 5,
            "slug": "tvshow-5",
            "title": "Stargate Atlantis",
            "type": "Scripted",
            "language": "English",
            "year": 2014,
            "contentRating": "16+",
            "duration": 194,
            "cover": "http://dummyimage.com/800x600.png/B36F20/ffffff",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
          },
          {
            "id": 6,
            "slug": "tvshow-6",
            "title": "Final Space",
            "type": "Scripted",
            "language": "English",
            "year": 2017,
            "contentRating": "16+",
            "duration": 124,
            "cover": "http://dummyimage.com/800x600.png/CCC539/ffffff",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
          },
          {
            "id": 7,
            "slug": "tvshow-7",
            "title": "The InBetween",
            "type": "Drama",
            "language": "English",
            "year": 2011,
            "contentRating": "16+",
            "duration": 179,
            "cover": "http://dummyimage.com/800x600.png/FF7A90/ffffff",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
          }
        ],
        "originals": [
          {
            "id": 8,
            "slug": "tvshow-8",
            "title": "Stargate Atlantis",
            "type": "Action",
            "language": "English",
            "year": 2012,
            "contentRating": "16+",
            "duration": 148,
            "cover": "http://dummyimage.com/800x600.png/306880/ffffff",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
          },
          {
            "id": 9,
            "slug": "tvshow-9",
            "title": "Alien Highway",
            "type": "Action",
            "language": "English",
            "year": 2019,
            "contentRating": "16+",
            "duration": 128,
            "cover": "http://dummyimage.com/800x600.png/604180/ffffff",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
          },
          {
            "id": 10,
            "slug": "tvshow-10",
            "title": "Elementary",
            "type": "Animation",
            "language": "English",
            "year": 2011,
            "contentRating": "16+",
            "duration": 346,
            "cover": "http://dummyimage.com/800x600.png/FF91BA/ffffff",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
          },
          {
            "id": 11,
            "slug": "tvshow-11",
            "title": "Strange Angel",
            "type": "War",
            "language": "English",
            "year": 2015,
            "contentRating": "16+",
            "duration": 226,
            "cover": "http://dummyimage.com/800x600.png/45807C/ffffff",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
          },
          {
            "id": 12,
            "slug": "tvshow-12",
            "title": "Private Eyes",
            "type": "Comedy",
            "language": "English",
            "year": 2018,
            "contentRating": "16+",
            "duration": 190,
            "cover": "http://dummyimage.com/800x600.png/577380/ffffff",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
          },
          {
            "id": 13,
            "slug": "tvshow-13",
            "title": "NCIS: Los Angeles",
            "type": "Drama",
            "language": "English",
            "year": 2010,
            "contentRating": "16+",
            "duration": 160,
            "cover": "http://dummyimage.com/800x600.png/5472FF/ffffff",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
          }
        ]
}

const store = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'));