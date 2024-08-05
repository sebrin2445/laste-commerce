import React from 'react';
import ItemList from '../components/ItemList';
import {useQuery} from "@tanstack/react-query"
import axios from 'axios';

const HealthBeauty = () => {
  
  return (
    <div>
      <h1 className='page-title'>Health & Beauty</h1>
      <ItemList category="health-beauty" />
    </div>
  );
};

export default HealthBeauty;