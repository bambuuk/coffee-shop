import { SEARCH_VALUE, FILTER_TYPE } from './types';

type State = {
  searchValue?: string | null;
  currentFilter?: string | null;
};

type Actions = {
  type: string;
  payload?: string;
};

const initialState = {
  searchValue: null,
  currentFilter: 'all',
};

// eslint-disable-next-line
const filtersAndSearch = (state: State = initialState, action: Actions) => {
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
