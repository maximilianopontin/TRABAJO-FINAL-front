import React, { useState } from "react";
import logo from '../../logo/logo.png';
import "./InicioSesion.css";


export function PagInicioSesion({ redirectToHome }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Validamos que la contraseña cumpla con las condiciones dadas.
    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('El email debe ser válido.');
            return;
        }

        if (!validatePassword(password)) {
            setErrorMessage('La contraseña debe tener al menos una mayúscula, un número y un símbolo.');
            return;
        }

        // Si todas las validaciones son exitosas, limpiamos el formulario y redirigimos a Home
        clearForm();
        redirectToHome(); /* El botón envía el formulario */
    }

    // Validamos si la contraseña está bien o mal
    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        if (validatePassword(newPassword)) {
            setErrorMessage('');
        } else {
            setErrorMessage('La contraseña es incorrecta.');
        }
    }

    // Validamos si el email cumple con las condiciones
    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setErrorMessage('');
    }

    // Validación para las condiciones de la contraseña
    const validatePassword = (password) => {
        const conditionPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return conditionPassword.test(password);
    }

    // Validación para el email
    const validateEmail = (email) => {
        const conditionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return conditionEmail.test(email);
    }

    // Limpiar el formulario
    const clearForm = () => {
        setEmail('');
        setPassword('');
        setErrorMessage('');
    }

    return (
        <div>
            <img src={logo} alt="Logo" className="Logo" />
            <form className="form" onSubmit={handleFormSubmit}>
                <input type="text" name="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
                <input type="password" name="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} required />
                <button type="submit">Iniciar sesión</button> 
                <div className="error-message">
                    {errorMessage ? errorMessage : ""}
                </div>
            </form>
            
        </div>
    );
}
