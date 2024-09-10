import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import Login from "./Component/Login/Login.jsx";
import Signup from "./Component/Signup/Signup.jsx";
import Dashboard from "./Component/Dashboard/Dashboard.jsx";
import Navbar from "./Component/Navbar/Navbar.jsx";
import Count from "./Component/Count/Count.jsx";
import Product from "./Component/Product/Product.jsx"
import Sidenavbar from "./Component/Sidenavbar/Sidenavbar.jsx";
import Order from "./Component/Order/Order.jsx";
import Member from "./Component/Member/Member.jsx"
import Payment from "./Component/Payment/Payment.jsx"
import Fileupload from "./Component/Fileupload.jsx";




function App() {  
  return (
    <div className="App">
      <Sidenavbar/>
      <Navbar /> 
      {/* <Fileupload/> */}
      <Routes>
      <Route path="/" element={<Login />} /> 
      <Route path="/Count" element={<Count />}/> 
      <Route path="/Login" element={<Login />} />   
      <Route path="/Signup" element={<Signup />} /> 
      <Route path="/Signup" element={<Dashboard />} /> 
      <Route path="/Dashboard" element={<Count />}/> 
      <Route path="/Product" element={<Product />} /> 
      <Route path="/Order" element={<Order />} /> 
      <Route path="/Member" element={<Member />} /> 
      <Route path="/Payment" element={<Payment />} /> 
      </Routes>

      {/* <header className="App-header"></header> */}
      {/* <Login /> */}
      {/* <Sigup /> */}{/* <Barchart />*/}
      {/* <Productadd /> */}
      
    </div>
  );
}



export default App;
