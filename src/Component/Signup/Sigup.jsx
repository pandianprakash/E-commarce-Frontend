import React from "react";
import Back from "../../image/Back.jpg";

function Sigup() {
  return (
    <div>
      <div class="flex w-8/12 p-2  mt-8  bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
        <div class="w-1/2">
          {/* <h1 class="text ">welcome</h1> */}
          <img src={Back} alt="Back.jpg" width="" class="ml-5 mt-16" />
        </div>

        <div class="w-1/2 py-1 px-12">
          <h2 class="text-3xl  mb-2">Register</h2>
          <p class="mb-4">Create Your Account</p>

          <form action="#">
            <div class="grid grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Fristname"
                class="border border-gray-400 bg-red py-1  px-2"
              ></input>
              <input
                type="text"
                placeholder="E-mail ID"
                class="border border-gray-400 py-1 px-2"
              ></input>
            </div>

            <div class="grid grid-cols-2 gap-5 mt-5">
              <input
                type="text"
                placeholder="Phone"
                class="border border-gray-400 py-1 px-2"
              ></input>
              <input
                type="password"
                placeholder="Password"
                class="border border-gray-400 py-1 px-2"
              ></input>
            </div>

            <div class="mt-5">
              <input
                type="text"
                placeholder="Address-1"
                class="border border-gray-400 py-1 px-16"
              ></input>
            </div>

            <div class="mt-5">
              <input
                type="text"
                placeholder="Address-2"
                class="border border-gray-400 py-1 px-16"
              ></input>
            </div>

            <div class="grid grid-cols-2 gap-5 mt-5">
              <input
                type="text"
                placeholder="District"
                class="border border-gray-400 py-1 px-2"
              ></input>
              <input
                type="text"
                placeholder="State"
                class="border border-gray-400 py-1 px-2"
              ></input>
            </div>

            <div class="grid grid-cols-2 gap-5 mb-2 mt-5">
              <input
                type="text"
                placeholder="Country"
                class="border border-gray-400  py-1 px-2"
              ></input>
              <input
                type="text"
                placeholder="Pincode"
                class="border border-gray-400  py-1 px-2"
              ></input>
            </div>
          </form>

          <div class="mt-5">
            <input type="checkbox" class="border border-gray-400"></input>
            <span>
              I Accept the
              <a href="#" class="text-purple-500 font-semibold">
                Terms of use
              </a>{" "}
              &
              <a href="#" class="text-purple-500 font-semibold">
                {" "}
                Privacy policy
              </a>
            </span>
          </div>

          <div class="mt-5">
            <button class="w-full mb-4 bg-purple-500 py-3  text-center text-white">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sigup;
