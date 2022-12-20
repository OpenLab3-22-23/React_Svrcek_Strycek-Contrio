import {useState} from "react";

interface City {
    name : string;
    country : string;
    region : string;
    population : number;
  }

export default function CountryResult({result}: {result: Array<City>}) {
    console.log(result)

    // const[country, setCountry] = useState<City>(
    // {
    // name : "Bratislava",
    // country : "Slovakia",
    // region : "Bratislava Region",
    // population : 475503,
    // });

    return (
        <div>
            <h2 className="country-name">{result[0].name}</h2>
            <p>Country: {result[0].country}</p>
            <p>Region: {result[0].region}</p>
            <p>Population: {result[0].population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
        </div>
    )
}