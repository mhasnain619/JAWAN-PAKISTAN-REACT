import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import User from './Components/User'
import RegistrationForm from './Components/RegistrationForm'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
        <Route path="/registration_form" element={<RegistrationForm />} />
      </Routes>
    </>
  )
}

export default App
