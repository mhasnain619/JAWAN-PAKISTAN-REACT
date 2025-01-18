
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RegistrationForm from './Screens/RegistrationForm'
import CustomizedTables from './Screens/Table'
import DrawerAppBar from './Screens/Navigation/NavigationBar'
function App() {

  return (
    <>
      <DrawerAppBar />
      <Routes>
        <Route path='/form' element={<RegistrationForm />} />
        <Route path='/table' element={<CustomizedTables />} />
      </Routes>

    </>
  )
}

export default App
