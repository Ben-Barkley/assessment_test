import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home';



import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CreatePlan from './Components/CreatePlan/CreatePlan';




function App() {

  
  


  return (
    
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
      <Route path="/" element={<Home  />}/>

      <Route path="/createplan" element={< CreatePlan />}/>
    
      </Routes>
      
     </BrowserRouter>
   
    </div>
  );
}

export default App;
