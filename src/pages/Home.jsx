import React from 'react'
import Headers from '../components/Headers'
import Footer from '../components/Footer'
import Formulario from '../components/Formulario'
import SectionEnfoque from '../components/SectionEnfoque'
import SectionOrganizaciones from '../components/SectionOrganizaciones'


const Home = () => {
    return (
        <div>
          <Headers />
          <SectionEnfoque />
          <SectionOrganizaciones />
          <Formulario />
          <Footer />  
        </div>
    )
}

export default Home
