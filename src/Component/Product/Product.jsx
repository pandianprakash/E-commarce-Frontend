import React from "react";
import assets from "../Assets/earing.jpg";
import Assets from "../Assets/bang.png";
import sets from "../Assets/nack.jpg"
import asets from "../Assets/ring.png"
import Sets from "../Assets/chain.webp"
import nets from "../Assets/baracelet.jpg"

function Product(){
    return(
    <div>

          <div class="absolute w-[1110px] h-[44px] left-[256px] top-[130px] bg-gray-50 border-b border-gray-100"></div>
          <div class="absolute w-[179px] h-[35px] left-[270px] top-[139px] text-black font-normal text-[20px] leading-[19px]">Product</div>
          <div class="absolute w-[179px] h-[35px] left-[450px] top-[139px] text-black font-normal text-[20px] leading-[19px]">Product name</div>
          <div class="absolute w-[179px] h-[35px] left-[630px] top-[139px] text-black font-normal text-[20px] leading-[19px]">Price</div>
          <div class="absolute w-[179px] h-[35px] left-[810px] top-[139px] text-black font-normal text-[20px] leading-[19px]">Sales</div>
          <div class="absolute w-[179px] h-[35px] left-[990px] top-[139px] text-black font-normal text-[20px] leading-[19px]">Status</div>
          <div class="absolute w-[110px] h-[29px] left-[1209px] top-[135px] bg-white" />
          <box-icon name='filter' class=" absolute w-[110px] h-[25px] left-[1180px] top-[138px] leading-[17px] "></box-icon>
          <button class="absolute w-[110px] h-[25px] left-[1220px] top-[138px] text-[18px] leading-[17px] text-[#000000] font-inter">Filter</button>

          {/* <div class="absolute w-[20px] h-[20px] left-[633px] top-[73px] bg-cover"style={{ backgroundImage: 'url(image)' }}/> */}
    
    <div>
      <div class="absolute w-[70px] h-[70px] left-[320px] top-[193px] rounded-full">
      <img src={assets} alt="earing" className="absolute w-100 h-100 top-[10px]" />
      </div>
      {/* Earing */}
      <div class="absolute w-[179px] h-[35px] left-[450px] top-[220px] font-inter text-[20px] leading-[16px] text-[black]">Earing</div>
      <div class="absolute w-[179px] h-[35px] left-[630px] top-[220px] font-inter  text-[20px] leading-[16px] text-[black]">$30,000</div>
      <div class="absolute w-[179px] h-[35px] left-[810px] top-[220px] font-inter text-[20px] leading-[16px] text-[black]">3,000</div>
      <div class="absolute w-[179px] h-[35px] left-[990px] top-[220px] font-inter text-[20px] leading-[16px] text-[#01B008]">In-stack</div>

      <div>     
      <div class="absolute w-[29px] h-[15px] left-[270px] top-[590px] rounded-full"></div>
      <img src={Assets} alt="bang" className="absolute w-10 h-62 left-[330px] top-[275px]" />
      </div> 
      {/* Bangle */}
      <div class="absolute w-[179px] h-[35px] left-[450px] top-[280px] font-inter text-[20px] leading-[16px] text-[black]">Bangle</div>
      <div class="absolute w-[179px] h-[35px] left-[630px] top-[280px] font-inter text-[20px] leading-[16px] text-[black]">$50,000</div>
      <div class="absolute w-[179px] h-[35px] left-[810px] top-[280px] font-inter text-[20px] leading-[16px] text-[black]">2,000</div>
      <div class="absolute w-[179px] h-[35px] left-[990px] top-[280px] font-inter text-[20px] leading-[16px] text-[#FF0202]">Out of stack</div>

      <div>
      <div class="absolute w-[39.89px] h-[35px] left-[270px] top-[340px] rounded-full"></div>
      <img src={sets} alt="nack" className="absolute w-10 h-62 left-[330px] top-[335px]" />
      </div>
      {/* Nackles */}
      <div class="absolute w-[179px] h-[35px] left-[450px] top-[340px] font-normal text-[20px] leading-[16px] text-[black]">Nackles</div>
      <div class="absolute w-[179px] h-[35px] left-[630px] top-[340px] font-normal text-[20px] leading-[16px] text-[black]">$1,00000</div>
      <div class="absolute w-[179px] h-[35px] left-[810px] top-[340px] font-normal text-[20px] leading-[16px] text-[black]">1,000</div>
      <div class="absolute w-[179px] h-[35px] left-[990px] top-[340px] font-normal text-[20px] leading-[16px] text-[#01B008]">In-stack</div>

      <div>
      <div class="absolute w-[35px] h-[35px] left-[270px] top-[400px]  rounded-full"></div>
      <img src={asets} alt="ring" className="absolute w-10 h-62 left-[330px] top-[388px]" /></div>
      {/* Ring */}
      <div class="absolute w-[179px] h-[35px] left-[450px] top-[400px] font-inter text-[20px] leading-[16px] text-[black]">Ring</div>
      <div class="absolute w-[179px] h-[35px] left-[630px] top-[400px] font-inter text-[20px] leading-[16px] text-[black]">$20,000</div>
      <div class="absolute w-[179px] h-[35px] left-[810px] top-[400px] font-inter text-[20px] leading-[16px] text-[black]">5,000</div>
      <div class="absolute w-[179px] h-[35px] left-[990px] top-[400px] font-inter text-[20px] leading-[16px] text-[#01B008]">In-stack</div>

      <div>
      <div class="absolute w-[35px] h-[35px] left-[270px] top-[460px] rounded-full"></div>
      <img src={Sets} alt="chain" className="absolute w-10 h-62 left-[330px] top-[455px]" /></div>
      {/* Chain */}
      <div class="absolute w-[179px] h-[35px] left-[450px] top-[460px] font-inter text-[20px] leading-[16px] text-[black]">Chain</div>
      <div class="absolute w-[179px] h-[35px] left-[630px] top-[460px] font-inter text-[20px] leading-[16px] text-[black]">$80,000</div>
      <div class="absolute w-[179px] h-[35px] left-[810px] top-[460px] font-inter text-[20px] leading-[16px] text-[black]">2,000</div>
      <div class="absolute w-[179px] h-[35px] left-[990px] top-[460px] font-inter text-[20px] leading-[16px] text-[black]">Up-coming</div>

      <div>
      <div className="absolute w-[35px] h-[35px] left-[270px] top-[382px]  rounded-full"></div>
      <img src={nets} alt="baracelet" className="absolute w-10 h-62 left-[330px] top-[510px]" /></div>
      {/* Breslet */}
      <div class="absolute w-[179px] h-[35px] left-[450px] top-[520px] font-inter text-[20px] leading-[16px] text-[black]">Breslet</div>
      <div class="absolute w-[179px] h-[35px] left-[630px] top-[520px] font-inter text-[20px] leading-[16px] text-[black]">$34,000</div>
      <div class="absolute w-[179px] h-[35px] left-[810px] top-[520px] font-inter text-[20px] leading-[16px] text-[black]">1,000</div>
      <div class="absolute w-[179px] h-[35px] left-[990px] top-[520px] font-inter text-[20px] leading-[16px] text-[black]">Up-coming</div>
     
     </div>
       </div>
    )
 }
 export default Product;
 