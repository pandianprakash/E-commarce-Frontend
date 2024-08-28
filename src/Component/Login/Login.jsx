import React from "react";
import "./Login.css";
import background from "../../image/background.jpg";

function login() {
  return (
    <div>
      <div class=" flex w-6/12 ml-80 mr-100 w-md pt-10 pb-10 pl-10 mt-20 bg-white shadow-md rounded">
        <img src={background} alt="background.jpg" class="" />
        <div>
          <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
          <form class="ml-20">
            <div class="mb-4 ">
              <label for="email" class=" block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                class=" p-3 border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div class="mb-6">
              <label for="password" class="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                class=" p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              class="w-48 py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
            <p class="mt-4 text-center text-gray-600">
              Don't have an account?{" "}
              <a href="#" class="text-blue-500 hover:underline">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default login;
