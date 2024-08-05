// Signup.jsx
import React, { useState } from 'react';
import { signUp } from '../api/index.js'; 
import './Signup.css';
import {useNavigate} from "react-router-dom"
import axios from 'axios';
import { useAuth } from '../AuthContext';

const Signup = () => {
  const [form, setForm] = useState({ first_name: '', last_name: '', email: '', password: '', confirmPassword: '' });
  const nav = useNavigate()
  const {user, setUser} = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const data = await axios.post("http://localhost:5000/signup",form);
     localStorage.setItem("token", data.data.token)
     setUser(data.data.user)
      nav('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <form onSubmit={handleSubmit} className='form'>
        <p class="title">Register </p>

        <p class="message">Signup now and get full access to our app. </p>

      <div className='flex'>
      <label>
      <span>Firstname</span>

      <input name="first_name" onChange={handleChange} placeholder="First Name" /> <br />
      
      </label>
      <label>
      <span>Lastname</span>

      <input name="last_name" onChange={handleChange} placeholder="Last Name" /> <br />
      
      </label> 
      </div>
      <label>
      <span>Email</span>

      <input name="email" type="email" onChange={handleChange} placeholder="Email" /> <br />
      </label>
      <label>
      <span>Password</span>

      <input name="password" type="password" onChange={handleChange} placeholder="Password" /> <br />
     
     </label> 
     <label>
     <span>Confirm password</span>

      <input name="confirmPassword" type="password" onChange={handleChange} placeholder="Confirm Password" />  <br />
     
      </label>
     <button type="submit">Sign Up</button>
     <p class="signin">Already have an acount ? <a  href="/Signin">Signin</a> </p>

     
    </form>
    
  );
};

export default Signup;
