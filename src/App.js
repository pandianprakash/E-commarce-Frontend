import "./App.css";
import { Route, Routes } from "react-router-dom";
// import Login from "./Component/Login/Login.jsx";
// import Sigup from "./Component/Signup/Sigup.jsx";
import Dashboard from "./Component/Dashboard/Dashboard.jsx";
import Navbar from "./Component/Navbar/Navbar.jsx";
import Count from "./Component/Count/Count.jsx";
// import Graph from "./Component/Graph/Graph.jsx"
import Product from "./Component/Product/Product.jsx"
import Productadd from "./Component/Product/Productadd.jsx";
import Sidenavbar from "./Component/Sidenavbar/Sidenavbar.jsx";
import Order from "./Component/Order/Order.jsx";
import Member from "./Component/Member/Member.jsx"
import Payment from "./Component/Payment/Payment.jsx"
import Barchart from "./Component/Barchart/Barchart.jsx";

function App() {
  return (
    <div className="App">
      <Sidenavbar/>
      <Navbar /> 
      <Routes>
      <Route path="/" element={<Count />} /> 
      <Route path="/" element={<Barchart />} /> 
      <Route path="/Dashboard" element={<Barchart />} /> 
     <Route path="/Dashboard" element={<Count />}/> 
      <Route path="/Product" element={<Product />} /> 
      <Route path="/Productadd" element={<Productadd />} /> 
      <Route path="/Order" element={<Order />} /> 
      <Route path="/Member" element={<Member />} /> 
      <Route path="/Payment" element={<Payment />} /> 

      </Routes>

      {/* <header className="App-header"></header> */}
      {/* <Login /> */}
      {/* <Sigup /> */}
{/* <Barchart />      
 */}
   
      {/* <Productadd /> */}
    </div>
  );
}



export default App;
