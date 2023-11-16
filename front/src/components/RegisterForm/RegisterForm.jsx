import React, { useState } from 'react'
import "./RegisterForm.css"

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    alias: "",
    email: "",
    password: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realiza la solicitud Fetch
    fetch('http://localhost:3040/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      return response.json();
    })
    .then(data => {
      // Maneja la respuesta exitosa
      console.log('Registro exitoso:', data);
    })
    .catch(error => {
      // Maneja errores en la solicitud
      console.error('Error en la solicitud:', error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Campos del formulario */}
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


      <button type="submit">Registrarse</button>
    </form>
  );
};

export default RegisterForm
