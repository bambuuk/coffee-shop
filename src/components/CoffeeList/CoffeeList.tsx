import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchedListProducts } from '../../store/products/actions';
import { IFiltersAndSearch, IProductsState } from '../../types/state';
import CoffeeItem from '../CoffeeItem/CoffeeItem';
import './coffeeList.scss';

function CoffeeList() {
  const dispatch = useDispatch();

  const currentFilter = useSelector((state: IFiltersAndSearch) => state.filtersAndSearch.currentFilter);
  const searchTextValue = useSelector((state: IFiltersAndSearch) => state.filtersAndSearch.searchValue);
  const productListItem = useSelector((state: IProductsState) => state.products.dataProducts);

  useEffect(() => {
    if (productListItem.length < 2) {
      axios.get('https://62a11ee47b9345bcbe46a4c5.mockapi.io/coffee-list')
        .then((res) => {
          dispatch(fetchedListProducts(res.data));
        });
    }
  }, []);

  const sortCardsByFilter = (filter: string) => {
    const copyCards = [...productListItem];
    let result = copyCards;
    if (filter === 'All') {
      result = copyCards;
    } else {
      result = copyCards.filter((item) => item.techniclas.weight === filter);
    }
    if (searchTextValue !== '' && searchTextValue !== null) {
      result = result.filter((item) => item.title.toLowerCase().includes(searchTextValue.toLowerCase()));
    }
    return result;
  };

  const visibleCards = sortCardsByFilter(currentFilter);

  const content = visibleCards.map((item) => {
    return (
      <CoffeeItem
        key={item.id}
        id={item.id}
        imgUrl={item.imgUrl}
        title={item.title}
        country={item.country}
        price={item.price}
      />
    );
  });

  return (
    <div className="coffee-list">
      <div className="container">
        <div className="coffee-list__wrapper">
          {content}
        </div>
      </div>
    </div>
  );
}

export default CoffeeList;
