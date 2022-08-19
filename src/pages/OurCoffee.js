import OurCoffeeHeader from '../components/OurCoffeeHeader/OurCoffeeHeader';
import AboutBeans from '../components/AboutBeans/AboutBeans';
import FilterCoffeeBeans from '../components/FilterCoffeeBeans/FilterCoffeeBeans';
import CoffeeList from '../components/CoffeeList/CoffeeList';
import Footer from '../components/Footer/Footer';

function OurCoffee() {
  return (
    <>
      <OurCoffeeHeader />
      <main>
        <AboutBeans />
        <FilterCoffeeBeans />
        <CoffeeList />
      </main>
      <Footer />
    </>
  );
}

export default OurCoffee;
