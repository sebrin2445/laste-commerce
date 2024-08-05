import React from 'react';
import ItemList from '../components/ItemList';

const Furniture = () => {
  return (
    <div>
      <h1 className='page-title'>Home, Furniture & Appliances</h1>
      <ItemList category="furniture" />
    </div>
  );
};

export default Furniture;
