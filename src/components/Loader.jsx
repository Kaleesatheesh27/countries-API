import React from 'react'
import './Loader.css'

const Loader = () => {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh', flexDirection:'column'}}>
     <div className='spin'></div>
     
      <p>Loading...</p>


    </div>
  )
}

export default Loader