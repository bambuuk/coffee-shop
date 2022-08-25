import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CoffeeItem from '../CoffeeItem/CoffeeItem.tsx';
import './coffeeList.scss';

function CoffeeList() {
  const [cards] = useState([
    {
      imgUrl: 'https://m.media-amazon.com/images/I/71TcI6NptNL.jpg',
      title: 'AROMISTICO Coffee 1 kg',
      country: 'Brazil',
      weight: '1 kg',
      price: '6.99$',
      id: uuidv4()
    },
    {
      imgUrl: 'https://m.media-amazon.com/images/I/71TcI6NptNL.jpg',
      title: 'AROMISTICO Coffee 2 kg',
      country: 'Brazil',
      weight: '2 kg',
      price: '12.99$',
      id: uuidv4()
    },
    {
      imgUrl: 'https://i.ebayimg.com/images/g/LoIAAOSwi3Fgw1NI/s-l500.png',
      title: 'Solimo Coffee Beans 1 kg',
      country: 'Kenya',
      weight: '1 kg',
      price: '10.73$',
      id: uuidv4()
    },
    {
      imgUrl: 'https://i.ebayimg.com/images/g/LoIAAOSwi3Fgw1NI/s-l500.png',
      title: 'Solimo Coffee Beans 2 kg',
      country: 'Kenya',
      weight: '2 kg',
      price: '19.99$',
      id: uuidv4()
    },
    {
      imgUrl: 'https://i.ebayimg.com/thumbs/images/g/gKwAAOSw0Vxipz0Z/s-l300.jpg',
      title: 'Presto Coffee Beans 1 kg',
      country: 'Columbia',
      weight: '1 kg',
      price: '15.00$',
      id: uuidv4()
    },
    {
      imgUrl: 'https://i.ebayimg.com/thumbs/images/g/gKwAAOSw0Vxipz0Z/s-l300.jpg',
      title: 'Presto Coffee Beans 2 kg',
      country: 'Columbia',
      weight: '2 kg',
      price: '29.99$',
      id: uuidv4()
    },

  ]);

  const content = cards.map((item) => {
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
