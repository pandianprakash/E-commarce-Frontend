import React from 'react';
import { useNavigate } from 'react-router-dom'; // If you want to navigate from the sidebar

const orders = [
  { id: '#585959', product: 'Earing', address: 'No.5,Perston,Ingle', date: '09.04.2023', price: '$250.00', status: 'Complete' },
  { id: '#583566', product: 'Bangle', address: 'No.32,Royal,mesa', date: '21.03.2023', price: '$350.00', status: 'Canceled' },
  { id: '#587753', product: 'Nackles', address: 'No.41,Grey,Utica', date: '03.04.2023', price: '$560.00', status: 'Pending' },
  { id: '#586683', product: 'Ring', address: 'No.95,Elgin,Colina', date: '31.07.2023', price: '$130.00', status: 'Canceled' },
  { id: '#584333', product: 'Chain', address: 'No.78,Parker,Utica', date: '18.10.2023', price: '$300.00', status: 'Complete' },
  { id: '#587654', product: 'Breslet', address: 'No.67,Rancey,Colina', date: '17.08.2023', price: '$200.00', status: 'Pending' },
];

const statusColors = {
  Complete: 'bg-green-500',
  Canceled: 'bg-red-500',
  Pending: 'bg-yellow-500',
};

function Order() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-1/5 bg-white border-gray-200">
        <div className="text-xl font-semibold text-black mb-4"></div>
        <nav className="space-y-2">

          {/* Add more sidebar items as needed */}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="bg-white border-b pl-5 border-gray-200 p-4 flex items-center justify-between">
          <div className="flex-5 flex items-center space-x-8">
            <div className="w-[125px] text-black font-medium text-md">Orders</div>
            <div className="w-[129px] text-black font-medium text-md">Product</div>
            <div className="w-[129px] text-black font-medium text-md">Address</div>
            <div className="w-[129px] text-black font-medium text-md">Date</div>
            <div className="w-[129px] text-black font-medium text-md">Price</div>
            <div className="w-[129px] text-black font-medium text-md">Status</div>
        </div>
          <div className="flex space-x-7">
            <button className="bg-gray-100 px-4 py-2 text-black font-medium rounded-md shadow-md flex items-center">
              <box-icon name="filter" className="text-base"></box-icon>
              <span className="ml-2">Filter</span>
            </button>
           
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-2 p-4 bg-white">
          <div className="bg-white space-y-5 border-b border-gray-200 p-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="grid grid-cols-6 gap-2 p-5 mb-2 bg-white border rounded-md shadow-md hover:bg-gray-100 transition duration-300"
              >
                <div className="text-black mr-16">{order.id}</div>
                <div className="text-black mr-32">{order.product}</div>
                <div className="text-black mr-36">{order.address}</div>
                <div className="text-black mr-36">{order.date}</div>
                <div className="text-black mr-32">{order.price}</div>
                <div className={`text-white font-medium rounded-full px-2 py-1 ${statusColors[order.status]}`}>
                  {order.status}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Order;
