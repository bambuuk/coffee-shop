import './bestProduct.scss';

function BestProduct() {
  return (
    <section className="best-product">
      <div className="container">
        <h2 className="title">Our best</h2>
        <div className="best-product__coffe-list">
          <div className="coffee-item">
            <img 
              className="coffee-item__img" 
              src="https://i.ebayimg.com/images/g/LoIAAOSwi3Fgw1NI/s-l500.png" 
              alt="Solimo Coffee Beans 2 kg"
            />
            <div className="coffee-item__title">Solimo Coffee Beans 2 kg</div>
            <div className="coffee-item__price">10.73$</div>
          </div>
          <div className="coffee-item">
            <img 
              className="coffee-item__img" 
              src="https://i.ebayimg.com/thumbs/images/g/gKwAAOSw0Vxipz0Z/s-l300.jpg" 
              alt=""
            />
            <div className="coffee-item__title">Presto Coffee Beans 1 kg</div>
            <div className="coffee-item__price">15.99$</div>
          </div>
          <div className="coffee-item">
            <img 
              className="coffee-item__img" 
              src="https://m.media-amazon.com/images/I/71TcI6NptNL.jpg" 
              alt="AROMISTICO Coffee 1 kg"
            />
            <div className="coffee-item__title">AROMISTICO Coffee 1 kg</div>
            <div className="coffee-item__price">6.99$</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestProduct;
