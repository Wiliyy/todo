import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Login from './pages/Login'
import Register from './pages/Register'
import Tasks from './pages/Tasks'

function App() {
  return (
    <div className="app">
      <Header />

        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/login" element={<Login />} exact/>
          <Route path="/register" element={<Register />} exact/>
        </Routes>

    </div>
  )
}

export default App
