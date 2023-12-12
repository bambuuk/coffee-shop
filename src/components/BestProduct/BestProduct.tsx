import './bestProduct.scss';

function BestProduct() {
  return (
    <section className="best-product">
      <div className="container">
        <h2 className="title">Our best</h2>
        <div className="best-product__coffe-list">
          <div className="best-coffee-item">
            <img
              className="best-coffee-item__img"
              src="https://i.pinimg.com/originals/8d/2c/1c/8d2c1c42b83d38d8b2ed5d45034eb3e5.jpg"
              alt="Premium Coarse Coffee for COLD BREW"
            />
            <div className="best-coffee-item__title">Premium Coarse Coffee for COLD BREW</div>
            <div className="best-coffee-item__price">20$</div>
          </div>
          <div className="best-coffee-item">
            <img
              className="best-coffee-item__img"
              src="https://i.pinimg.com/originals/b0/a0/1c/b0a01c76c8b269e8c2c471f5cf193f04.jpg"
              alt="Premium Coarse Coffee for COLD BREW"
            />
            <div className="best-coffee-item__title">Premium Coarse Coffee for COLD BREW</div>
            <div className="best-coffee-item__price">4$</div>
          </div>
          <div className="best-coffee-item">
            <img
              className="best-coffee-item__img"
              src="https://i.pinimg.com/originals/db/f8/ab/dbf8ab3b5368cf013d468711f5fa734b.jpg"
              alt="Rich Strong Dark Roast Coffee Beans"
            />
            <div className="best-coffee-item__title">Rich Strong Dark Roast Coffee Beans</div>
            <div className="best-coffee-item__price">12$</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestProduct;
