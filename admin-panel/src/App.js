import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Inbox from './pages/Inbox';
import Eventos from './pages/Eventos';
import Tipos from './pages/Tipos';
import Categorias from './pages/Categorias';
import Atividades from './pages/Atividades';
import Upload from './pages/Upload';
import Settings from './pages/Settings';

export default function App() {
  return (
    <div className="main">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path='/inbox' element={<Inbox />} />
          <Route path='/eventos' element={<Eventos />} />
          <Route path='/tipos' element={<Tipos />} />
          <Route path='/categorias' element={<Categorias />} />
          <Route path='atividades' element={<Atividades />} />
          <Route path='uploads' element={<Upload />} />
          <Route path='settings' element={<Settings />} />
        </Routes>
      </Router>
    </div>
  )
} 
