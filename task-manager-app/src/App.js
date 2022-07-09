import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

function App() {
    return (
        <Router>
            <div>
                <h1>ROTAS no React!</h1>
                <NavBar />
            </div>
            <Routes>
                <Route path='/' element = {<Home />} />
                <Route path='/empresa' element = {<Empresa />} />
                <Route path='/contato' element = {<Contato />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App;