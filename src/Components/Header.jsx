import React from 'react'
import { useState } from 'react'

const Header = ({handleMenu}) => {

  const [isHover, setIsHover] = useState(false)
  let opacityNumber

  if(!isHover){
    opacityNumber = '1'
  }
 
  return (
    <div className='nav__container'>
      <nav className='nav'>
        <ul className='nav__ul'>
          <li className='item_1'
             onMouseEnter={() => setIsHover(true)}
             onMouseLeave={() => setIsHover(false)}
          >
            <a className='nav__link' 
             style={{opacity: opacityNumber}} href="#nav-home" 
             onClick={handleMenu}>Inicio
            </a>
          </li>

          <li className='item_2'
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <a className='nav__link' 
             style={{opacity: opacityNumber}} href="#about_me" 
             onClick={handleMenu}>Sobre me
            </a>
          </li>

          <li className='item_2'
           onMouseEnter={() => setIsHover(true)}
           onMouseLeave={() => setIsHover(false)}
          >
            <a className='nav__link' 
             style={{opacity: opacityNumber}} href="#portfolio" 
             onClick={handleMenu}>Portafolio
            </a>
          </li>

          <li className='item_2'
           onMouseEnter={() => setIsHover(true)}
           onMouseLeave={() => setIsHover(false)}
          >
            <a className='nav__link' 
             style={{opacity: opacityNumber}} href="#skill_set" 
             onClick={handleMenu}>Habilidades
            </a>
          </li>

          <li className='item_2'
           onMouseEnter={() => setIsHover(true)}
           onMouseLeave={() => setIsHover(false)}
          >
            <a className='nav__link' 
             style={{opacity: opacityNumber}} href="#getin_touch" 
             onClick={handleMenu}>Contacto
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header