import React, { useState } from 'react'
import "./RegisterForm.css"

const RegisterForm = () => {
    const [userData, setUserData] = useState ({})
    const [formUserData, setFormUserData] = useState({
        alias:"",
        email:"", 
        password:""
    })
    const [showPersonalData, setShowPersonalData] = useState(false)
    const handleRegisterUser = (evento) =>{
        evento.preventDefault()
        console.log(evento)
        setShowPersonalData(true)
        setUserData(formUserData)
        setFormUserData({
        alias:"",
        email:"",
        password:""
    })
        
    }
    const handleChangeRegisterUser = (evento) =>{
        console.log(evento.target.name)
        console.log(formUserData)
        setFormUserData({...formUserData, [evento.target.name]: evento.target.value})
        
    }
  return (
    <div>
        <form onSubmit={handleRegisterUser} className='formularioUsuario'>
            <h2>Register</h2>
            <label htmlFor="alias">Username:*</label>
            <input type="text" placeholder='Username' name="alias" id='alias' onChange={handleChangeRegisterUser} value={formUserData.alias} required/>

            <label htmlFor="email">Email:*</label>
            <input type="email" placeholder="xxxx@xxxx.com" name="email" id='email' onChange={handleChangeRegisterUser} value={formUserData.email} required/>

            <label htmlFor="password">Asunto:*</label>
            <input type="password" placeholder='Password' name="password" id='password' onChange={handleChangeRegisterUser} value={formUserData.password} required/>

            <button type='submit'>Register</button>
        </form>
        {  
            showPersonalData &&
            <div className='personalData'>
                <h4>Nombre de usuario: {userData.nombre}</h4>
                <h4>Email: {userData.email}</h4>
                <div><span><b>Mensaje enviado <i className="bi bi-check-all"></i></b></span></div>
            </div>
        }
    </div>
  )
}

export default RegisterForm