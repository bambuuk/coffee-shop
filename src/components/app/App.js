import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Spinner from '../Spinner/Spinner';
import Page404 from '../../pages/Page404/Page404';
import './app.scss';

const CoffeeHouse = lazy(() => import('../../pages/CoffeeHouse/CoffeeHouse'));
const OurCoffee = lazy(() => import('../../pages/OurCoffee/OurCoffee'));
const ForYourPleasure = lazy(() => import('../../pages/ForYourPleasure/ForYourPleasure'));
const SingleCoffeeItemPage = lazy(() => import('../../pages/SingleCoffeeItemPage/SingleCoffeeItemPage'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<CoffeeHouse />} />
          <Route path="/our-coffee" element={<OurCoffee />} />
          <Route path="our-coffee/:coffeeId" element={<SingleCoffeeItemPage />} />
          <Route path="/for-your-pleasure" element={<ForYourPleasure />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
