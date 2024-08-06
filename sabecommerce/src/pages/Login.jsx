// frontend/src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', formData);
            console.log(response.data);
            localStorage.setItem("token", data.data.token)
            setUser(data.data.user)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit } className='form'>
        <p class="title">Login </p>
        <p class="message">Login now and get full access to our app. </p>
<label>
<span>Username/Email</span>

            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
            <span>Password</span>

            <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </label>
            <button type="submit">Log In</button>
            <p class="signin"> Don't have an account?
            <Link to="/Signup">
            Signup
          </Link>
          </p>
        
        </form>
    );
};

export default Login;
