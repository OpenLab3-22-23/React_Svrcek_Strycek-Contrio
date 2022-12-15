import { useState } from 'react'
import './App.css'
import CountryResult from './CountryResult'
import Headher from './Headher'

function App() {
  const [count, setCount] = useState(0);
  const[slider, setSlider]=useState(false);

  async function getAllDAta() {
    if (slider) {
      console.log("City")
      // await getCity();
    }
    else {
      console.log("Country")
      // await getCountry();
      // await delay(1000);
      // await getCountryDetails();
    }
  }
  
  return (
    <div className="App">
      <Headher slider={slider} setSlider={setSlider} onClick={getAllDAta}/>
      <div className='country-flex'>
        <CountryResult />
      </div>
    </div>
  )
}

export default App
