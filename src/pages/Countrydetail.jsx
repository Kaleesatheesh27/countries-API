import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';


const Countrydetail = () => {
    const {name}=useParams();
const[country, setCountry] = useState();
const[loading, setLoading] = useState(true);
useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then (res=>res.json())
    .then(data=>setCountry(data[0]))
    .finally(()=>setLoading(false))
    
    
         
},[name])

if(loading){
    return <h2><Loader/></h2>
}




  return (
    <>
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh', flexDirection:'column'}}>

<div style={{boxShadow:" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",padding:'20px'}}>
    <img src={country?.flags?.png} alt={country?.name?.common}></img>
<p> <b>Capital: </b>  {country?.capital?.[0]}</p>
<p><b>Population:</b> {country?.population}</p>

</div>





    </div>
    
    
    
    
    
    
    
    
    </>
  )
}

export default Countrydetail
