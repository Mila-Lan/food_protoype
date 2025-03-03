import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Statistics from './pages/Statistics';
import Composting from './pages/Composting';
import Tips from './pages/Tips';

function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navigation />
        <main className="main container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/composting" element={<Composting />} />
            <Route path="/tips" element={<Tips />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
