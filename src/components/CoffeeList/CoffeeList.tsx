import { useState } from 'react';
import { useSelector } from 'react-redux';
import { IFiltersAndSearch } from '../../types/state';
import CoffeeItem from '../CoffeeItem/CoffeeItem';
import './coffeeList.scss';

function CoffeeList() {
  const [cards] = useState([
    {
      imgUrl: 'https://m.media-amazon.com/images/I/71TcI6NptNL.jpg',
      title: 'AROMISTICO Coffee 1 kg',
      country: 'Brazil',
      weight: '1 kg',
      price: '6.99$',
      id: 'AROMISTICO Coffee 1 kg + Brazil + 6.99$',
    },
    {
      imgUrl: 'https://m.media-amazon.com/images/I/71TcI6NptNL.jpg',
      title: 'AROMISTICO Coffee 2 kg',
      country: 'Brazil',
      weight: '2 kg',
      price: '12.99$',
      id: 'AROMISTICO Coffee 2 kg + Brazil + 12.99$',
    },
    {
      imgUrl: 'https://i.ebayimg.com/images/g/LoIAAOSwi3Fgw1NI/s-l500.png',
      title: 'Solimo Coffee Beans 1 kg',
      country: 'Kenya',
      weight: '1 kg',
      price: '10.73$',
      id: 'Solimo Coffee Beans 1 kg + Kenya + 10.73$',
    },
    {
      imgUrl: 'https://i.ebayimg.com/images/g/LoIAAOSwi3Fgw1NI/s-l500.png',
      title: 'Solimo Coffee Beans 2 kg',
      country: 'Kenya',
      weight: '2 kg',
      price: '19.99$',
      id: 'Solimo Coffee Beans 2 kg + Kenya + 19.99$',
    },
    {
      imgUrl: 'https://i.ebayimg.com/thumbs/images/g/gKwAAOSw0Vxipz0Z/s-l300.jpg',
      title: 'Presto Coffee Beans 1 kg',
      country: 'Columbia',
      weight: '1 kg',
      price: '15.00$',
      id: 'Presto Coffee Beans 1 kg + Columbia + 15.00$',
    },
    {
      imgUrl: 'https://i.ebayimg.com/thumbs/images/g/gKwAAOSw0Vxipz0Z/s-l300.jpg',
      title: 'Presto Coffee Beans 2 kg',
      country: 'Columbia',
      weight: '2 kg',
      price: '29.99$',
      id: 'Presto Coffee Beans 2 kg + Columbia + 29.99$',
    },
  ]);

  const currentFilter = useSelector((state: IFiltersAndSearch) => state.filtersAndSearch.currentFilter);
  const searchTextValue = useSelector((state: IFiltersAndSearch) => state.filtersAndSearch.searchValue);

  const sortCardsByFilter = (filter: string) => {
    const copyCards = [...cards];
    let result = copyCards;
    if (filter === 'All') {
      result = copyCards;
    } else {
      result = copyCards.filter((item) => item.country === filter);
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
