import { IProducts } from '../../types/state';
import { FETCHED_LIST_PRODUCTS, FETCHING_LIST_PRODUCTS, ERROR_LIST_PRODUCTS } from './types';

type Actions = {
  type: string;
  payload?: IProducts;
};

type IInitialState = {
  dataProducts: IProducts[],
  loadingStatus: boolean
};

const initialState = {
  dataProducts: [{
    imgUrl: 'https://i.pinimg.com/originals/30/26/ad/3026ad9af80566d4aa6badeaeb830fd2.jpg',
    title: 'AROMISTICO CAPRI - Premium Coarse Coffee for COLD BREW',
    price: '6.99$',
    id: 'B07CJK4QNS',
    country: 'Ethiopia',
    techniclas: {
      type: 'COARSE GROUND',
      cuisine: 'European',
      format: 'Ground',
      weight: '2 kilograms',
      flavour: 'Cold Brew Roast - CAPRI',
      roast: 'Medium_roast',
      'country of origin': 'Italy',
      'country of origin of primary ingredient': 'Ethiopia',
    },
  }],
  loadingStatus: false,
};

// eslint-disable-next-line
const products = (state: IInitialState = initialState, actions: Actions) => {
  switch (actions.type) {
    case FETCHING_LIST_PRODUCTS:
      return {
        ...state,
        loadingStatus: true,
      };
    case FETCHED_LIST_PRODUCTS:
      return {
        ...state,
        dataProducts: actions.payload,
        loadingStatus: false,
      };
    case ERROR_LIST_PRODUCTS:
      return {
        ...state,
        loadingStatus: false,
      };
    default:
      return state;
  }
};

export default products;
