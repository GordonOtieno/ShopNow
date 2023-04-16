import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';


const App = () => {
  return (
    <div>
      <Router>
      <Navigation />
        <Route exact path="/" component={HomePage} />
        <Route path="/product/:id" component={ProductPage} />

    </Router>
    </div>
  );
}

export default App;