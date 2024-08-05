// src/pages/Vehicles.jsx
import React from 'react';
import ItemList from '../components/ItemList';

const Vehicles = () => {
  return (
    <div>
      <h1 className='page-title'>Vehicles</h1>
      <ItemList category="vehicles" />
    </div>
  );
};

export default Vehicles;
