import React from 'react';
import './Links.css';

function VersionGratuita({ redirectToHome }) {
    return (
        <div>
            <h1>Versión Gratuita!!!</h1>
            <h2>Reproducí millones de canciones y podcasts de forma gratuita.</h2>
            <h3>¿Por qué elegir Soundgood?</h3>
            <ul>
                <li>Reproducí tus canciones favoritas.</li>
                <li>Escuchá las canciones que te encantan y descubrí música y podcasts nuevos.</li>
                <li>Te vamos ayudar a crear playlists. O podés disfrutar de playlists hechas por expertos en música.</li>
                <li>Contanos qué te gusta y te vamos a recomendar música para vos.</li>
                <li>Activá el Ahorro de datos desde Configuración y consumí menos datos cuando escuches tu música.</li>
            </ul>
            <button onClick={redirectToHome}  className="green-button">Volver a Inicio</button>
        </div>
    );
}

export default VersionGratuita;
