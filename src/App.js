import React from 'react';
import {BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Service from './Components/Service';
import Add from './Add';
import Nav from './Nav';
import ShowProduct from './ShowProduct';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
function App() {
  return (
      
   <React.Fragment>
    <div className='container'>
      <div className='row'>
        <div className='col-sm-12'>
        <BrowserRouter>
    <Nav/>
    <Routes>
      <Route exact path='/' element={<Home/>}/> 
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/service' element={<Service/>}/>
      <Route exact path='/addproduct' element={ <Add/>}/>
      <Route exact path='/showproduct' element={ <ShowProduct/>}/>
    </Routes>
    </BrowserRouter>
        </div>
      </div>
    </div>
   </React.Fragment>
   
    
  );
}

export default App;
