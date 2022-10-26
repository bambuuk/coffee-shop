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

export interface IProducts {
  imgUrl: string,
  title: string,
  price: string,
  id: string,
  country?: string,
  techniclas?: {
    type: string,
    cuisine: string,
    format: string,
    weight: string,
    flavour: string,
    roast: string,
    'country of origin': string,
    'country of origin of primary ingredient': string
  }
}

export interface IProductsState {
  products: {
    dataProducts: IProducts[],
    loadingStatus: boolean
  }
}