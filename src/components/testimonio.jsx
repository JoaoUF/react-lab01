import React from 'react';
import '../stylesheets/Testimonio.css'

export function Testimonio(props) {
    return (
        <div className='contenedor-testimonio'>
            <img className='imagen-testimonio' src={require('../img/persona_01.jpg')} alt='Foto de persona' />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>{props.nombre} en {props.pais}</p>
                <p className='nombre-testimonio'>{props.cargo} en {props.empresa}</p>
                <p className='texto-testimonio'>{props.testimonio}</p>
            </div>
        </div>
    );
}