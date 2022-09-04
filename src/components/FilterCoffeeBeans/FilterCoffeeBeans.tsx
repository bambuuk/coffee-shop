import FilterCoffeeBeansView from './FilterCoffeeBeansView';
import './filterCoffeeBeans.scss';

function FilterCoffeeBeans() {
  const buttonsData = [
    { name: 'Brazil', label: 'Brazil' },
    { name: 'Kenya', label: 'Kenya' },
    { name: 'Columbia', label: 'Columbia' },
    { name: 'All', label: 'All' },
  ];
  return (
    <FilterCoffeeBeansView />
  );
}

export default FilterCoffeeBeans;
