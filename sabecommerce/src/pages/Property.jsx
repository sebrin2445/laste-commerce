import React from 'react';
import ItemList from '../components/ItemList';

const Property = () => {
  return (
    <div>
      <h1 className='page-title'>Property</h1>
      <ItemList category="property" />
    </div>
  );
};

export default Property;
