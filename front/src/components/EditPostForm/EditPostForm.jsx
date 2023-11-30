import React, { useState, useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom'

const EditPostForm = ({ token }) => {
  const { id } = useParams()
  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:3040/posts/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          credentials: 'include'
        })

        if (response.ok) {
          const postData = await response.json()
          setTitle(postData.title || '')
          setDescription(postData.description || '')
          setLoading(false)
          setPost(postData)
        } else {
          console.error('Error al obtener el posteo para editar:', response.status, response.statusText)
        }
      } catch (error) {
        console.error('Error de red al obtener el posteo para editar:', error)
      }
    };

    if (loading) {
      fetchPost()
    }
  }, [id, token, loading])

  const handleUpdatePost = async () => {
    try {
      const response = await fetch(`http://localhost:3040/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        credentials: 'include',
        body: JSON.stringify({ title, description }),
      })

      if (response.ok) {
        const updatedPost = await response.json()
        setPost(updatedPost)
        console.log('Posteo actualizado con éxito')
        navigate("/posts")
      } else {
        console.error('Error al actualizar el posteo:', response.status, response.statusText)
      }
    } catch (error) {
      console.error('Error en la solicitud al actualizar el posteo:', error)
    }
  }

  if (loading) {
    return <p>Cargando...</p>
  }

  return (
    <div>
      <h1>Editar Posteo</h1>
      <form>
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

        <button type="button" onClick={handleUpdatePost}>
          Actualizar
        </button>
      </form>
    </div>
  )
}

export default EditPostForm;