import { combineReducers } from 'redux';
import filtersAndSearch from './filtersAndSearchString/reducers';

const rootReducer = combineReducers({
  filtersAndSearch,
});

export default rootReducer;
