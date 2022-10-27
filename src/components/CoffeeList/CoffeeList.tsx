import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import axios from 'axios';
import { fetchedListProducts } from '../../store/products/actions';
import { IFiltersAndSearch, IProductsState } from '../../types/state';
import CoffeeItem from '../CoffeeItem/CoffeeItem';
import './coffeeList.scss';

function CoffeeList() {
  const [cards] = useState([
    {
      imgUrl: 'https://i.pinimg.com/originals/8d/2c/1c/8d2c1c42b83d38d8b2ed5d45034eb3e5.jpg',
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
    },
    {
      imgUrl: 'https://i.pinimg.com/originals/b0/a0/1c/b0a01c76c8b269e8c2c471f5cf193f04.jpg',
      title: 'AROMISTICO CAPRI - Premium Coarse Coffee for COLD BREW',
      price: '12.99$',
      id: 'B07CJKDN36',
      country: 'Guatemala',
      techniclas: {
        type: 'Coffee Whole Beans',
        cuisine: 'European',
        format: 'Whole Bean',
        weight: '200 grams',
        flavour: 'Cold Brew Roast - CAPRI',
        roast: 'Medium_roast',
        'country of origin': 'Italy',
        'country of origin of primary ingredient': 'Guatemala',
      },
    },
    {
      imgUrl: 'https://i.pinimg.com/originals/db/f8/ab/dbf8ab3b5368cf013d468711f5fa734b.jpg',
      title: 'AROMISTICO Napoli - Rich Strong Dark Roast | Smoky, Malty & Dark Chocolate-Like',
      price: '10.73$',
      id: 'B079M4R9R4',
      country: 'Central America',
      techniclas: {
        type: 'Coffee Whole Beans',
        cuisine: 'European',
        format: 'Whole Bean',
        weight: '1 kilograms',
        flavour: 'Dark Roast - NAPOLI',
        roast: 'Dark_roast',
        'country of origin': 'Italy',
        'country of origin of primary ingredient': 'Central America',
      },
    },
  ]);

  const dispatch = useDispatch();
  dispatch(fetchedListProducts(cards));

  // axios.get('https://62a11ee47b9345bcbe46a4c5.mockapi.io/coffee-list')
  //   .then((res) => console.log(res.data));

  const currentFilter = useSelector((state: IFiltersAndSearch) => state.filtersAndSearch.currentFilter);
  const searchTextValue = useSelector((state: IFiltersAndSearch) => state.filtersAndSearch.searchValue);
  // const productListItem = useSelector((state: IProductsState) => state.products.dataProducts);

  const sortCardsByFilter = (filter: string) => {
    const copyCards = [...cards];
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
