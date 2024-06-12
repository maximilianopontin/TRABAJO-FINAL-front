//en esta seccion se muestra la pagina de inicio para registro e inicio de seccion
import React, { useState } from "react"
import logo from '../../logo/logo.png'
import "./InicioSesion.css"



export function PagInicioSesion({redirectToInicio}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    //validamos que la contraseña cumpla con las condiciones dadas.
    const handlerFormSudmit = (e) => {
        e.preventDefault();

        if (!validatePassword(password)) {
            setErrorMessage('La contraseña debe tener al menos una mayuscula, un numero y simbolo.');
            return;
        }
        if (!validateEmail(email)) {
            setErrorMessage('El email debe ser valido');
            return;
        }
        clearFrom(); //si el form se envia correctamente, este se limpia
    }

    //validamos si la contraseña esta bien o mal
    const handlePasswordChange = (e) => {
        const newPassword = e.target.value
        setPassword(newPassword);
        if (validatePassword(newPassword)) {
            setErrorMessage('');
        } else {
            setErrorMessage('La contraseña es incorrecta');
        }
    }

    //Validamos sin el email cumple con las condicones
    const hadleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setErrorMessage('');
    }

    //Validacion para las condiciones de la contraseña
    const validatePassword = (password) => {
        const conditionPassaword = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return conditionPassaword.test(password);
    }

    //Validacion para el email
    const validateEmail = email => {
        const conditionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return conditionEmail.test(email);
    }

    //Liampiar el form
    const clearFrom = () => {
        setEmail('');
        setPassword('');
        setErrorMessage('');

    }
    return (
        <div >          
            <img src={logo} alt="" className="Logo" />

            <form className="form" onSubmit={handlerFormSudmit}>

                <input type="text" name="email" placeholder="Email" value={email} onChange={hadleEmailChange} required />

                <input type="password" name="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange}
                    required />

                <button onClick={redirectToInicio}>Iniciar sesion</button> {/* Redireccion a Inico*/}

                <div className="error-message">
                    {errorMessage ? errorMessage : ""}
                </div>
                
            </form>

        </div>
    )
}

