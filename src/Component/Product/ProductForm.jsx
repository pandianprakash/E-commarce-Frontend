import React, { useEffect, useState } from 'react';
import { storage } from '../../firebase';
import axios from 'axios';

const ProductForm = ({product,onClose}) => {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    var [productdata,setProductdata]=useState([]);
    const [formData, setFormData] = useState(
        {
        name: "",
        price: "",
        discount: "",
        description: "",
        image: "",
        stock_quantity: "",
        color: "",
        size: "",       
        category: "",
        rating: "",
});
//get the data for the product
    const getProductId = async (id) => {
        try{
        const result = await axios.get(`http://localhost:4000/products/viewById/${product.id}`)
        setProductdata(result.data);
        setFormData({
            name: productdata.name,
            price: productdata.price,
            discount: productdata.discount,
            description: productdata.description,
            image: productdata.image,
            stock_quantity: productdata.stock_quantity,
            color: productdata.color,
            size: productdata.size,
            category: productdata.category,
            rating: productdata.rating,
        }) 
        console.log(result);}
        catch(err){
        console.log("error", err)}
         }

//get product reload the id
useEffect(() => {
    if (product) {
        getProductId(); 
    }
}, []); 

        const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    //addnew for new product 
    const handleSubmit = async (e) => {   
        e.preventDefault();
        try {
          const result = await axios.post("http://localhost:4000/products/addNew", formData);
          console.log(result);
         onClose(); 
        } catch (error) {
          console.log("error", error);
      
        }
    }

    const handleUpdate = async (e) =>{
         if (!product) {
        e.preventDefault();
        try{
        const result = await axios.put(`http://localhost:4000/products/updateById/${product.id}`,formData);
        console.log(result);
       } 
    catch(err){
        console.log("error", err);
        
    }
    }}

    const uploadImage = async () => {
            if (image == null) return;
            storage
              .ref(`/${image.name}`)
              .put(image)
              .on("state_changed", alert("success"), alert, () => {
                storage
                  .ref(image.name)
                  .getDownloadURL()
                  .then((url) => {
                    setUrl(url);
                  });
              });
    };

    const  handleFileChange = (e) => {
        setImage(e.target.files[0]);
        const imageURL =  uploadImage();
    };

    // var updateProduct =()=>{
    // }

    return (
         <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 ">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg max-h-[80vh] overflow-y-auto">  
            <h2 className="text-3xl font-bold mb-6 text-gray-800" >{product ? 'Edit Product' : 'Add New product'}</h2>
             <form className="space-y-6" onSubmit={product ? handleUpdate : handleSubmit}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                        placeholder="Enter product name"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="stock_quantity" className="block text-sm font-medium text-gray-700">Stock Quantity</label>
                    <input
                        type="number"
                        id="stock_quantity"
                        name="stock_quantity"
                        onChange={handleChange}
                        value={product.stock_quantity}
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                        placeholder="Enter Stock Quantity"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="size" className="block text-sm font-medium text-gray-700">Size</label>
                    <input
                        type="number"
                        id="size"
                        name="size"
                        onChange={handleChange}
                        value={product.size}
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                        placeholder="Enter Size"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        onChange={handleChange}
                        value={product.price}
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                        placeholder="Enter Price"
                        step="0.01"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="color" className="block text-sm font-medium text-gray-700">Color</label>
                    <input
                        type="text"
                        id="color"
                        name="color"
                        onChange={handleChange}
                        value={ product.color}
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                        placeholder="Enter Color"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Product Rating</label>
                    <input
                        type="number"
                        id="rating"
                        onChange={handleChange}
                        value={product.rating}
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                        placeholder="Enter Rating"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="discount" className="block text-sm font-medium text-gray-700">Discount</label>
                    <input
                        type="number"
                        id="discount"
                        name="discount"
                        onChange={handleChange}
                        value={product.discount}
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                        placeholder="Enter Discount"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        onChange={handleChange}
                        value={product.category}
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                        placeholder="Enter Category"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        rows="4"
                        onChange={handleChange}
                        value={product.description}
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                        placeholder="Enter Description"
                        required
                    ></textarea>
                </div>

                <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">Product Image</label>
                    <input
                        type='file'
                        name="image"
                        value={product.image}
                        onChange={handleFileChange}
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm"
                    />
                </div>

                <button
                    className="py-4 px-4 bg-indigo-600 text-white font-bold rounded-lg shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"   
              >  {product ? 'Update product' : 'Add product'}
                </button>
                
                <button
              type="button"
              onClick={onClose}
              className="py-4 px-4 bg-red-400 text-white ml-6 font-bold rounded-lg shadow-sm hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Cancel
            </button>
            </form>
</div>
        </div>
    );
};

export default ProductForm;
