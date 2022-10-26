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
    },
    {
      imgUrl: 'https://i.pinimg.com/564x/43/88/0c/43880c482a39b03e82942e82cd4af104.jpg',
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
      imgUrl: 'https://i.pinimg.com/564x/14/f0/a1/14f0a10b46579003d3428579f66e44a1.jpg',
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
    // {
    //   imgUrl: 'https://i.ebayimg.com/images/g/LoIAAOSwi3Fgw1NI/s-l500.png',
    //   title: 'Solimo Coffee Beans 2 kg',
    //   country: 'Kenya',
    //   weight: '2 kg',
    //   price: '19.99$',
    //   id: useId(),
    // },
    // {
    //   imgUrl: 'https://i.ebayimg.com/thumbs/images/g/gKwAAOSw0Vxipz0Z/s-l300.jpg',
    //   title: 'Presto Coffee Beans 1 kg',
    //   country: 'Columbia',
    //   weight: '1 kg',
    //   price: '15.00$',
    //   id: useId(),
    // },
    // {
    //   imgUrl: 'https://i.ebayimg.com/thumbs/images/g/gKwAAOSw0Vxipz0Z/s-l300.jpg',
    //   title: 'Presto Coffee Beans 2 kg',
    //   country: 'Columbia',
    //   weight: '2 kg',
    //   price: '29.99$',
    //   id: useId(),
    // },
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
