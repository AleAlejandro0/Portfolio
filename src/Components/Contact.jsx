import React from 'react'
import thirdAnimation from '../assets/animations/undraw_developer_activity_re_39tg.svg'

const Contact = ({translation, contactSection}) => {
  return (
    <div className='contact'style={{ display: contactSection }} data-scroll-section>
      <p className='pre-title'>{translation.preTitle4}</p>
      <h2 className='title'>{translation.title5}</h2>

      <div className='contact_home_img_container'>

      <div className='form_container'>
        <form className='form' action="https://formsubmit.co/10444f8c887a49115cec43771e272929" method="POST">
          <p className='form_text'>{translation.textForm}</p>
           <div className='form_items'>
             <label className='form_item' htmlFor="name">{translation.formName}</label>
             <input className='form_input' type="text" name="name"/>
           </div>
           <div className='form_items'>
             <label className='form_item' htmlFor="email">{translation.formEmail}</label>
             <input className='form_input' type="text" name="email" />
           </div>
           <div className='form_items'>
             <label className='form_item' htmlFor="asunto">{translation.formSubject}</label>
             <input className='form_input' type="text"  name="asunto"/>
           </div>
           <div className='form_items'>
             <label className='form_item' htmlFor="mensaje">{translation.formMessage}</label>
             <textarea className='form_message' name="mensaje"></textarea>
           </div>
           <button className='form_btn'>{translation.formBTN}</button>

           <input type="hidden" name="_next" value="https://www.youtube.com/watch?v=LeiFF0gvqcc&ab_channel=michaeljacksonVEVO"/>
           <input type="hidden" name="_captcha" value="false" />
        </form>
      </div>

      <img className='contact_img' src={thirdAnimation} alt="Second animation, guy sitting on computer" />

      </div>

      <div className="mail-contact">
        <i className="fa-solid fa-envelope-circle-check mail_icon"></i>
        <p className='mail_text'>Mail</p>
        <a className='mail_adress' href="mailto:alealejandropaez@gmail.com">alealejandropaez@gmail.com</a>
      </div>

      <div className='line_container'>
        <hr  className='line'/>\
      </div>

      <div className='footer_container'>
        <footer className='footer'>
          <p className='copyright'>Copyright © | </p>
          <h4 className='footer_text'>Alejandro Robayo</h4>
        </footer>
      </div>

    </div>
  )
}

export default Contact