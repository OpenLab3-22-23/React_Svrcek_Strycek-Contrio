import { useState } from 'react'
import './App.css'
import CountryResult from './CountryResult'
import Headher from './Headher'

async function getAllDAta() {
  if (slider) {
      await getCity();
  }
  else {
      await getCountry();
      await delay(1000);
      await getCountryDetails();
  }
  
}

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
