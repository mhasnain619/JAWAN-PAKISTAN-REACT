import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Cardpo from './Components/Card/Card';
import { Data } from '../Data'
import DrawerAppBar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
      <DrawerAppBar />
      <div className='mainContainer'>
        {Data ? (
          Data.map((e, i) => {
            return (
              <Cardpo key={i} id={e.id} imageSrc={e.imgSrc} title={e.title} desc={e.desc} />
            )
          })
        ) : <h1>Data Not Found...</h1 >
        }
      </div>

    </>
  )
}

export default App
