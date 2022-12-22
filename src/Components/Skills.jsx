import React from 'react'

export const Skills = ({translation, skillSection}) => {

 return (
   <div className='skills' style={{ display: skillSection }} data-scroll-section>
     <p className='pre-title'>{translation.preTitle3}</p>
     <h2 className='title'>{translation.title4}</h2>

     <ul className='skills_container'>
       <li className='skills_item'><i className="icon_skill fa-brands fa-react"></i> React</li>
       <li className='skills_item'><i className="icon_skill fa-brands fa-js"></i>JavaScript</li>
       <li className='skills_item'><i className="icon_skill fa-brands fa-css3-alt"></i>CSS</li>
       <li className='skills_item'><i className="icon_skill fa-brands fa-node"></i>NodeJS</li>
       <li className='skills_item'><i className="icon_skill fa-solid fa-language"></i>English B2</li>
       <li className='skills_item'><i className="icon_skill fa-solid fa-up-down-left-right"></i>Flexible Layouts</li>
       <li className='skills_item'><i className="icon_skill fa-solid fa-star-half-stroke"></i>Animations</li>
       <li className='skills_item'><i className="icon_skill fa-solid fa-crop-simple"></i>Reponsive Designs</li>
       <li className='skills_item'><i className="icon_skill fa-solid fa-terminal"></i>Well commented code</li>
     </ul>

     <p className='skills_after'>{translation.endText}</p>
   </div>
 )
}
