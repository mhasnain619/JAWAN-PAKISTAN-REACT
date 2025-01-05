
import { useState } from 'react'
import './App.css'

function App() {

  const [userName, userFunc] = useState('Hello World')
  const updateName = () => {
    userFunc('Hello World Again')
  }
  // console.log(state)

  // let userName = 'Anaintay'
  // const ChangeName = () => {
  //   userName = 'Anaintay changed'
  //   document.getElementById('username').innerHTML = userName
  // }
  return (
    <>
      <h1 id='username'>{userName}</h1>
      <button onClick={updateName}>Change Name</button>
    </>
  )
}

export default App
