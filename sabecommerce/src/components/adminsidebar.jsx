import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './admin.css';

 
function adminsidebar() {
  return (
    <aside className="sidebar">
      <div className="user-info">
        <div className="avatar">Avatar</div>
        <div className="username">Sebrina Semir</div>
        <a href="/">Add Phone Number</a>
      </div>
      <div className="menu">
        <a href="/">Make Money</a>
        <a href="/">Balance: ETB 0</a>
        <a href="/">Followers</a>
        <a href="/">My Adverts</a>
      </div>
    </aside>
  );
}

export default adminsidebar;
