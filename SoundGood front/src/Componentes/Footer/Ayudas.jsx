import React from 'react';

function Ayudas({ redirectToHome }) {
    return (
        <div>
            <h1>Ayudas</h1>
            <p>Información sobre ayudas...</p>
            <button onClick={redirectToHome}>Volver a Inicio</button>
        </div>
    );
}

export default Ayudas;
