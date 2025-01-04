import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import TextField from '@mui/material/TextField';
import PrimarySearchAppBar from './AppBar';
import DashboardLayoutBasic from './Dashboard';
import ResponsiveAppBar from './AppBar';
import PersistentDrawerLeft from './Dawer';
function App() {

  return (
    <>
      {/* <ResponsiveAppBar /> */}
      <PersistentDrawerLeft />
      {/* <DashboardLayoutBasic /> */}
    </>
  )
}

export default App
