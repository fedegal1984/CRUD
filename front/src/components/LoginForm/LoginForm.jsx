import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./LoginForm.css"

const LoginForm = ({handleLogin}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const [error, setError] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState(null)

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

    if (!formData.email || !formData.password) {
      setError('Por favor, complete todos los campos obligatorios.')
      return
    }

    try {
      const response = await fetch('http://localhost:3040/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include',
      })

      if (!response.ok) {
        const data = await response.json()

        if (response.status === 400 && data.message === 'email no válido') {
          setError('El email ingresado no está registrado.')
        } else if (response.status === 401 && data.message === 'contraseña incorrecta') {
          setError('La contraseña ingresada no es correcta.')
        } else {
          setError('Error en la solicitud')
        }
        return
      }

      const data = await response.json()
      handleLogin(data.token)
      setIsLoggedIn(true)
      setToken(data.token)
      navigate('/posts', { replace: true })
      
    } catch (error) {
      console.error('Error en la solicitud:', error)
      setError('Error en la solicitud')
    }
  }

  return (
    <div className='contenedorFormulario'>
      {isLoggedIn ? (
        <p>Bienvenido, has iniciado sesión con éxito.</p>
      ) : (
        <>
          <h1>Login</h1>
          <form onSubmit={handleSubmit} noValidate>
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

            <button type="submit">Login</button>
          </form>

          <p>Don't have an account yet? <Link to="/register">Sign up</Link></p>
        </>
      )}
    </div>
  )
}

export default LoginForm