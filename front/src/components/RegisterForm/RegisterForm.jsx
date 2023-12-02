import React, { useState } from 'react'
import "./RegisterForm.css"
import { Link, useNavigate } from 'react-router-dom'

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    alias: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
  
    if (!formData.email || !formData.alias || !formData.password) {
      setError('Por favor, complete todos los campos obligatorios.')
      return
    }
  
    try {
      const response = await fetch('http://localhost:3040/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
    
      if (!response.ok) {
        const data = await response.json()
        
        if (response.status === 409 && data.error === 'EmailAlreadyExists') {
          setError('El correo electrónico ya está registrado.')
        } else {
          setError('Error en la solicitud')
        }
        return
      }
    
      const data = await response.json()
      /* console.log('Registro exitoso - ID:', data.id, 'Email:', data.email, 'Alias:', data.alias) */
      navigate("/login")
    } catch (error) {
      console.error('Error en la solicitud:', error)
      setError('Error en la solicitud')
    }}

  return (
  <div className='contenedorFormularioRegister'>
    <h1>Registrarse</h1>
    <hr />
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor="alias">Nickname:</label>
      <input
        type="text"
        id="alias"
        name="alias"
        value={formData.alias}
        onChange={handleInputChange}
        required
        placeholder='Nombre que desea utilizar'
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
        placeholder='nombre@gmail.com'
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        required
      />
      {error && <p className='errorp'>{error}</p>}
      <div className="centrarBtn">
      <button type="submit">Registrarse</button>
      </div>
    </form>  
    <p>¿Ya tienes una cuenta? <Link to="/login" className='nav-link'>Ingresa</Link></p>
    </div>
  )

}

export default RegisterForm
