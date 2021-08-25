import React from 'react'
import MediaHaus from '../assets/Grupo 63.png'
import LogoEdificio from '../assets/Grupo 21.png'
import MediaLite from '../assets/Grupo 64.png'
import LogoCasa from '../assets/Grupo 23.png'
import CursosColegios from '../assets/Grupo 89.png'
import LogoHojas from '../assets/Grupo 28.png'
import MediaCommerce from '../assets/Grupo 65.png'
import LogoBolsas from '../assets/Grupo 25.png'
import MediaFactory from '../assets/Grupo 53.png'
import LogoCompu from '../assets/Grupo 29.png'

const SectionOrganizaciones = () => {
    return (
        
            <div className="section-organizaciones">
               <h2>Organizaciones <br /> especializadas por sector.</h2>

               <div className="row">
                   <div className="col-md-12 col-sm-12 contenedor-card">
                        <div className="card-sector">
                            <span>Real estate</span>
                            <img src={MediaHaus} alt="logo-media-haus" />
                            <p>Agencia de servicios digitales multimedia customizados a medida especializada en el mercado inmobiliario.</p>
                            <img className="logos-organizacion" src={LogoEdificio} alt="logo-edificio" />
                            <a href="#">Ver más</a>
                        </div>

                        <div className="card-sector">
                            <span>Real estate</span>
                            <img src={MediaLite} alt="logo-media-lite" />
                            <p>Agencia de servicios digitales multimedia estandarizados especializada en el mercado inmobiliario.</p>
                            <img src={LogoCasa} alt="logo-casa" />
                            <a href="#">Ver más</a>
                        </div>

                        <div className="card-sector">
                            <span>Educación</span>
                            <img src={CursosColegios} alt="logo-cursos" />
                            <p>Portal digital de anuncios y servicios para organizaciones formativas de todos los niveles y afines.</p>
                            <img src={LogoHojas} alt="logo-hojas" />
                            <a href="#">Ver más</a>
                        </div>

                        <div className="card-sector">
                            <span>E-commerce</span>
                            <img src={MediaCommerce} alt="logo-media" />
                            <p>Agencia de servicios digitales multimedia a medida especializada en comunicación y posicionamiento.</p>
                            <img src={LogoBolsas} alt="logo-bolsas" />
                            <a href="#">Ver más</a>
                        </div>

                        <div className="card-sector">
                            <span>Software</span>
                            <img src={MediaFactory} alt="logo-factory" />
                            <p>Agencia de servicios digitales especializada en el desarrollo de software a medida del cliente.</p>
                            <img src={LogoCompu} alt="logo-compu" />
                            <a className="btn-bottom" href="#">Ver más</a>
                        </div>
                   </div>
               </div>
            </div>
            
       
    )
}

export default SectionOrganizaciones
