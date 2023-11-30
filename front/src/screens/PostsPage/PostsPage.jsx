import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./PostsPage.css"

const PostsPage = ({ token }) => {
  const [userPosts, setUserPosts] = useState([])

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const response = await fetch('http://localhost:3040/posts/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          credentials: 'include',
        });

        if (response.ok) {
          const posts = await response.json()
          setUserPosts(posts)
        } else {
          console.error('Error al obtener los posteos del usuario')
        }
      } catch (error) {
        console.error('Error de red:', error)
      }
    }

    fetchUserPosts()
  }, [token])

  const deletePost = async (postId) => {
    try {
      const response = await fetch(`http://localhost:3040/posts/${postId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        credentials: 'include',
      })

      if (response.ok) {
        const updatedPosts = userPosts.filter((post) => post._id !== postId)
        setUserPosts(updatedPosts)
        console.log('Posteo eliminado exitosamente')
      } else {
        console.error('Error al eliminar el posteo')
      }
    } catch (error) {
      console.error('Error de red:', error)
    }
  }

  return (
    <div>
      <h1>Tus Posteos</h1>
      <ul>
        {userPosts.map((post) => (
          <li key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <button onClick={() => deletePost(post._id)}>Eliminar</button>
            <Link to={`/posts/${post._id}`}>Editar</Link>
          </li>
        ))}
      </ul>
      <Link to="/addPost">Crear un nuevo posteo</Link>
    </div>
  )
}

export default PostsPage