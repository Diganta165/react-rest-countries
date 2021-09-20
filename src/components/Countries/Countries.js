import React, { useEffect, useState } from 'react';
import LoadCountries from '../LoadCountries/LoadCountries';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/all`)
        .then(res => res.json())
        .then(data => setCountries(data));
    },[]);
    return (
        <div>
            <h1>All The Countries</h1>
            <h4>Countries Available: {countries.length}</h4>
            {
                countries.map(country => <LoadCountries name={country.name} capital={country.capital}></LoadCountries>)
            }
        </div>
    );
};

export default Countries;