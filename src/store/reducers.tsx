import { combineReducers } from 'redux';
import filtersAndSearch from './filtersAndSearchString/reducers';
import products from './products/reducer';

const rootReducer = combineReducers({
  filtersAndSearch, products,
});

export default rootReducer;
