import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';


const App = () => {
  return (
    <div className="grid-container">
      <Router>
      <Navigation />
      <Routes>
      <Route path="/product/:id" element={<ProductPage />} />
      <Route exact path="/" element={<HomePage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;