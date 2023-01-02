import './Home_About.css'
import './Skills_Contact.css'
import Header from './Components/Header'
import Home from './Components/Home'
import {useState } from 'react'
import Portfolio from './Components/Portfolio'
import { Skills } from './Components/Skills'
import Contact from './Components/Contact'
import AboutMe from './Components/AboutMe'
import Language from './english/language'

function App() {

//Animation menu navbar btn
 const [menuOpen, setMenuOpen] = useState(false)
 const menuBTN = document.getElementsByClassName('menu_btn')
 const showMenu = document.getElementsByClassName('nav__ul')

//Language state 
 const [translation, setTranslation] = useState(Language.en)
 const [languageText, setLanguageText] = useState('Spa')

//CV language 
const [languageCV, setLanguageCV] = useState('/CVeng.pdf')

 const handleLanguage = () => {
   if(translation == Language.en ){
    //SET CONTENT LANGUAGE
    setTranslation(Language.es)
    //SET NAV LANGUAGE-OPTION
    setLanguageText('Eng')
    //SET LANGUAGE CV
    setLanguageCV('/CVesp.pdf')
   }else{
     setTranslation(Language.en)
     setLanguageText('Spa')
     setLanguageCV('/CVeng.pdf')
   }
 }

//close and open animation navbar btn 
  const handleMenu = () => {
    if(!menuOpen){
      menuBTN[0].classList.add('open');
      showMenu[0].classList.add('open_menu');
      setMenuOpen(true)
    }else{
      menuBTN[0].classList.remove('open');
      showMenu[0].classList.remove('open_menu');
      setMenuOpen(false)
    }
  } 

  return (
    <div className="App">
      <header className='header__app'>
        <div className='App__icons'>
         <a className='App_icon_name' href='' >Alejandro R.</a>
         <a href="https://www.linkedin.com/in/alejandro0/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
         <a href="https://github.com/AleAlejandro0" target="_blank"><i className="fa-brands fa-github"></i></a>
         <button  className='App_language_btn' onClick={handleLanguage}>{languageText}</button>

         <a className="App_icon_cv" href={languageCV} download="cv.pdf">CV</a>

         <div className='menu_btn' onClick={handleMenu}>
            <div className="menu_btn-burger"></div>
         </div>
        </div>
        <Header
          translation={translation}
          handleMenu={handleMenu}
        />
      </header>
      <main id='main_container' data-scroll-container >
        <section id='nav-home' className='App_home'>
          <Home
            translation={translation}
          />
        </section>
        <section id='about_me'>
          <AboutMe
           translation={translation}
          />
        </section>
        <section id='portfolio' className='portofolio_section'>
          <Portfolio
            translation={translation}
          />
        </section>
        <section id='skill_set' className='skills_section'>
          <Skills
           translation={translation}
          />
        </section>
        <section id='getin_touch'  className='contact_section'>
          <Contact
           translation={translation}
          />
        </section>
      </main>
    </div>
  )
}

export default App
