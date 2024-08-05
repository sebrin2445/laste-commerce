// src/components/UploadProduct.jsx
import React, { useState } from 'react';
import axios from 'axios';

const UploadProduct = () => {
  const [productData, setProductData] = useState({
    name: '',
    category: '',
    price: 0,
    description: '',
  });

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/products', productData);
      alert('Product uploaded successfully');
    } catch (error) {
      console.error('Error uploading product:', error);
      alert('Failed to upload product');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={productData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Category:</label>
        <input type="text" name="category" value={productData.category} onChange={handleChange} required />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" name="price" value={productData.price} onChange={handleChange} required />
      </div>
      <div>
        <label>Description:</label>
        <textarea name="description" value={productData.description} onChange={handleChange} required />
      </div>
      <button type="submit">Upload Product</button>
    </form>
  );
};

export default UploadProduct;
