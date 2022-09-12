import { SEARCH_VALUE, FILTER_TYPE } from './types';
import { IState } from '../../types/state';

type Actions = {
  type: string;
  payload?: string;
};

const initialState = {
  searchValue: null,
  currentFilter: 'All',
};

// eslint-disable-next-line
const filtersAndSearch = (state: IState = initialState, action: Actions) => {
  switch (action.type) {
    case SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };
    case FILTER_TYPE:
      return {
        ...state,
        currentFilter: action.payload,
      };
    default:
      return state;
  }
};

export default filtersAndSearch;
