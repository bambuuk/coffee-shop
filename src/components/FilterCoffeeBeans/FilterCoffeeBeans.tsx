import FilterCoffeeBeansView from './FilterCoffeeBeansView';

function FilterCoffeeBeans() {
  const buttonsData = [
    { name: 'Brazil' },
    { name: 'Kenya' },
    { name: 'Columbia' },
    { name: 'All' },
  ];
  
  return (
    <FilterCoffeeBeansView buttonsData={buttonsData} />
  );
}

export default FilterCoffeeBeans;
