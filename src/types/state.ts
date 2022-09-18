export type IState = {
  searchValue: string | null;
  currentFilter: string;
};

export type IFiltersAndSearch = {
  filtersAndSearch: {
    searchValue: string;
    currentFilter: string;
  }
};
