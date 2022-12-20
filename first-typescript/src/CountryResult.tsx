//vytvorit interface reprezentujuci krajinu 
// vztvorit stav repprezentujusi krajinu 
// vzkreslit data v jSX

import {useState} from "react";

interface Country {
    name : string;
    capital : string;
    currency : string;
    flag : string;
    regions : number;
    callingCode : number;
    population : number;
  }

export default function CountryResult() {

    const[country, setCountry] = useState<Country>(
    {
    name : "Slovakia",
    capital : "Bratislava",
    currency : "EUR",
    flag : "http://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Slovakia.svg",
    regions : 8,
    callingCode : +421,
    population : 5459642,
    });

    return (
        <div>
            <h2 className="country-name">{country.name}</h2>
            <p>Capital: {country.capital}</p>
            <p>Regions: {country.regions}</p>
            <p>CallingCode: {country.callingCode}</p>
            <p>Population: {country.population}</p>
            <div className="flag-box">
                <img className="flag" src={country.flag}/>
            </div>
        </div>
    )
}