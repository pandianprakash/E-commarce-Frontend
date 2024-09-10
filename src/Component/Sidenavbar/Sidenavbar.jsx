import React from "react";
import Assets from "../Assets/logo (1).png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Sidenavbar(){
    const navigate = useNavigate();

    return(
      <div>
      <div class="text-gray-800 font-inter">
      <div class="fixed left-0 top-0 w-64 h-full bg-gray-100 p-4">
        <div class="flex pb-4 border-b border-b-gray-300">
          <img src={Assets} alt="logo-1" class="w-14" />
          <span class="text-lg ml-2 font-bold text-black">EMPIRE GOLD</span>
          </div>
          <ul class="mt-4">
            <li class="mb-2 group active">
              <a href="#" class="flex items-center py-2 px-4 text-black hover:bg-gray rmd group-[.active]:bg-gray-200 group-[.active]:text-black">
                <box-icon type="solid" name="dashboard"></box-icon>
                <span class="text-5m p-2" onClick={() => navigate("/Dashboard")}>Dashboard</span></a>
            </li>
                           
              <ul class="mt-7 mb-2">
      <nav className="space-y-2">
        {/* Product Dropdown */}
        <li className="mb-1">
        <a href="#" class="flex items-center py-2 px-4 text-black hover:bg-white rounded-md">
                <box-icon name="package"></box-icon>
                <span class="text-5m p-2" onClick={() => navigate("/Product")} >Product</span></a>
        </li>
      </nav>
              </ul>
            <li class="mb-2 ">
              <a href="#" class="flex items-center py-2 px-4 text-black hover:bg-white rounded-md">
                <box-icon name="cart" class="size-5"></box-icon>
                <span class="text-5m p-2"onClick={() => navigate("/Order")}>Order</span></a>
            </li>

            <li class="mb-2 ">
              <a href="#" class="flex items-center py-2 px-4 text-black hover:bg-white rounded-md">
                <box-icon name="group"></box-icon>
                <span class="text-5m p-2" onClick={() => navigate("/Member")}>Member</span></a>
            </li>

            <li class="mb-2 ">
              <a href="#"class="flex items-center py-2 px-4 text-black hover:bg-white rounded-md">
                <box-icon name="credit-card"></box-icon>
                <span class="text-5m p-2" onClick={() => navigate("/Payment")}>Payment</span></a>
            </li>
          </ul>
        </div>
      </div>
        </div>
    )
}

export default Sidenavbar;