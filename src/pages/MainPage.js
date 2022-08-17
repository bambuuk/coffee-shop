import HeaderMainPage from '../components/HeaderMainPage/HeaderMainPage';
import AboutUs from '../components/AboutUs/AboutUs';
import BestProduct from '../components/BestProduct/BestProduct';
import Footer from '../components/Footer/Footer';

function MainPage() {
  return (
    <>
      <HeaderMainPage />
      <main>
        <AboutUs />
        <BestProduct />
      </main>
      <Footer />
    </>
  );
}

export default MainPage;
