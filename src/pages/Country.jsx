import React, { useState, useEffect } from 'react'
import './Country.css'
import Loader from '../components/Loader';
import {Link}  from 'react-router-dom';


const Country = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?fields=name,flags")
            .then(res => res.json())
            .then(data => setCountries(data))
           .finally(() => setLoading(false));


    }, [])
if (loading) {
    return <h2><Loader/></h2>
}
    return (
        <>

            <div className='country' >
                {countries.map((country, index) => (
                    <Link className='country-card' key={index}  to={`/country/${country.name.common}`}>
                        <img src={country.flags.png} alt={country.name.common}></img>
                        <h3>{country.name.common}</h3>
                    </Link>
                ))}

            </div>








        </>
    )
}

export default Country;
