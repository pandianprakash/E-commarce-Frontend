import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from "../Product/ProductForm"


function Product() {
  const [productdata, setProductdata] = useState([]);
  const [editingProduct,setEditingProduct]=useState(null)
  const [showForm, setShowForm] = useState(false);

  const showAddForm = (product=null) => { 
    setEditingProduct(product)
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  }

  //on load function
  useEffect(() => {
    getuserdata();
  }, []);

  //to get all product details to display in table view
    var getuserdata = async() => { 
    try {
      const response = await axios.get("http://localhost:4000/products/view");
       setProductdata(response.data)
      // console.log(response.data); 
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  //to delete  product details to from table view
  const  handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:4000/products/deleteById/${id}`);    
      console.log(response);
      getuserdata();
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div>
  <div className="flex min-h-screen mt-2 bg-gray-50">
    <div className="w-1/5 bg-white  border-gray-200 ">
    </div>
    {/* /* Main Content */} 
    <div className="flex-1 bg-white">
      {/* Top Navbar */}
      <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
        {/* Header Columns */}
        <div className="flex flex-1 space-x-4">
          <div className="w-[80px] text-black font-medium text-md">Product</div>
          <div className="w-[180px] text-black font-medium text-md">Product Name</div>
          <div className="w-[90px] text-black font-medium text-md">Price</div>
          <div className="w-[200px] text-black font-medium text-md">Stock quantity</div>
          <div className="w-[100px] text-black font-medium text-md">Actions</div>
        </div>
        {/* Buttons */}
        <div className="flex space-x-4 ml-auto">
          <button className="bg-gray-100 px-4 py-2 text-black font-medium rounded-md shadow-md flex items-center">
            <box-icon name='filter'></box-icon>
            <span className="ml-2">Filter</span>
          </button>
          <button
            className="bg-gray-100 px-4 py-2 text-black font-medium rounded-md shadow-md flex items-center"
            onClick={showAddForm}
          >
            <box-icon name='add-to-queue'></box-icon>
            <span className="ml-2" >Add Product</span>
          </button>
        </div>
      </div>
   
          {/* Table Content */}
          <div className="w-full space-y-4">
            {productdata.map((product) => (
              <div key={product.id}
                className="flex items-center bg-white p-4 m-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
                
                <div className="w-20 h-20">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <div className="w-1/5 text-black font-medium text-md ml-4">{product.name}</div>
                <div className="w-1/5 text-black font-medium text-md">{product.price}</div>
               <div className="w-1/5 text-black font-medium text-md">{product.stock_quantity}</div>
                <div className="flex space-x-4 ml-auto">
                  <button className="bg-green-500 px-4 py-2 text-white font-medium rounded-full flex items-center"  onClick={showAddForm} value={product._id}>
                    <box-icon name='edit'></box-icon>
                    <span className="ml-2">Edit</span>
                  </button>

                  <button
                    className="bg-red-500 px-4 py-2 text-white font-medium rounded-full flex items-center" onClick={() => handleDelete(product._id)}>
                    <box-icon name='trash'></box-icon><span className="ml-2">Delete</span>
                    </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
          <ProductForm
            onClose={handleCloseForm}
            product={editingProduct}
          />
        </div>
      )}
    </div>
  );
}

export default Product;
