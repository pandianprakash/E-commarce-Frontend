import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MemberForm({ member, onClose, setshowAddForm, onAddMember }) {
  //console.log(member);
  var [memberdata,setMemberdata]=useState([]);
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    dateofjoining: "",
    role: "",
    designation: "",
    address: "" 
  });
 
  //get method give the member data 
  const getMemberById = async (e) => {   
    try {
      const result = await axios.get(`http://localhost:4000/member/getMemberById/${member}`);
      setMemberdata(result.data);
      setFormData({name: memberdata.name,
      email: memberdata.email,
      phone: memberdata.phone,
      password: memberdata.password,
      dateofjoining: memberdata.dateofjoining,
      role: memberdata.role,
      designation: memberdata.designation,
      address: memberdata.address 

    });
          console.log(result.data);
    } catch (error) {
      console.log("error", error);
    }
  }
  
  //using get data from getmeberID
  useEffect(() => {
    if(member){
    getMemberById() }
  },[]);
    
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {   
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:4000/member/createMember/addnew", formdata);
      console.log(result);
     onClose(); 
    } catch (error) {
      console.log("error", error);
  
    }
  };

  const handleUpdate = async (e) => {   
    e.preventDefault();
    try {
      const result = await axios.put(`http://localhost:4000/member/updateMember/${member}`, formdata);
      console.log(result);
    } catch (error) {
      console.log("error", error);
    }
  };


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 overflow-y-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full ">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 ">
          {member ? 'Edit Member' : 'Add New Member'}
        </h2>
        <form  onSubmit={member ? handleUpdate : handleSubmit}>
          <div className="mb-4 ">
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formdata.name}
              onChange={handleChange}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formdata.email}
              onChange={handleChange}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter email"
            />
          </div>

          {/* Phone Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formdata.phone}
              onChange={handleChange}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter phone number"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formdata.password}
              onChange={handleChange}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter password"
            />
          </div>

          {/* Date of Joining Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Date of Joining</label>
            <input
              type="date"
              id="dateofjoining"
              name="dateofjoining"
              value={formdata.dateofjoining}
              onChange={handleChange}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Role Dropdown */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <select
              id="role"
              name="role"
              value={formdata.role}
              onChange={handleChange}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select role</option>
              <option value="Admin">Admin</option>
              <option value="Superadmin">Superadmin</option>
            </select>
          </div>

          {/* Designation Dropdown */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
            <select
              id="designation"
              name="designation"
              value={formdata.designation}
              onChange={handleChange}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select designation</option>
              <option value="sales">Sales</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>

          {/* Address Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formdata.address}
              onChange={handleChange}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter address"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {member ? 'Update Member' : 'Add Member'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MemberForm;
