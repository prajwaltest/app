import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Home from './Component/Home'
import { Route, Routes, useNavigate } from 'react-router-dom'
import About from './Component/About'
import Services from './Component/Services'
import Contact from './Component/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation'
import Errorpage from './Errorpage'
import Product from './Component/Product'
import Books from './Product/Books'
import Electronic from './Product/Electronic'
import Fashion from './Product/Fashion'
import Kitchen from './Product/Kitchen'
import User from './Component/User'
import Userdetail from './Component/Userdetail'

function App() {
  
const navigate = useNavigate();
// const navigateto =(url)=>{
//   navigate(url);
// }
const navigateconditionally=() => {
let name ="service1"
if (name === "service1") {
  navigate("/services")
} else if (name==="About1") {
  navigate("/about")
} else if (name==="contact1") {
  navigate("/contact")
}

}
  return (
    <>
   <Navigation/>
   <button type='button' className='btn btn-primary' onClick={navigateconditionally} >Navigaticondition</button>
     
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/about" element={<About/>} ></Route>
      <Route path="/services" element={<Services/>} ></Route>
      <Route path="/contact" element={<Contact/>} ></Route>
      <Route path="/product" element={<Product/>} >
      <Route index element={<Electronic/>}></Route>
        <Route path="books" element={<Books/>}></Route>
        <Route path="electronic" element={<Electronic/>}></Route>
        <Route path="fashion" element={<Fashion/>}></Route>
        <Route path="kitchen" element={<Kitchen/>}></Route>
      </Route>
      <Route path="/users" element={<User/>} ></Route>
        <Route path="/user/:userId" element={<Userdetail/> } ></Route>
      
      <Route path="*" element={<Errorpage/>} ></Route>
        
      </Routes>
      {/* <button type='button' className='btn btn-primary' onClick={()=>navigateto("/services")} >services</button> */}


      {/* <button type='button' className='btn btn-primary' onClick={()=>navigateto("/services")} >services</button>
      <button type='button' className='btn btn-primary' onClick={()=>navigateto("/services")} >services</button> */}
</>
  )
}

export default App

