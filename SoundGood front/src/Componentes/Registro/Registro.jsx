import React, { useState } from "react";
import logo from '../../logo/logo.png'
//import registrosData from '../../../public/registros.json'

export function PagRegistro() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState ('');
    const [nombre, setNombre] = useState('');
    const [FechaNacimiento, setFechaNacimiento] = useState('');

    //validamos que la contraseña y email cumpla con las condiciones dadas.
    const handlerFormSudmit = (e) => {
        e.preventDefault();
        
        if (!validateEmail(email)) {
            setErrorMessage('El email debe ser valido');
            return;
        }
        if (!validatePassword(password)) {
            setErrorMessage('La contraseña debe tener al menos una mayuscula, un numero y simbolo.');
            return;
        }
       //constante para poder cargar el json
        const userData = {
            email: email,
            password: password,
            nombre: nombre,
            FechaNacimiento: FechaNacimiento
        }
        //Agregamos los datos que se cargaron el from al json
        registrosData.push(userData); 


        clearFrom(); //si el form se envia correctamente, este se limpia
    }
    //Validacion para el email
    const validateEmail = (email) => {
        const conditionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return conditionEmail.test(email);
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

    //Liampiar el form
    const clearFrom = () => {
        setEmail('');
        setPassword('');
        setErrorMessage('');

    }

    return (
        <div>
            <img src={logo} alt="" />
            <form className="form" onSubmit={handlerFormSudmit}>
                <input type="text" name="email" placeholder="Email" value={email} onChange={hadleEmailChange} required />

                <input type="password" name="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} required />
                <div>
                    <p>Para garantizar la seguridad de tu cuenta, tu contraseña debe cumplir con los siguientes requisitos:</p>
                    <ul>Debe contener al menos:

                        <li> Una letra mayúscula</li>
                        <li> Un carácter especial</li>
                        <li> Un número</li>
                        <li>Varias letras minúsculas</li>
                        ¡Gracias por tu cooperación en mantener tu cuenta segura!
                    </ul>
                </div>

                <input type="text" name="nombre" placeholder="Nombre"  />

                <input type="fechaNacimiento" name="fechaNacimiento" placeholder="Fecha de nacieminto"  />

                <p>Términos y Condiciones de SoundGood

                    Al registrarte en SoundGood, aceptas nuestros términos y condiciones. Por favor, asegúrate de revisarlos periódicamente, ya que pueden cambiar. Gracias por unirte a nuestra comunidad musical.</p>

                <button type="sudmit">Registrarse</button>

                <div className="error-message">
                    {errorMessage ? errorMessage : ""}
                </div>

            </form>
        </div>
    )
} 