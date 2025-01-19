
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RegistrationForm from './Screens/RegistrationForm'
import CustomizedTables from './Screens/Table'
import DrawerAppBar from './Screens/Navigation/NavigationBar'
import NotFound from './Screens/NotFound'
import Home from './Screens/Home'
import User from './Screens/User'
import Users from './Screens/Navigation/Users'
function App() {

  return (
    <>
      <DrawerAppBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<RegistrationForm />} />
        <Route path='/users' element={<Users />} />
        <Route path='/table' element={<CustomizedTables />} />
        <Route path='*' element={<NotFound />} />

        {/* Dynamic Routing */}
        <Route path='/user/:id' element={<User />} />
      </Routes>

    </>
  )
}

export default App
