import React from 'react';

function PlanPremium({ redirectToHome }) {
    return (
        <div>
            <h1>Plan Premium</h1>
            <p>Información sobre el plan premium...</p>
            <button onClick={redirectToHome}>Volver a Inicio</button>
        </div>
    );
}

export default PlanPremium;
