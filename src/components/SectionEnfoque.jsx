import React from 'react'
import LogoFoco from '../assets/Grupo 43.png'
import LogoEngranaje from '../assets/Grupo 41.png'
import LogoDiarios from '../assets/Grupo 39.png'

const SectionEnfoque = () => {
    return (
       
           <div className="section-enfoque">
             <h2>Enfoque integral.</h2>
             <p>Entendemos que la especialización es clave para generar 
                buenos resultados. Bajo la misma filosofía y ética de trabajo, 
                cada una de las empresas que componen MediaCorp se enfocan 
                en una industria para brindar el mejor servicio. </p>

                <div className="contenedor-iconos-enfoque"> 

              
                <div className="icono-enfoque">
                    <img src={LogoFoco} alt="logo-foco" />
                    <p>Pensamos</p>
                </div>

                <div className="icono-enfoque">
                    <img src={LogoEngranaje} alt="logo-engranaje" />
                    <p>Desarrollamos</p>
                </div>

                <div className="icono-enfoque">
                    <img src={LogoDiarios} alt="logo-diarios" />
                    <p>Materializamos</p>
                </div>
                </div>

               
             </div>
     
    )
}

export default SectionEnfoque
