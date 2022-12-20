import {useState} from "react";

interface City {
    name : string;
    country : string;
    region : string;
    population : number;
  }

export default function CountryResult({cityData}: {cityData: Array<any>}) {
    console.log(cityData)
    const[country, setCountry] = useState<City>(
    {
    name : "Bratislava",
    country : "Slovakia",
    region : "Bratislava Region",
    population : 475503,
    });

    return (
        <div>
            <h2 className="country-name">{country.name}</h2>
            <p>Country: {country.country}</p>
            <p>Region: {country.region}</p>
            <p>Population: {country.population}</p>
        </div>
    )
}