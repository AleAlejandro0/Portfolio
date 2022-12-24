import './Home_About.css'
import './Skills_Contact.css'
import Header from './Components/Header'
import Home from './Components/Home'
import {useState } from 'react'
import Portfolio from './Components/Portfolio'
import { Skills } from './Components/Skills'
import Contact from './Components/Contact'
import AboutMe from './Components/AboutMe'
//Lenguage 
import Lenguage from './english/lenguage'

function App() {

//Animation menu navbar btn
 const [menuOpen, setMenuOpen] = useState(false)
 const menuBTN = document.getElementsByClassName('menu_btn')
 const showMenu = document.getElementsByClassName('nav__ul')

//Lenguage state 
 const [translation, setTranslation] = useState(Lenguage.en)
 const [lenguageText, setLenguageText] = useState('Spa')

//CV lenguage 
const [lenguageCV, setLenguageCV] = useState('/src/assets/CVeng.pdf')

 const handleLenguage = () => {
   if(translation == Lenguage.en ){
    //SET CONTENT LENGUAGE
    setTranslation(Lenguage.es)
    //SET NAV LENGUAGE-OPTION
    setLenguageText('Eng')
    //SET LENGUAGE CV
    setLenguageCV('/src/assets/CVesp.pdf')
   }else{
     setTranslation(Lenguage.en)
     setLenguageText('Spa')
     setLenguageCV('/src/assets/CVeng.pdf')
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

// PDF file 
const downloadPDF = () => {
  fetch(lenguageCV).then(response => {
    response.blob().then(blob => {
       const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = lenguageCV;
                alink.click(lenguageCV);
    })
  })
}

  return (
    <div className="App">
      <header className='header__app'>
        <div className='App__icons'>
         <a className='App_icon_name' href='' >Alejandro R.</a>
         <a href="https://www.linkedin.com/in/alejandro0/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
         <a href="https://github.com/AleAlejandro0" target="_blank"><i className="fa-brands fa-github"></i></a>
         <button  className='App_lenguage_btn' onClick={handleLenguage}>{lenguageText}</button>
         <button className='App_icon_cv' onClick={downloadPDF}>CV</button>

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
