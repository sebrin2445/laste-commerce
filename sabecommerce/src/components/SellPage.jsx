// src/components/SellPage.jsx
import React, { useState } from "react";
import axios from "axios";
import "./all.css";
import { useQuery } from "@tanstack/react-query";
import "../pages/Signup.css";

const SellPage = () => {
  const [formData, setFormData] = useState({
    category: "",
    location: "",
    price: 0,
    photos: [],
  });

  const { data } = useQuery({
    queryKey: ["catagories"],
    async queryFn() {
      return await axios.get("http://localhost:5000/catagories");
    },
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhotoChange = (e) => {
    setFormData({
      ...formData,
      photos: Array.from(e.target.files),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("category", formData.category);
    data.append("location", formData.location);
    data.append("price", formData.price);
    data.append("name", formData.name);
    data.append("catagory", formData.category);
    // formData.photos.forEach((photo) => {
    data.append("image", formData.photos[0]);
    // });

    try {
      await axios.post("http://localhost:5000/products/new", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      });
      alert("Product posted successfully!");
    } catch (error) {
      console.error("Error posting product:", error);
      alert("Error posting product");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <p className="title"> Post ad</p>
      <div className="center">
        <label>
          {" "}
          <span>Category -</span>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            {data?.data.catagories.map((catgory) => (
              <option value={catgory.id}>{catgory.name}</option>
            ))}
            {/* <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="fashion">vechiles</option>
            <option value="fashion">Property</option>
            <option value="fashion">HealthBeauty</option>
            <option value="fashion">MobilePhones</option> */}
          </select>
        </label>
        <label>
          <span>Name -</span>
          <input type="text" name="name" onChange={handleChange} required />
        </label>

        <label>
          <span>Select Location - </span>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <span>Price -</span>
          <input type="number" name="price" onChange={handleChange} required />
        </label>
        <label>
          <span>Description -</span>
          <input
            type="text"
            name="description"
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <label>
        <span>Add photo - </span>
        <input
          type="file"
          name="photos"
          accept=".jpg,.png"
          multiple
          onChange={handlePhotoChange}
        />
        <small>Supported formats are *.jpg and *.png</small>
      </label>

      <button type="submit">Next</button>
    </form>
  );
};

export default SellPage;
