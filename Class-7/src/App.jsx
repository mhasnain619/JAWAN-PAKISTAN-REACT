
import './App.css'
let userName = 'Anaintay'
const ChangeName = () => {
  userName = 'Anaintay changed'
  document.getElementById('username').innerHTML = userName
}
function App() {

  return (
    <>
      <h1 id='username'>{userName}</h1>
      <button onClick={ChangeName}>Change Name</button>
    </>
  )
}

export default App
