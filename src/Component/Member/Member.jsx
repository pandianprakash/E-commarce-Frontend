import React, { useState, useEffect } from "react";
import axios from "axios";
import MemberForm from "../Member/MemberForm";

function Member() {
  var [members, setMembers] = useState([]);
  var [memberdata, setMemberdata] = useState([]);
  var [editingMember,setEditingMember] = useState("")
  const [showForm, setShowForm] = useState(false);

  const showAddForm = (e) => { 
    setEditingMember(e.target.value)
    setShowForm(true);
  };
  const handleCloseForm = () => {
    setShowForm(false);
  }

  //load a function
 useEffect(()=>{getMemberdata()},[])

  var getMemberdata = async() =>{    
    try {
      const response = await axios.get("http://localhost:4000/member/getMembers/view");
      setMemberdata(response.data)
      // console.log(response); 
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }
 
  var handleDelete = async(id) => {    
    try {
      const response = await axios.delete(`http://localhost:4000/member/deleteMember/${id}`,memberdata);
      setMembers(response.data)
      console.log(response.data); 
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

 
  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-1/5 bg-white border-gray-200 p-4">
        <nav className="space-y-2">
          {/* Add sidebar items here */}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex flex-grow items-center space-x-4">
            <div className="w-1/6 text-black font-medium text-md">Name</div>
            <div className="w-1/6 pr-5 text-black font-medium text-md">Email ID</div>
            <div className="w-1/6 text-black font-medium text-md">Phone</div>
            <div className="w-1/6 text-black font-medium text-md">D.O.J</div>
            <div className="w-1/6  pr-5 text-black font-medium text-md">Role</div>
            <div className="w-1/6 pr-52 text-black font-medium text-md">Designation</div>
            {/* <div className="w-1/6 text-black font-medium text-md">Address</div> */}
          </div>
          <button 
            className="bg-gray-100 px-4 py-2 text-black font-medium rounded-md shadow-md flex items-center"
            onClick={showAddForm}>
            <box-icon name="plus" className="text-base"></box-icon>
            <span className="ml-2">Add Member</span>
          </button>
        </header>

        <main className="flex-1 p-4 bg-white">
          <div className="space-y-4">
            {memberdata.length > 0 ? (
              memberdata.map((member) => (
                <div key={member.id}
                  className="grid grid-cols-8 gap-11 p-4 mb-2 bg-white border rounded-md shadow-md hover:bg-gray-100 transition duration-300">
                  <div className="text-black">{member.name}</div>
                  <div className=" text-black">{member.email}</div>
                  <div className="pl-5 text-black">{member.phone}</div>
                  <div className="pl-5 text-black">{member.dateofjoining}</div>
                  <div className="text-black">{member.role}</div>
                  <div className="text-black">{member.designation}</div>
                  {/* <div className="text-black">{member.address}</div> */}
                  <div className="flex space-x-4 ml-auto">
                    <button 
                      className="bg-green-500 px-3 py-2 text-white font-medium rounded-full flex items-center"
                      onClick={showAddForm} value={member._id}
                    >
                      <box-icon name='edit'></box-icon>
                      <span className="ml-2" >Edit</span>
                    </button>

                    <button 
                      className="bg-red-500 px-2 py-2 text-white font-medium rounded-full flex items-center"
                      onClick={() => handleDelete(member._id)}
                    >
                      <box-icon name='trash'></box-icon>
                      <span className="ml-2">Delete</span>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div>No members found</div>
            )}
          </div>
        </main>
      </div>

      {showForm && (
        <MemberForm
          onClose={handleCloseForm}
          member={editingMember}
        />
      )}

    </div>
  );
}

export default Member;
