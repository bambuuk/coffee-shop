import { SEARCH_VALUE, FILTER_TYPE } from './types';

type State = {
  searchValue?: string;
  currentFilter?: string;
}

type Actions = {
  type: string;
  payload?: string;
}

const filtersAndSearch = (state: State, action: Actions) => {
  switch (action.type) {
    case SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
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
