import React from 'react';
import ItemList from '../components/ItemList';

const Electronics = () => {
  return (
    <div>
      <h1 className='page-title'>Electronics</h1>
      <ItemList category="electronics" />
    </div>
  );
};

export default Electronics;
