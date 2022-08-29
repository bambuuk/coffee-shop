import { SEARCH_VALUE, FILTER_TYPE } from './types';

export const searchValue = (value: string) => ({ type: SEARCH_VALUE, payload: value }); // eslint-disable-line
export const filterType = (value: string) => ({ type: FILTER_TYPE, payload: value }); // eslint-disable-line