import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../Assets/background.jpg";
import axios from "axios";

function Login() {
  var [userData, setUserData] = useState([])
  const [formData, setFormData] = useState({
    email: "ram1@gmail.com",
    password: "12345"
  });

  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/login/login", formData);
      console.log(response.data.data);
      if (response.data) {
        // console.log("Login response:", response.data);
        setIsLogin(true);
        navigate("/Dashboard");
        window.alert("login sucessfully");
      } else {
        // console.error("Login failed:", response.data);
        setIsLogin(false);
        window.alert("Username or password incorrect.");
      }
      console.log("Login response:", response.data);
    } 
    catch (error) {
    console.error("Error logging in:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row w-200 ml-8 mb-20 max-w-6xl p-10 bg-white shadow-lg rounded-lg">
        <div className="md:w-1/2 flex items-center justify-center">
          <img
            src={background}
            alt="background"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center p-8">
          <h2 className="text-4xl font-bold mb-6 text-center">Login</h2>
          <form  onClick={ handleSubmit } className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700 text-sm font-medium">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
             >{isLogin ? "Login" : "login"}
            </button>
            <p className="mt-4 text-center text-gray-600">
              Don't have an account?
              <button
                onClick={() => navigate("/signup")}
                className="text-blue-500 hover:underline"
              >
                Sign up
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
