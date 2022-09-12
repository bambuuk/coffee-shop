// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IFiltersAndSearch } from '../../types/state';
import { filterType } from '../../store/filtersAndSearchString/actions';
import FilterCoffeeBeansView from './FilterCoffeeBeansView';

function FilterCoffeeBeans() {
  const currentFilter = useSelector((state: IFiltersAndSearch) => state.filtersAndSearch.currentFilter);
  const dispatch = useDispatch();

  const buttonsData = [
    { name: 'Brazil' },
    { name: 'Kenya' },
    { name: 'Columbia' },
    { name: 'All' },
  ];
  const onSelectFilter = (filter: string) => {
    dispatch(filterType(filter));
  };

  return (
    <FilterCoffeeBeansView
      buttonsData={buttonsData}
      onSelectFilter={onSelectFilter}
      currentFilter={currentFilter} 
    />
  );
}

export default FilterCoffeeBeans;
