import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePagee';
import CategoryPage from './components/CategoryPage';
import UploadProduct from './components/UploadProduct';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Vehicles from './pages/Vehicles';
import Property from './pages/Property';
import MobilePhones from './pages/MobilePhones';
import Electronics from './pages/Electronics';
import Furniture from './pages/Furniture';
import HealthBeauty from './pages/HealthBeauty';
import SellPage from './components/SellPage';
import About from './pages/About';
import contact from './pages/contact';

import Signup from './pages/Signup';
import Login from './pages/Login';
import { AuthProvider } from './AuthContext';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient()
const App = () => {
  return (
    <AuthProvider>
<QueryClientProvider client={queryClient}>

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/property" element={<Property />} />
        <Route path="/mobile-phones" element={<MobilePhones />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/health-beauty" element={<HealthBeauty />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/upload-product" element={<UploadProduct />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<contact />} />


        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
    </QueryClientProvider>
    </AuthProvider>
  );
};

export default App;
