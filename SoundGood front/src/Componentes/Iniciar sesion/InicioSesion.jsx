import React, { useState } from "react"
import './InicioSesion.css';
import logo from '../../logo/logo.png'


export function InicioSesion(){
   
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [errorMessage, setErrorMessage] = useState('');

     //validamos que la contraseña cumpla con las condiciones dadas.
    const handlerFormSudmit = (e) => {
        e.preventDefault();
 
        if (!validatePassword(password)){
            setErrorMessage('La contraseña debe tener al menos una mayuscula, un numero y simbolo.');
            return;
        }
        if (!validateEmail(email)){
            setErrorMessage('El email debe ser valido');
            return;
        }
        clearFrom(); //si el form se envia correctamente, este se limpia
    }

    //validamos si la contraseña esta bien o mal
    const handlePasswordChange = (e) => {
        const newPassword = e.target.value
        setPassword(newPassword);
        if(validatePassword(newPassword)){
            setErrorMessage('');
        }else {
            setErrorMessage('La contraseña esta mal');
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
    return(  
        <div >
            <img src={logo} alt="" className="logoo" />

           <form className="form" onSubmit={handlerFormSudmit}>

             <input type="text" name="email"  placeholder="Email" value={email} onChange={hadleEmailChange} required />

             <input type="password" name="password"  placeholder="Contraseña" value={password} onChange={handlePasswordChange}
             required/>

             {errorMessage && <div className="error-message">{errorMessage}</div>} 
        
             <button type="submit">Iniciar sesion</button>

          </form> 

        </div>
    )
}