
import { useState } from 'react'
import './App.css'
import CounterApp from './CounterApp'

function App() {

  // const [userName, userFunc] = useState('Hello World')
  // const updateName = () => {
  //   userFunc('Hello World Again')
  // }


  return (
    <>
      {/* <h1 id='username'>{userName}</h1>
      <button onClick={updateName}>Change Name</button> */}
      <CounterApp />


    </>
  )
}

export default App
