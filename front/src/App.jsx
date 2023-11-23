import React, { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { RegisterPage, LoginPage, PostsPage, HomePage, NewPostPage, ProfilePage } from './screens/index'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState(null)

  const handleLogin = (token) => {
    setIsLoggedIn(true)
    setToken(token)
  }

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={isLoggedIn ? <Navigate to='/' /> : <LoginPage handleLogin={handleLogin} />}
      />
      {isLoggedIn ? (
        <>
          <Route path='/posts/*' element={<PostsPage />} />
          <Route path='/addPost' element={<NewPostPage />} />
          <Route path='/posts/:id' element={<NewPostPage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </>
      ) 
      : 
      (
        <Route
          path='/*'
          element={<Navigate to='/login' replace />}
        />
      )}
    </Routes>
  );
}

export default App;