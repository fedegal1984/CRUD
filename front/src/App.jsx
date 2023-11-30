import React, { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { RegisterPage, LoginPage, PostsPage, HomePage, NewPostPage, ProfilePage, EditPostPage } from './screens/index'
import { NavBar } from './components'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState(null)

  const handleLogin = (token) => {
    setIsLoggedIn(true)
    setToken(token)
  }
  const handleLogout = () =>{
    setIsLoggedIn(false)
    setToken(null)
  }

  return (
    <>
    <NavBar isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={isLoggedIn ? <Navigate to='/' /> : <LoginPage handleLogin={handleLogin} />}
      />
      {isLoggedIn ? (
        <>
          <Route path='/posts/*' element={<PostsPage token={token}/>} />
          <Route path='/addPost' element={<NewPostPage token={token} />} />
          <Route path='/posts/:id' element={<EditPostPage token={token}/>} />
          <Route path='/profile' element={<ProfilePage token={token} />} />
        </>
      ) 
      : 
      (
        <Route path='/*' element={<Navigate to='/login' replace />}/>
      )}
    </Routes>
    </>
  )
}

export default App