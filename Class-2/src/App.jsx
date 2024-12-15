import './App.css'
import Button from './Components/Button'
import Input from './Components/Input'
import NewButton from './Components/NewButton'

function App() {

  return (
    <>
      <div className='backGr'>
        <h1>Hello React</h1>
        <p>React is a JavaScript library for building user interfaces.</p><p>hii</p>
        <Input />
        <Button />
        <NewButton />
      </div>
    </>
  )
}

export default App
