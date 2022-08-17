import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CoffeeHouse from '../../pages/CoffeeHouse';
import OurCoffee from '../../pages/OurCoffee';

import './app.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoffeeHouse />} />
        <Route path="/our-coffee" element={<OurCoffee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
