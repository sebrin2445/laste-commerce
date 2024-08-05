import React from 'react';
import ItemList from '../components/ItemList';

const MobilePhones = () => {
  return (
    <div>
      <h1 className='page-title'>Mobile Phones & Tablets</h1>
      <ItemList category="mobile-phones" />
    </div>
  );
};

export default MobilePhones;
