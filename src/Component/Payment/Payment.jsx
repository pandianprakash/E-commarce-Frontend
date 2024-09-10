import React, { useState } from "react";
import axios from "axios";
import PaymentForm from "../Payment/PaymentForm";

const initialPayments = [
  { id: '#859231', name: 'Elisha', email: 'Elisha12@gmail.com', type: 'Bill', status: 'Received' },
  { id: '#895474', name: 'Jasmine', email: 'Jasmine4@gmail.com', type: 'Card', status: 'Pending' },
  { id: '#857456', name: 'Hazel', email: 'Hazel754@gmail.com', type: 'Bill', status: 'On Progress' },
  { id: '#855629', name: 'Sophia', email: 'Sophia32@gmail.com', type: 'Card', status: 'Received' },
  { id: '#859125', name: 'Luna', email: 'Luna98@gmail.com', type: 'Bill', status: 'Pending' },
  { id: '#852749', name: 'Helena', email: 'Helena31@gmail.com', type: 'Card', status: 'On Progress' },
];

function Payment() {
  const [payments, setPayments] = useState(initialPayments);
  const [editingPayment, setEditingPayment] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [userRole, setUserRole] = useState('admin'); // or 'user', etc.

  const handleAdd = async (newPayment) => {
    try {
      const response = await axios.post("http://localhost:4000/payment/createPayment/addnew", newPayment);
      setPayments(prevPayments => [...prevPayments, response.data]);
      setShowAddForm(false); // Close form after adding
    } catch (error) {
      console.error("Error adding new payment:", error);
    }
  };

  const handleEdit = (payment) => {
    setEditingPayment(payment);
    setShowAddForm(true); // Show form in edit mode
  };

  const handleUpdate = async (updatedPayment) => {
    try {
      await axios.put(`http://localhost:4000/payment/updatePayment/${updatedPayment.id}`, updatedPayment);
      setPayments(prevPayments =>
        prevPayments.map(payment =>
          payment.id === updatedPayment.id ? updatedPayment : payment
        )
      );
      setEditingPayment(null); // Close form after update
    } catch (error) {
      console.error("Error updating payment:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/payment/deletePayment/${id}`);
      setPayments(prevPayments => prevPayments.filter(payment => payment.id !== id));
    } catch (error) {
      console.error("Error deleting payment:", error);
    }
  };

  const handleCloseForm = () => {
    setEditingPayment(null);
    setShowAddForm(false);
  };

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
            <div className="w-[75px] text-black font-medium text-md">Invoice ID</div>
            <div className="w-[150px] text-black font-medium text-md">Name</div>
            <div className="w-[160px] text-black font-medium text-md">Email ID</div>
            <div className="w-[155px] text-black font-medium text-md">Purchase Type</div>
            <div className="w-[165px] text-black font-medium text-md">Status</div>
          </div>
          {userRole === 'admin' && ( // Conditional rendering based on userRole
            <button 
              className="bg-gray-100 px-4 py-2 text-black font-medium rounded-md shadow-md flex items-center"
              onClick={() => {
                setEditingPayment(null); // Ensure the form is in add mode
                setShowAddForm(true);
              }}
            >
              <box-icon name="plus" className="text-base"></box-icon>
              <span className="ml-2">Add Payment</span>
            </button>
          )}
        </header>

        <main className="flex-1 p-4 bg-white">
          <div className="space-y-4">
            {payments.length > 0 ? (
              payments.map((payment) => (
                <div key={payment.id}
                  className="flex items-center p-4 mb-2 bg-white border rounded-md shadow-md hover:bg-gray-100 transition duration-300">
                  <div className="w-[75px] text-black">{payment.id}</div>
                  <div className="w-[150px] text-black">{payment.name}</div>
                  <div className="w-[160px] text-black">{payment.email}</div>
                  <div className="w-[155px] text-black">{payment.type}</div>
                  <div className="w-[165px] flex justify-center">
                    <button
                      className={`w-full px-4 py-2 text-white font-medium rounded-md ${
                        payment.status === 'Received' ? 'bg-green-500' :
                        payment.status === 'Pending' ? 'bg-yellow-400' :
                        'bg-blue-500'
                      }`}
                    >
                      {payment.status}
                    </button>
                  </div>
                  {userRole === 'admin' && ( // Conditional rendering based on userRole
                    <div className="w-[140px] flex items-center justify-end space-x-4">
                
                     
</div>
                  )}
                </div>
              ))
            ) : (
              <div>No payments found</div>
            )}
          </div>
        </main>
      </div>

      {(editingPayment || showAddForm) && (
        <PaymentForm
          payment={editingPayment}
          onClose={handleCloseForm}
          onUpdate={handleUpdate}
          onAdd={handleAdd}
        />
      )}
    </div>
  );
}

export default Payment;
