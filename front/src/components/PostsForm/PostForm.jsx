import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./PostForm.css"

const PostForm = ({token}) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:3040/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({ title, description }),
        credentials: "include",
      });

      if (response.ok) {
        navigate("/posts")
      } else {
        console.error('Error al crear el post')
      }
    } catch (error) {
      console.error('Error de red:', error)
    }
  }

  return (
    <>
    <div className='container-form'>
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Título:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label htmlFor="description">Contenido:</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <button type="submit">Crear Post</button>
    </form>
    </div>
    <Link to="/posts" className='posts-link'>Ver todas mis notas</Link>
    </>
  )
}

export default PostForm