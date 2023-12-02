import React from 'react'
import "./HomePage.css"

const HomePage = () => {
  return (
    <div className='container-home'>
        <h1>Bienvenido</h1>
        
        <div className='texto-bienvenida'>
          <hr />
          <p>En esta página podes crear notas, listas de tareas, recordatorios, o lo que precises guardar y modificar cuando sea necesario!</p><br />
          <p>Solo regístrate o accede con tu mail si ya tienes una cuenta</p>
        </div>
    </div>
  )
}

export default HomePage