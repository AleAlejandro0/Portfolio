import React from 'react'
import secondAnimation from '../assets/animations/undraw_pair_programming_re_or4x.svg'

const AboutMe = ({aboutMeSection}) => {
  return (
      <div className='about_container' style={{ display: aboutMeSection }}  data-scroll-section>
          <section id='about_me' className='about_me' >
              <p className='about_pre-title'>¿Que tengo para ofrecer?</p>
              <h2 className='about_title'>Sobre mi</h2>

              <img className='about_img' src={secondAnimation} alt="two people codding in from of a computer" />

              <p className='about_text'>Tengo experiencia en el diseño de aplicaciones web utilizando React JS, JS, HTML y CSS con múltiples proyectos. Gran aislamiento y solucion de problemas, comunicación y trabajo en equipo para alcanzar objetivos comunes. Actualmente busco implementar y mejorar mis habilidades de manera profesional para llevar mi código al siguiente nivel.</p>
          </section>
      </div>
  )
}

export default AboutMe