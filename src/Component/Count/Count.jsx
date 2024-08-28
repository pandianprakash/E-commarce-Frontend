import React from "react";

function Count() {
  return (
    <div>
      <div class="absolute w-[189px] h-[100px] left-[300px] top-[92px] bg-[#FFEEF1]">
        <box-icon name="user" class="size-6 mr-24 mt-2"></box-icon>
        <p class="pr-24 ">125</p>
        <p class="pr-5">Total Empolyee</p>
      </div>

      <div class="absolute w-[189px] h-[100px] left-[520px] top-[92px] bg-[#D8FAE7]">
        <box-icon name="spreadsheet" class="size-6 mr-24 mt-2"></box-icon>
        <p class="pr-24 ">2500</p>
        <p class="pr-11">Total Product</p>
      </div>

      <div class="absolute w-[189px] h-[100px] left-[740px] top-[92px] bg-[#FFF2DC]">
        <box-icon name="objects-horizontal-right" class="size-6 mr-24 mt-2"></box-icon>
        <p class="pr-24">5045</p>
        <p class="pr-14">Total Order</p>
      </div>

      <div class="absolute w-[189px] h-[100px] left-[960px] top-[92px] bg-[#DCFBFF]">
        <box-icon type='solid' name="user-detail" class="size-6 mr-24 mt-2"></box-icon>
        <p class="pr-24 ">2355</p>
        <p class="pr-7">Total Customer</p>
      </div>

    </div>

);
}
export default Count;
