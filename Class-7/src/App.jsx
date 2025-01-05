
import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const inceriment = () => {
    setCounter(counter++)
  }
  const decriment = () => {
    setCounter(counter <= 0 ? 0 : --counter)
  }

  // const [userName, userFunc] = useState('Hello World')
  // const updateName = () => {
  //   userFunc('Hello World Again')
  // }
  // console.log(state)

  // let userName = 'Anaintay'
  // const ChangeName = () => {
  //   userName = 'Anaintay changed'
  //   document.getElementById('username').innerHTML = userName
  // }
  return (
    <>
      {/* <h1 id='username'>{userName}</h1>
      <button onClick={updateName}>Change Name</button> */}

      <h1>{counter}</h1>
      <button onClick={inceriment}>inc+</button>
      <button onClick={decriment}>dec-</button>

    </>
  )
}

export default App
