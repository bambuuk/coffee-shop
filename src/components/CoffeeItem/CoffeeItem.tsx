import './coffeeItem.scss';

type CoffeeItemProp = {
  imgUrl: string;
  title: string;
  country: string;
  price: string;
};

function CoffeeItem({
  imgUrl, title, country, price,
}: CoffeeItemProp) {
  return (
    <div className="coffee-item">
      <img
        className="coffee-item__img"
        src={imgUrl}
        alt={title}
      />
      <div className="coffee-item__title">{title}</div>
      <div className="coffee-item__country">{country}</div>
      <div className="coffee-item__price">{price}</div>
    </div>
  );
}

export default CoffeeItem;
