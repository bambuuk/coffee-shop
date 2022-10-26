import { useSelector, useDispatch } from 'react-redux';
import { IFiltersAndSearch } from '../../types/state';
import { filterType, searchValue } from '../../store/filtersAndSearchString/actions';
import FilterCoffeeBeansView from './FilterCoffeeBeansView';

function FilterCoffeeBeans() {
  const dispatch = useDispatch();

  const currentFilter = useSelector((state: IFiltersAndSearch) => state.filtersAndSearch.currentFilter);
  const searchTextValue = useSelector((state: IFiltersAndSearch) => state.filtersAndSearch.searchValue);

  const buttonsData = [
    { name: '200 grams' },
    { name: '1 kilograms' },
    { name: '2 kilograms' },
    { name: 'All' },
  ];
  const onSelectFilter = (filter: string) => {
    dispatch(filterType(filter));
  };

  const sendSearchingText = (text: string) => {
    const regex = /[a-z0-9-]/gi; // eslint-disable-line
    if (regex.test(text[0])) {
      dispatch(searchValue(text));
    }
  };

  const searchTextValid = searchTextValue === null ? '' : searchTextValue;
  return (
    <FilterCoffeeBeansView
      buttonsData={buttonsData}
      onSelectFilter={onSelectFilter}
      sendSearchingText={sendSearchingText}
      currentFilter={currentFilter}
      searchTextValue={searchTextValid}
    />
  );
}

export default FilterCoffeeBeans;
