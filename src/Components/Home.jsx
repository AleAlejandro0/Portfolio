import firstAnimation from '../animations/undraw_adventure_re_ncqp.svg'

const Home = ({translation, titleAnimation, aboutAnimation}) => {
  return (
    <div className='home' data-scroll-section>
      <div className='home_first_container'>
        <img className='home_img' src={firstAnimation} alt='image decoration, world and a person'/>
        <section className='home_wrapper'>
          <h1 className='home_static' style={{ display: titleAnimation }}>{translation.tittle}</h1>
          <ul className='home_dynamic'>
            <li><span>{translation.im1}</span></li>
            <li><span>{translation.im2} </span></li>
            <li><span>{translation.im3}</span></li>
            <li><span>Alejandro Robayo</span></li>
          </ul>
        </section>

        <div className='home_about' style={{display: aboutAnimation}}>
          <p className='home_introduction'>
            {translation.Hi_text1}
          </p>
          <a href="#portfolio"><button className='home_btn'>{translation.button}</button></a>
        </div>
      </div>
    </div>
  )
}

export default Home