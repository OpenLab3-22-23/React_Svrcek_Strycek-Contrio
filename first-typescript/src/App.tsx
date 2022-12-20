import { useState } from 'react'
import './App.css'
import CountryResult from './CountryResult'
import CityResult from './CityResult'
import Headher from './Headher'

interface City {
  name : string;
  country : string;
  region : string;
  population : number;
}

let text:string = "";

function App() {
  const[slider, setSlider]=useState(false);
  const[cityData, setCityData]=useState<Array<any>>([]);
  const[countryData, setCountryData]=useState([]);
  const[text, setText]=useState("");

  async function getAllDAta() {
    if (slider) {
      console.log("City")
      await getCity();
    }
    else {
      console.log("Country")
      console.log(text);
      // await getCountry();
      // await delay(1000);
      // await getCountryDetails();
    }
  }

  async function getCity() {
    let tmpText = text;
    if(!tmpText) {
      tmpText = "Bratislava";
    }

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '31c5235490msha1fb83c9e91f9d4p193520jsn67bdd3fc1f71',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      }
    };
  
    fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=10&minPopulation=15000&namePrefix=${tmpText}&types=CITY`, options)
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
      setCityData(CityData);
      // zobrazit data
    })
    .catch(err => console.error(err));
  }
  
  return (
    <div className="App">
      <Headher slider={slider} setSlider={setSlider} onClick={getAllDAta} text={text} setText={setText}/>
      <div className='country-flex'>
        {slider ? <CityResult cityData={cityData}/> : <CountryResult />}
      </div>
    </div>
  )
}

export default App
