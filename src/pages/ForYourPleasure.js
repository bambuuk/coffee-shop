import ForYourPleasureHeader from '../components/ForYourPleasureHeader/ForYourPleasureHeader';
import AboutOurGoods from '../components/AboutOurGoods/AboutOurGoods';
import Footer from '../components/Footer/Footer';
import Carousel from '../components/Carousel/Carousel';

function ForYourPleasure() {
  return (
    <>
      <ForYourPleasureHeader />
      <main>
        <AboutOurGoods />
        <Carousel />
      </main>
      <Footer />
    </>
  );
}

export default ForYourPleasure;
