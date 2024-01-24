import React from 'react';
import Foto from './foto.png';

const About = () => {
    return (
        <div>
            <h2>About Me</h2>
            <img src={Foto} alt="Francisco Hernández Padilla" />
            <p>Nombre: Francisco Hernández Padilla</p>
            <p>Correo/Contacto: paconut1@gmail.com</p>
            <p>Descripción: Soy una persona autodidacta que le gusta mucho aprender, muy creativa y proactiva.</p>
        </div>
    );
}

export default About;