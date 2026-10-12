import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Hero from './assets/components/hero';
import VentaEbook from './assets/components/VentaEbook';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/ebook" element={<VentaEbook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;