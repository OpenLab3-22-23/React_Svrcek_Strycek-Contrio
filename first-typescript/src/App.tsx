import { useState } from 'react'
import './App.css'
import CountryResult from './CountryResult'
import Headher from './Headher'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Headher />
      <div className='country-flex'>
        <CountryResult />
      </div>
    </div>
  )
}

export default App
