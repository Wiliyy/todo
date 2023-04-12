import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Header />
        <Routes>
          <Route path="/tasks" element={<TaskForm />} exact/>
          <Route path="/login" element={<Login />} exact/>
          <Route path="/register" element={<Register />} exact/>
        </Routes>

    </div>
  )
}

export default App
