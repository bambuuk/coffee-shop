import OurCoffeeHeader from '../components/OurCoffeeHeader/OurCoffeeHeader';
import AboutBeans from '../components/AboutBeans/AboutBeans';
import FilterCoffeeBeans from '../components/FilterCoffeeBeans/FilterCoffeeBeans';
import Footer from '../components/Footer/Footer';

function OurCoffee() {
  return (
    <>
      <OurCoffeeHeader />
      <main>
        <AboutBeans />
        <FilterCoffeeBeans />
      </main>
      <Footer />
    </>
  );
}

export default OurCoffee;
