import firstAnimation from '../assets/animations/undraw_adventure_re_ncqp.svg'

const Home = ({titleAnimation, aboutAnimation}) => {
  return (
    <div className='home' data-scroll-section>
      <div className='home_first_container'>
        <img className='home_img' src={firstAnimation} alt='image decoration, world and a person'/>
        <section className='home_wrapper'>
          <h1 className='home_static' style={{ display: titleAnimation }}>Hola!, soy</h1>
          <ul className='home_dynamic'>
            <li><span>Desarrolador web</span></li>
            <li><span>Programador </span></li>
            <li><span>Ingeniero de software</span></li>
            <li><span>Alejandro Robayo</span></li>
          </ul>
        </section>

        <div className='home_about' style={{display: aboutAnimation}}>
          <p className='home_introduction'>
            Soy un desarrollador web front-end, actualmente buscando un cambio de carrera, con mejora constante adquiriendo nuevos conocimientos y dispuesto a aprender nuevas tecnologías.
          </p>
          <a href="#portfolio"><button className='home_btn'>¡Ver portafolio!</button></a>
        </div>
      </div>
    </div>
  )
}

export default Home