import React, { useState, useEffect } from 'react'

const ProfilePage = ({ token }) => {
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:3040/user/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          credentials: 'include',
        })

        if (response.ok) {
          const data = await response.json()
          setUserData(data)
        } else {
          console.error('Error al obtener datos del perfil')
        }
      } catch (error) {
        console.error('Error de red:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchUserData()
  }, [token])

  if (loading) {
    return <p>Cargando...</p>
  }

  if (!userData) {
    return <p>Error al cargar datos del perfil.</p>
  }

  return (
    <div>
      <h1>Perfil de Usuario</h1>
      <p>Alias: {userData.alias}</p>
      <p>Email: {userData.email}</p>
    </div>
  )
}

export default ProfilePage