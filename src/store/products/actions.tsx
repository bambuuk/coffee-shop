import { FETCHING_LIST_PRODUCTS, FETCHED_LIST_PRODUCTS, ERROR_LIST_PRODUCTS } from './types';
import { IProducts } from '../../types/state';

export const fetchingListProducts = () => ({type: FETCHING_LIST_PRODUCTS}); //eslint-disable-line
export const fetchedListProducts = (value: IProducts[]) => ({type: FETCHED_LIST_PRODUCTS, payload: value}); //eslint-disable-line
export const errorListProducts = () => ({type: ERROR_LIST_PRODUCTS}); //eslint-disable-line