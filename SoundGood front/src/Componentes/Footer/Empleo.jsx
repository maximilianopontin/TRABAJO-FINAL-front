import React from 'react';

function Empleo({ redirectToHome }) {
    return (
        <div>
            <h1>Empleo</h1>
            <p>Información sobre empleos...</p>
            <button onClick={redirectToHome}>Volver a Inicio</button>
        </div>
    );
}

export default Empleo;
