
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RegistrationForm from './Screens/RegistrationForm'
import CustomizedTables from './Screens/Table'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<RegistrationForm />} />
        <Route path='/table' element={<CustomizedTables />} />
      </Routes>

    </>
  )
}

export default App
