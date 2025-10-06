import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Country from './pages/Country'
import Countrydetail from "./pages/Countrydetail";


function App() {
  const [count, setCount] = useState(0)

  return(
    <>
    <BrowserRouter>
    <Routes>
 
      <Route path='/' element={<Country/>}/>
      <Route path='/country/:name' element={<Countrydetail/>}/>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App;
