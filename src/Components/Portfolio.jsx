import React from 'react'

const Portfolio = ({portfolioSection}) => {
  return (
   <div className='portfolio_general'  data-scroll-section> 
    <div className='portfolio' style={{ display: portfolioSection}}>
      <p className='pre-title'>Ultimos Proyectos</p>
      <h2 className='title'>Portafolio</h2>

      <div className='portfolio_container'>  
        <div className='portfolio_project'>
          <div className='porfolio_frame  proyect-4'>
            <div className='proyect_description'>
              <p className='proyect_text'>Se implementaron funcionalidades para facilitar la busqueda de productos por parte del cliente
              con filtros como categoria, nombre y precio.</p> 

              <a className='proyect_link' href="https://stalwart-arithmetic-faea2f.netlify.app/#/" target="_blank">Ver sitio</a>
            </div>
          </div>
          <h3 className='portfolio_project-name'>Ecommerce</h3>
        </div>
     
        <div className='portfolio_project'>
          <div className='porfolio_frame  proyect-3'>
            <div className='proyect_description'>
              <p className='proyect_text'>Se personaliza la pagina con el nombre del visitante, agregando estilos dinamicos al proyecto dependiendo el tipo, adicional a filtros de busqueda.</p> 

              <a className='proyect_link' href="https://neon-tapioca-19aad1.netlify.app/" target="_blank">Ver sitio</a>
            </div>
          </div>
          <h3 className='portfolio_project-name'>Pokemon</h3>
        </div>
 
        <div className='portfolio_project'>
          <div className='porfolio_frame  proyect-2'>
            <div className='proyect_description'>
              <p className='proyect_text'>Nuestro visitante puede ver las diferentes dimesiones y personajes de la famosa serie Rick y Morty por ID de dimension, adicional se hacen sugerencias de busqueda.</p> 

              <a className='proyect_link' href="https://astonishing-caramel-19fd9d.netlify.app/" target="_blank">Ver sitio</a>
            </div>
          </div>
          <h3 className='portfolio_project-name'>Rick and Morty</h3>
        </div>

        <div className='portfolio_project'>
          <div className='porfolio_frame  proyect-1'>
            <div className='proyect_description'>
              <p className='proyect_text'>Se despliega de manera dinamica la informacion Meteorologica de nuestro visitante dependiendo de su actual locacion utilizando geolocalizacion.</p> 

              <a className='proyect_link' href="https://funny-sprite-7e47ee.netlify.app/" target="_blank">Ver sitio</a>
            </div>
          </div>
          <h3 className='portfolio_project-name'>Weather</h3>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Portfolio