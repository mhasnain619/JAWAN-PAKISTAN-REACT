
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RegistrationForm from './Screens/RegistrationForm'
import CustomizedTables from './Screens/Table'
import DrawerAppBar from './Screens/Navigation/NavigationBar'
import NotFound from './Screens/NotFound'
import About from './Screens/About'
import Home from './Screens/Home'
import User from './Screens/User'
function App() {

  return (
    <>
      <DrawerAppBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<RegistrationForm />} />
        <Route path='/table' element={<CustomizedTables />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />

        {/* Dynamic Routing */}

        {/* Dynamic Params */}

        {/* <Route path='/user/:id' element={<User />} /> */}

        {/* Query Params */}


        <Route path='/user' element={<User />} />

      </Routes>

    </>
  )
}

export default App
