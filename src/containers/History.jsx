/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/History.scss';
import pascal from '../assets/static/pascal.png';
import visual from '../assets/static/visualbasic.png';
import mysql from '../assets/static/mysqlworkbench.png';
import java from '../assets/static/java2.jpg';
import redux from '../assets/static/redux.jpg';
import databases from '../assets/static/basesdato.jpg';

const History = () => (
  <section className='history'>
    <div className='history-container'>
      <h4 className='About-ability p-2'>Mi Historia de como comencé en el mundo de la tecnología</h4>
      <hr />
      <div className='container'>
        <p>
          No siempre tenemos un próposito a la misma edad, siempre terminamos teniendo ese motivo en algun momento estrella o significante para nosotros. Ya sea familiar o personal se nos hace propio para nosotros el tener que hacer algo al respecto.
        </p>
        <p>
          En mi caso, aun siento que no a llegado como creía, pero ese día en la universidad viendo los conceptos básicos en la materia informática: "datos y variables", solo pensé: ¿porqué algo que parece tan fácil, pero orientado a la tecnología se medio dificulta? Me abrió tanto la curiosidad que me dejo ese espacio en mi mente. El día que empezamos en laboratorio, viendo en la pantalla de nuestro computador por primera vez un editor de código con un fondo ázul y el lenguaje Pascal me abrió más la curiosidad el solo ver como los algoritmos tienen pasos tan específicos, por algún momento llegue a pensar que así debería ser nuestra vida, para que sea más sencilla, todo paso por paso, divide y vencerás.
        </p>
        <div className='row'>
          <div className='col-md-6 Pascal'>
            {' '}
            <img src={pascal} alt='' />
          </div>
          <div className='col-md-6 Pascal-text'>
            <p className='p-4'>
              Y Sí, les estoy dando mi recorrido por Turbo Pascal que fue desarrollado por desarrollado por Borland y liderado por Philippe Kahn. Es un sistema de desarrollo de software que incluye un compilador y un entorno de desarrollo integrado, es decir, un IDE. Además de pascal existen también otros lenguajes de programación como lo es Cobol y Fortran del 1957 y 1959, la verdad super viejos, pero son los padres de todos los lenguajes de hoy en día. Cobol parecen facturas, es un lenguaje muy uniforme usado para transacciones empresariales y Fortran viene de la palabra
              {' '}
              <strong>FOR</strong>
              mula
              <strong>TRAN</strong>
              slation y fue desarrollada para la computación científica de alto nivel, matemáticas y estadísticas
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <p className='p-4'>
              Mi segundo lenguaje que toque en mi vida fue Visual Basic cuando realice mi trabajo de grado, ese trabajo a pesar que lo desarrolle en EXCEL, no sabia su lado oscuro, es decir avanzado. A pesar que me habian pedido poco alcance, mi tutor de grado de la facultad me pidio que hiciera algo más, fue ahi donde investigue y busque a profundidad sobre la herramienta EXCEL para llegarle a mi tutora de planta con una nueva propuesta más tentativa. Me dijeron has a donde debas hacer con tal que desarroller las curvas de costos que me solicitaban. Trabaje con macros, pero las cosas que no me gustaban las codeaba yo misma buscando que se viera mejor y sentí que haciendolo así era mas rápido.
            </p>
          </div>
          <div className='col-md-6 Visual'>
            <img src={visual} alt='' />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 Pascal'>
            {' '}
            <img src={mysql} alt='' />
          </div>
          <div className='col-md-6 Pascal-text'>
            <p className='p-4'>
              Tenia que desarrollar una base de datos, pero nunca encontre por internet algo referente de bases de datos en excel, consulte con un amigo para que me ayudara, y me hablo de MySQL, "Y porqué no lo haces allí?" y yo, "What? Qué me estas hablando?". Investigué en google y vi tutoriales en youtube, la verdad me gusto mucho y vi su importancia, claro yo había visto antes en una materia de la facu, siempre fue Access, pero MySQL para mi fue un mundo nuevo, me encantaba los DDL y DML, es decir, la definición de los datos y su manipulación con los más básicos SELECT, INSERT, UPDATE, DELETE. Súper util solo pense, quise implementarlo en mi trabajo profesonal, pero lamentablemente no se utilizaba ese programa en las computadoras de la sede ya que era con licencias.
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <p>
              Luego llegó Platzi, presentado por otro amigo que me hablo de un curso de programación básica utilizando Javascript, claro que noto una curiosidad en mi para aprender, me agrado el curso era gratutito, cuando lo termine quise intentar mas cursos, probe con todos los que estaban disponibles asi como Marketing Voz a Voz y aparte me paso grabado (ya que era pago) el curso de fundamentos de Proyectos (ya que venía de esa área), me quede con las ganas de seguir aprendiendo y comence a desarrollar páginas básicas con solo CSS, HTML y Javascript súper sencillos.
            </p>
            <p>
              Cuanto empece a trabajar en Argentina, al año despúes que me establecí (entre medios) me compre la subcripción en Platzi, estaba súper feliz porque iba a aprender mucho y pues, gran error :D, seguía trabajando y la verdad no me daban los tiempos. Desde ese momento me planifique mis tiempos de estudios y la mayoría eran los fines de semana y unas horas entre semana, por supuesto no los seguia al pie de la letra ya que a veces surgían inconvenientes o simple salidas con amigos. Me había establecido metas y fechas a la cual iba a llegar, pero a la vez me frustraba porque no veía llegar.
            </p>
            <p>Seguí y seguí, aprendiendo sobre Git, desarrollo web y bases de datos, a la vez ser autodidacta sentía que iba lento con lo que iba aprendiendo ya que aún no aplicaba los conocimientos, buscando en internet un dia me tope con varias comunidades IT, unas de ellas estaban en la App Meetup que hacen reuniones grupos especificos con horarios antelados. Me anotaba a los workshop que me llamaban la atención tanto Docker, Workpress, Introducción Práctica a la Accesibilidad, Analisis y testing de Accesibilidad, Design Thinking, entre otros. Me parecían muy buenos, pero luego a comienzos de enero del 2020, tuve un traslado a Mar del Plata por trabajo la cual confirme por cumplir 20 días, para seguir con mis estudios, a la vez quise emprender en algo más para tener tiempo y decidí hacer algo part-time y entonces reabrí mi negocio de repostería, cuando llegue del anterior laburo llegue haciendo publicidad y ofreciendo mi producto y a la vez estudiaba. En una oportunidad vi la publicidad de ADA para cursos backend online. Me inscribí y quede! Estaba super feliz ya que era lo que quería, nuestro profesor era genial y le entendíamos todo. Cuando llego la cuarentena tuve que dejar mi trabajo part-time para dedicarme al 100% a la programación y también por cuidar a otros como a mí. Hasta ahora me veo creciendo en el rubro de la programación, se que puede llegar a impactar de una manera tan positiva. Así como un video que ví: es como tener super poderes.</p>
          </div>
        </div>
      </div>

      <h4 className='About-ability p-2'>Mis razones del por que me gusta el mundo Tech.</h4>
      <hr />
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <dl>
              <dt> 1. Puedes hacer cualquier cosa</dt>
              <dd>Es muy importante si quieres llegar lejos y ayudar a tantas personas puedas, tanto para desarrollar apps para maestras o nutricionistas ya que considero que la educación y una buena alimentación son las dos cosas fundamentales para el bienestar humano. Este es solo un ejemplo de muchos. Solo pongamosno a pensar, podemos llegar a cualquier ambito y conocer de ella tanto para aportar como para aprender.</dd>
              <dt>2. Innovación esta en todo y es realmente genial</dt>
              <dd>Muchas de las cosas en las que nos interesamos es colocar un poco de nuestra escencia y sentir que genere un impacto, crear algo recopilando ideas del mundo, es cool. </dd>
              <dt>3. Colaboración</dt>
              <dd>Ni les cuento las comunidades que existe y la colaboración que hay, es inmensa y calurosa. Nunca nadie se a molestado en ayudar para un crecimiento mutuo.</dd>
              <dt>4. Resuelves problemas constantemente</dt>
              <dd>Cuando resuelves un problema, la sensación inmediata es estar satisfecho y sentir que pudiste hacer de algo mejor, y si son muchas?</dd>
              <dt>5. Gran Impacto</dt>
              <dd>Hoy en dia se a estado hablando del impacto positivo que podria generar al planeta, a nuestro entorno, a las personas. El alcance que tiene es gigantezco.</dd>
            </dl>
          </div>
        </div>
      </div>

    </div>
  </section>

);

export default History;
