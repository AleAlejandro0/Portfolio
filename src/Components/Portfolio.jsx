import React from 'react'

const Portfolio = ({translation, portfolioSection}) => {
  return (
   <div className='portfolio_general'  data-scroll-section> 
    <div className='portfolio' style={{ display: portfolioSection}}>
      <p className='pre-title'>{translation.preTitle2}</p>
      <h2 className='title'>{translation.title3}</h2>

      <div className='portfolio_container'>  
        <div className='portfolio_project'>
          <div className='porfolio_frame  proyect-4'>
            <div className='proyect_description'>
              <p className='proyect_text'>{translation.description4}</p> 

              <a className='proyect_link' href="https://stalwart-arithmetic-faea2f.netlify.app/#/" target="_blank">{translation.site}</a>
            </div>
          </div>
          <h3 className='portfolio_project-name'>Ecommerce</h3>
        </div>
     
        <div className='portfolio_project'>
          <div className='porfolio_frame  proyect-3'>
            <div className='proyect_description'>
              <p className='proyect_text'>{translation.description3}</p> 

              <a className='proyect_link' href="https://neon-tapioca-19aad1.netlify.app/" target="_blank">{translation.site}</a>
            </div>
          </div>
          <h3 className='portfolio_project-name'>Pokemon</h3>
        </div>
 
        <div className='portfolio_project'>
          <div className='porfolio_frame  proyect-2'>
            <div className='proyect_description'>
              <p className='proyect_text'>{translation.description2}</p> 

              <a className='proyect_link' href="https://astonishing-caramel-19fd9d.netlify.app/" target="_blank">{translation.site}</a>
            </div>
          </div>
          <h3 className='portfolio_project-name'>{translation.project2}</h3>
        </div>

        <div className='portfolio_project'>
          <div className='porfolio_frame  proyect-1'>
            <div className='proyect_description'>
              <p className='proyect_text'>{translation.description1}</p> 

              <a className='proyect_link' href="https://funny-sprite-7e47ee.netlify.app/" target="_blank">{translation.site}</a>
            </div>
          </div>
          <h3 className='portfolio_project-name'>{translation.project1}</h3>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Portfolio