import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import Allbrands from './components/Allbrands';
import Discountproducts from './components/Discountproducts';
import Cartpage from './components/Cartpage';
import Allsellers from './components/Allsellers';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';






function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="allbrands" element={<Allbrands/>} />
        <Route path="discountproducts" element={<Discountproducts />} />
        <Route path="allsellers" element={<Allsellers/>} />
        <Route exact path="Cartpage" element={<Cartpage/>} />
        <Route exact path="login" element={<Login/>} />
        <Route exact path="signup" element={<Signup/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
    </>

  );
}

export default App;
