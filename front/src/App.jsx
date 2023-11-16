import {Route, Routes} from "react-router-dom"
import {RegisterPage, LoginPage} from './screens/index'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<h1>Home</h1>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/posts" element={<h1>Posts</h1>}/>
      <Route path="/addPost" element={<h1>New Post</h1>}/>
      <Route path="/posts/:id" element={<h1>Post Detail</h1>}/>
      <Route path="/profile" element={<h1>Profile</h1>}/>
    </Routes>

    </>
  )
}

export default App
