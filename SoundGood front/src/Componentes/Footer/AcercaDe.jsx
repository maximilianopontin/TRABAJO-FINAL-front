import React from 'react';

function AcercaDe({ redirectToHome }) {
    return (
        <div>
            <h1>Acerca de</h1>
            <p>Información sobre la compañía...</p>
            <button onClick={redirectToHome}>Volver a Inicio</button>
        </div>
    );
}

export default AcercaDe;
