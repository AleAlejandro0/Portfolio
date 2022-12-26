import React from 'react'
import secondAnimation from '../animations/undraw_pair_programming_re_or4x.svg'

const AboutMe = ({translation, aboutMeSection}) => {
  return (
      <div className='about_container' style={{ display: aboutMeSection }}  data-scroll-section>
          <section id='about_me' className='about_me' >
              <p className='about_pre-title'>{translation.preTitle}</p>
              <h2 className='about_title'>{translation.title2}</h2>

              <img className='about_img' src={secondAnimation} alt="two people codding in from of a computer" />

              <p className='about_text'>{translation.text}</p>
          </section>
      </div>
  )
}

export default AboutMe