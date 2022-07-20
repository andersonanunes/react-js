import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  return (
    



  <div className="Wrapper">
      <Header />
      <Menu />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
