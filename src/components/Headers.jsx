import React from 'react'
import MenuHamburger from '../components/MenuHamburger'
import Logo from '../assets/Grupo 92.png'
import Banner from '../assets/MCorp_web_ilustraciones_02-01.png'
import BannerMobile from '../assets/MCorp_web_ilustraciones_02-02.png'


const Headers = () => {
    return (
        
                                   
          
               <div className="row header">

                  <img className="banner" src={Banner} alt="fondo-banner" />
                  <img className="banner-mobile" src={BannerMobile} alt="fondo-banner-mobile" />
                  <div className="col-md-6 col-sm-6 icono-principal">
                      <div>
                        <img className="logo-headers" src={Logo} alt="logo-headers" />
                     </div>
                  </div>

                  <div className="col-md-12 col-sm-12 menu-hamburguer">
                      <div>
                        <MenuHamburger /> 
                      </div>
                   </div>

              
                  
               <div className="contenedor-titulo">
                 <h1>Llevamos tus ideas <br /> a otro nivel.</h1>
                 <a href="#">Conocé más</a>
              </div>
          </div>


      
    )
}

export default Headers
