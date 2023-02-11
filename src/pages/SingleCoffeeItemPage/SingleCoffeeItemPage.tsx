import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import OurCoffeeHeader from '../../components/OurCoffeeHeader/OurCoffeeHeader';
import Footer from '../../components/Footer/Footer';
import BlackLineWithLogo from '../../components/BlackLineWithLogo/BlackLineWithLogo';
import coffeeItemImage from '../../resources/img/aromistico-napali.jpg';
import './singleCoffeeItemPage.scss';

function SingleCoffeeItemPage() {
  const [coffeeItem, setCoffeeItem] = useState({
    imgUrl: coffeeItemImage,
    title: 'loading',
    price: 'loading',
    id: 'loading',
    country: 'loading',
    description: 'loading',
    techniclas: {
      type: 'loading',
      cuisine: 'loading',
      format: 'loading',
      weight: 'loading',
      flavour: 'loading',
      roast: 'loading',
      'country of origin': 'loading',
      'country of origin of primary ingredient': 'loading',
    },
  });
  const idProduct = useParams();

  useEffect(() => {
    axios.get(`https://62a11ee47b9345bcbe46a4c5.mockapi.io/coffee-list/${idProduct.coffeeId}`)
      .then((res) => {
        setCoffeeItem(res.data);
      });
  }, []);

  const technicalsArray = Object.entries(coffeeItem.techniclas);
  const contentTechnicals = technicalsArray.map((item) => {
    return (
      <tr className="table_str" key={item[0]}>
        <td className="leftCell">{item[0][0].toUpperCase() + item[0].slice(1)}</td>
        <td className="rightCell">{item[1]}</td>
      </tr>
    );
  });

  const {
    imgUrl, title, price, id, country, description,
  } = coffeeItem;

  return (
    <div className="single-coffee-page">
      <OurCoffeeHeader />
      <div className="container">
        <div className="single-coffee-page__wrapper">
          <div className="single-coffee-page__img">
            <img src={imgUrl} alt={title} />
          </div>
          <div className="single-coffee-page__info">
            <h2 className="title title_margin-top-9">About it</h2>
            <BlackLineWithLogo />
            <div className="single-coffee-page__country">
              <span className="weight">Country: </span>
              {country}
            </div>
            <div className="single-coffee-page__sku">
              <span className="weight">SKU: </span>
              {id}
            </div>
            <div className="single-coffee-page__descr">
              <span className="weight">Description: </span>
              <br />
              {description}
            </div>
            <div className="single-coffee-page__price">
              <span className="weight">Price: </span>
              <span className="single-coffee-page__price_font-size">{price}</span>
            </div>
          </div>
        </div>
        <div className="single-coffee-page__specifications">
          <h2 className="title">Specifications</h2>
          <table className="table">
            <tbody>
              {contentTechnicals}
            </tbody>
          </table>
        </div>
        <Link
          to="/our-coffee"
          className="single-coffee-page__back"
        >
          <button type="button" className="single-coffee-page__back-btn">Back to all products</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default SingleCoffeeItemPage;
