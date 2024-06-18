import React from 'react';

function VersionGratuita({ redirectToHome }) {
    return (
        <div>
            <h1>Versión Gratuita</h1>
            <p>Información sobre la versión gratuita...</p>
            <button onClick={redirectToHome}>Volver a Inicio</button>
        </div>
    );
}

export default VersionGratuita;
