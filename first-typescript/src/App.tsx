import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CountryResult from './CountryResult'
import Headher from './Headher'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Headher />
      <CountryResult />
    </div>
  )
}

export default App
