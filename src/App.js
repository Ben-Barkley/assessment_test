import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CreatePlan from './Components/CreatePlan/CreatePlan';
import Contact from './Components/Contact.js/Contact';
import Product from './Components/Product/Product';
import food1 from './images/food1.jpg'
import food2 from './images/food2.jpg'
import food3 from './images/food3.jpg'
import food4 from './images/food4.jpg'
import food5 from './images/food5.jpg'
import food6 from './images/food6.jpg'
import ProductDetails from './Components/Product/ProductDetails';
import Footer from './Components/Footer/Footer';

function App() {

  const foods = [
    {id: 1, foodname: 'food1', image: food1, price: '$8' },
    {id:2, foodname: 'food2', image:food2, price: '$7'},
    {id:2, foodname: 'food3', image:food3, price: '$9'},
    {id:4, foodname: 'food4', image:food4, price: '$7'},
    {id:5, foodname: 'food5', image:food5, price: '$6'},
    {id:6, foodname: 'food6', image:food6, price: '$4'}

  ]

  return (
    
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
      <Route path="/" element={<Home foods={foods} />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/product" element={<Product foods={foods} />}/>
      <Route path="/product/:name/:price" element={<ProductDetails foods={foods} />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/createplan" element={< CreatePlan />}/>

      
      </Routes>
      
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
