import { Link } from 'react-router-dom';
import './coffeeItem.scss';

type CoffeeItemProp = {
  imgUrl: string;
  title: string;
  country: string;
  price: string;
  id: string;
};

function CoffeeItem({
  imgUrl, title, country, price, id,
}: CoffeeItemProp) {
  return (
    <Link className="coffee-item__link" to={`/our-coffee/${id}`}>
      <div className="coffee-item">
        <img
          className="coffee-item__img"
          src={imgUrl}
          alt={title}
        />
        {/* <div className="wrapper_img">
          <img
            className="coffee-item__img"
            src={imgUrl}
            alt={title}
          />
        </div> */}
        <div className="coffee-item__text-container">
          <div className="coffee-item__title">{title.length > 57 ? `${title.slice(0, 58)} + ...` : title}</div>
          <div className="coffee-item__country">{country}</div>
          <div className="coffee-item__price">{price}</div>
        </div>
      </div>
    </Link>
  );
}

export default CoffeeItem;
