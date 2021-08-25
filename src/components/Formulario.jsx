import React from 'react'

const Formulario = () => {
    return (
        <div className="contenedor-formulario">
            <div>
                 <h2>Contactate con nosotros</h2>
                 <p>Ante cualquier inquietud <br /> consultanos sobre todas tus dudas.</p>
            </div>

            <form className="contenedor-form"> 
                <input placeholder="Nombre y apellido"  type="text" />
                <input placeholder="Mail"  type="email" />
                <input placeholder="Teléfono (opcional)"  type="text" />
                <select>
                    <option value="">Seleccionar división</option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
                <a href="#">Contactar</a>
            </form>
           
        </div>
    )
}

export default Formulario
