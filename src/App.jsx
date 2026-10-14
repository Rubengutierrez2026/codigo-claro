
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Hero from './assets/components/hero';
import VentaEbook from './assets/components/VentaEbook';
import Privacidad from './assets/components/Privacidad';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/ebook" element={<VentaEbook />} />
        <Route path="/privacidad" element={<Privacidad />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
