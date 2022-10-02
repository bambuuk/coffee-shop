import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Spinner from '../Spinner/Spinner';

import './app.scss';

const CoffeeHouse = lazy(() => import('../../pages/CoffeeHouse'));
const OurCoffee = lazy(() => import('../../pages/OurCoffee'));
const ForYourPleasure = lazy(() => import('../../pages/ForYourPleasure'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<CoffeeHouse />} />
          <Route path="/our-coffee" element={<OurCoffee />} />
          <Route path="/for-your-pleasure" element={<ForYourPleasure />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
