import React, { useState } from "react";
import logo from '../../logo/logo.png'
import './Registro.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import registro from '../../../public/registro.json'

export function PagRegistro() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [nombre, setNombre] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState(null);

    //validamos que la contraseña y email cumpla con las condiciones dadas.
    const handlerFormSudmit = (e) => {
        e.preventDefault();

        // validamos el email
        if (!validateEmail(email)) {
            setErrorMessage('El email debe ser valido');
            return;
        }
        //validamos la contraseña
        if (!validatePassword(password)) {
            setErrorMessage('La contraseña debe tener al menos una mayuscula, un numero y simbolo.');
            return;
        }
        // Validaciones de nombre
        if (nombre.trim() === '') { // el meto TRIM() limpia los espacios que pude llegar a poner el usuario
            setErrorMessage('Por favor ingresa tu nombre.');
            return;
        }
        // Validación de la fecha de nacimiento
        if (!fechaNacimiento) {
            setErrorMessage('Por favor, selecciona tu fecha de nacimiento.');
            return;
        }
        //constante para poder cargar el json ??????????????????????
        const userData = {
            email,
            password,
            nombre,
            fechaNacimiento: fechaNacimiento ? fechaNacimiento.toISOString() : null
        };
        // const updatedClientes = [...registro.clientes, userData];
        // const updatedRegistro = { clientes: updatedClientes };
        // localStorage.setItem('registro', JSON.stringify(updatedRegistro));

        clearFrom(); //si el form se envia correctamente, este se limpia
    }
    //Validacion para el email
    const validateEmail = (email) => {
        const conditionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return conditionEmail.test(email);
    }
    //Validacion para las condiciones de la contraseña
    const validatePassword = (password) => {
        const conditionPassaword = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return conditionPassaword.test(password);
    }
    //Validamos sin el email cumple con las condicones
    const hadleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setErrorMessage('');
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
        setNombre('');
        setFechaNacimiento(null);

    }

    return (
        <div>
            <img src={logo} alt="" />
            <form className="form" onSubmit={handlerFormSudmit}>

                <input type="text" name="email" placeholder="Email" value={email} onChange={hadleEmailChange} required />

                <input type="password" name="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} required />

                <div className="parrafos">
                    <p>Para garantizar la seguridad de tu cuenta, tu contraseña debe cumplir con los siguientes requisitos:</p>
                    <p>Debe contener al menos:</p>
                    <p> Una letra mayúscula, un carácter especial, un número y varias letras minúsculas </p>
                    <p>¡Gracias por tu cooperación en mantener tu cuenta segura!</p>
                </div>

                <input type="text" name="nombre" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />

                <DatePicker /*Biblioteca para el calendario de la fecha \\npm install react-datepicker\\ */
                    selected={fechaNacimiento}
                    onChange={(date) => setFechaNacimiento(date)}
                    placeholderText="Fecha de nacimiento"
                    dateFormat="dd/MM/yyyy"
                    className="date-picker"
                />
                <div className="parrafos">
                    <p>Términos y Condiciones de SoundGood</p>
                    <p>Al registrarte en SoundGood, aceptas nuestros términos y condiciones. Por favor, asegúrate de revisarlos periódicamente, ya que pueden cambiar. Gracias por unirte a nuestra comunidad musical.</p>
                </div>



                <button type="sudmit">Registrarse</button>

                <div className="error-message">
                    {errorMessage ? errorMessage : ""}
                </div>

            </form>
        </div>
    )
} 