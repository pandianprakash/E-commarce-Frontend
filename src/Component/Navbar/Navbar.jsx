import React from "react";
import { useNavigate } from "react-router-dom";
import "boxicons";

function Navbar() {
  var navigate = useNavigate();
  return (
    <div>
      <nav class="bg-white border-gray-200 px-4 bg-white text-gray-800 shadow-md lg:px-6 py-2.5 dark:bg-gray-500">
        <div class="flex flex-wrap justify-between items-center ">
          <div class="flex justify-start items-center ">
            <form action="#" class="hidden lg:block lg:pl-80">
              <label for="topbar-search" class="sr-only"> Search</label>

              <div class="relative mt-1 lg:w-96">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400"aria-hidden="true"xmlns="http://www.w3.org/2000/svg"fill="none"viewBox="0 0 20 20">
                    <path stroke="currentColor"stroke-linecap="round" stroke-linejoin="round" stroke-width="2"d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                </div>
                <input type="text" name="email" id="topbar-search" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full pl-9 p-2.5 dark:bg-gray-700 "placeholder="Search"/>
              </div>
            </form>
          </div>

          {/* <!-- Search icon --> */}
          <div class="flex items-center lg:order-2">
            {/* <!-- Notifications --> */}
            <button type="button" class="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100">
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"viewBox="0 0 14 20">
                <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z" />
              </svg>
            </button>

            <button onClick={() => navigate("/Login")} type="button" class="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-2">
              <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"alt="user photo"/>
            </button> 
         </div>

        </div>
      </nav>
    </div>
  );
}
export default Navbar;
