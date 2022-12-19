import { useState } from 'react'
import './App.css'
import CountryResult from './CountryResult'
import Headher from './Headher'

interface City {
  name : string;
  country : string;
  region : string;
  population : number;
}

let text:string = "";

function App() {
  const [count, setCount] = useState(0);
  const[slider, setSlider]=useState(false);

  async function getAllDAta() {
    if (slider) {
      console.log("City")
      await getCity();
    }
    else {
      console.log("Country")
      // await getCountry();
      // await delay(1000);
      // await getCountryDetails();
    }
  }

  function getCity(): void {
    // text = searchOutput.value;
    text = "Bratis";
  
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '31c5235490msha1fb83c9e91f9d4p193520jsn67bdd3fc1f71',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      }
    };
  
    fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=10&minPopulation=15000&namePrefix=${text}&types=CITY`, options)
    .then(response => response.json())
    .then(response => {
  
      let CityData: City[] = [];
  
      for (let i = 0; i < response.data.length; i++) {
        CityData[i] = {
          name : response.data[i].name,
          country : response.data[i].country,
          region : response.data[i].region,
          population : response.data[i].population
        }
      }
      if (CityData[0] == null) {
        confirm("This city doesn't exist")
      }
      console.log(CityData);
      // zobrazit data
    })
    .catch(err => console.error(err));
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
