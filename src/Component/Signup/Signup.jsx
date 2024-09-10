import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Back from "../Assets/Back.jpg";

function Signup() {
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    phone: "",
    password: "",
    address1: "",
    address2: "",
    district: "",
    state: "",
    country: "",
    pincode: "",
  });
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleCheckboxChange = () => {
    setAcceptedTerms(!acceptedTerms);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (Object.values(formData).some(field => field === "") || !acceptedTerms) {
      alert("Please fill out all fields and accept the terms and conditions.");
      return;
    }

    // Submit form data (e.g., send to server)
    // For now, just navigate to the dashboard
    navigate("/Dashboard");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row w-full ml-60 mb-20  max-w-4xl mt-7 p-6 bg-white shadow-lg rounded-lg">
        {/* Image Section */}
        <div className="flex-shrink-0 w-full md:w-1/2 p-4 flex items-center justify-center">
          <img src={Back} alt="Back" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Form Section */}
        <div className="flex flex-col w-full md:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-4 text-center">Register</h2>
          <p className="mb-6 text-gray-600 text-center">Create Your Account</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                id="firstname"
                placeholder="First Name"
                value={formData.firstname}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-md"
                required
              />
              <input
                type="email"
                id="email"
                placeholder="E-mail ID"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-md"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                id="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-md"
                required
              />
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-md"
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                id="address1"
                placeholder="Address Line 1"
                value={formData.address1}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-md"
                required
              />
              <input
                type="text"
                id="address2"
                placeholder="Address Line 2"
                value={formData.address2}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-md"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                id="district"
                placeholder="District"
                value={formData.district}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-md"
                required
              />
              <input
                type="text"
                id="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-md"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                id="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-md"
                required
              />
              <input
                type="text"
                id="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-md"
                required
              />
            </div>

            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="terms"
                checked={acceptedTerms}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label htmlFor="terms" className="text-gray-600">
                I Accept the{" "}
                <a href="#" className="text-purple-500 font-semibold">Terms of Use</a> &{" "}
                <a href="#" className="text-purple-500 font-semibold">Privacy Policy</a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600"
            >
              Register Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
