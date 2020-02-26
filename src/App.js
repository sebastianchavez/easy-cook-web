import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Navigation from './components/navigation/navigation';
import Carousel from './components/carousel/carousel'
import Home from './pages/home/home';

function App() {
  return (
    <Router>
      <div className="site-wrap">
      <Navigation />
      <Carousel />

        <Route path="/" component={Home} exact />
      </div>
    </Router>
  );
}

export default App;