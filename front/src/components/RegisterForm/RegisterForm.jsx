import React, { useState } from 'react'
import "./RegisterForm.css"
import { Link } from 'react-router-dom'

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    alias: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState('')

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
  
    if (!formData.email || !formData.alias) {
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
    
    } catch (error) {
      console.error('Error en la solicitud:', error)
      setError('Error en la solicitud')
    }}

  return (
  <div className='contenedorFormulario'>
    
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor="alias">Alias:</label>
      <input
        type="text"
        id="alias"
        name="alias"
        value={formData.alias}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
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
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit">Registrarse</button>
    </form>  
    <p>Have an account already? <Link to="/login">Login</Link></p>
    </div>
  )

}

export default RegisterForm
