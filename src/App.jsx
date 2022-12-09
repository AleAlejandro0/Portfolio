import './Home_About.css'
import './Skills_Contact.css'
import Header from './Components/Header'
import Home from './Components/Home'
import { useEffect, useRef, useState } from 'react'
import Portfolio from './Components/Portfolio'
import { Skills } from './Components/Skills'
import Contact from './Components/Contact'
import AboutMe from './Components/AboutMe'
import locoScroll from './locomotiveScroll/locoScroll'


function App() {

 //LOCOMOTIVE SCROLL 
 locoScroll()
 

 //Animation menu navbar btn
 const [menuOpen, setMenuOpen] = useState(false)
 const menuBTN = document.getElementsByClassName('menu_btn')
 const showMenu = document.getElementsByClassName('nav__ul')

 
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
  fetch('/src/assets/CV.pdf').then(response => {
    response.blob().then(blob => {
       const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = '/src/assets/CV.pdf';
                alink.click();
    })
  })
}

  /* ANIMATIONS */
/*
 // HI IM
 const [titleAnimation, setTitleAnimation] = useState("block")
 // ABOUT ME text 
 const [aboutAnimation, setAboutAnimation] = useState("block")
 // ABOUT ME SECTION
 const [aboutMeSection, setAboutMeSection] = useState('none')
 // Portoflio
 const [portfolioSection, setPortfolioSection] =  useState("block")
 // Skills
 const [skillSection, setSkillSection] = useState('none')
 // Contact
 const [contactSection, setContactSection] = useState('none')

 const divRef = useRef()

useEffect(()=> {
 const handleScroll = () => {
   const div = divRef.current
   const {y} = div.getBoundingClientRect()

  console.log(y) 

  //'HI IM'
   const animation = y > -350 ? 'block' : 'none'
   setTitleAnimation(animation)

  //ABOUT ME text 
   const animationAbout = y > -600 ? 'block' : 'none'
   setAboutAnimation(animationAbout)

  //ABOUT ME SECTION
   const aboutMe = y > -20 ? "none" : 'flex'
   setAboutMeSection(aboutMe) 
  
  //PORTFOLIO 
   const portfolio = y > -520 ? 'none' : 'flex'
   setPortfolioSection(portfolio)  

  //Skills
   const skills = y > -1480 ? 'none' : 'flex'
   setSkillSection(skills)
  //Contact 
   const contact = y > -2244 ? 'none' : 'flex'
   setContactSection(contact)
 }

  window.addEventListener('scroll', handleScroll)

 return () => {
  window.removeEventListener('scroll', handleScroll)
 }
 
}, [])*/

  return (
    <div className="App">
      <header className='header__app'>
        <div className='App__icons'>
         <a className='App_icon_name' href='' >Alejandro R.</a>
         <a href="https://www.linkedin.com/in/alejandro0/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
         <a href="https://github.com/AleAlejandro0" target="_blank"><i className="fa-brands fa-github"></i></a>
         <button className='App_icon_cv' onClick={downloadPDF}>CV</button>

         <div className='menu_btn' onClick={handleMenu}>
            <div className="menu_btn-burger"></div>
         </div>
        </div>
        <Header
          handleMenu={handleMenu}
        />
      </header>
      <main id='main_container' data-scroll-container >
        <section id='nav-home' className='App_home'>
          <Home
        
          />
        </section>
        <section id='about_me'>
          <AboutMe
          
          />
        </section>
        <section id='portfolio' className='portofolio_section'>
          <Portfolio
      
          />
        </section>
        <section id='skill_set' className='skills_section'>
          <Skills
    
          />
        </section>
        <section id='getin_touch'  className='contact_section'>
          <Contact
          
          />
        </section>
      </main>
    </div>
  )
}

export default App
