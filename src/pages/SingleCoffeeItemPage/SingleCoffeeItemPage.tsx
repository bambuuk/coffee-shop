// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import OurCoffeeHeader from '../../components/OurCoffeeHeader/OurCoffeeHeader';
import Footer from '../../components/Footer/Footer';
import BlackLineWithLogo from '../../components/BlackLineWithLogo/BlackLineWithLogo';
import coffeeItemImage from '../../resources/img/aromistico-napali.jpg';
import './singleCoffeeItemPage.scss';

function SingleCoffeeItemPage() {
  return (
    <div className="single-coffee-page">
      <OurCoffeeHeader />
      <div className="container">
        <div className="single-coffee-page__wrapper">
          <div className="single-coffee-page__img">
            <img src={coffeeItemImage} alt="coffee" />
          </div>
          <div className="single-coffee-page__info">
            <h2 className="title title_margin-top-9">About it</h2>
            <BlackLineWithLogo />
            <div className="single-coffee-page__country">
              <span className="weight">Country: </span> 
              Brasil
            </div>
            <div className="single-coffee-page__descr">
              <span className="weight">Description: </span> 
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel incidunt,
              eaque totam dolorum quod atque qui vitae error repellat labore sed est 
              aliquid quae aspernatur aliquam. Voluptatum vel error hic.
            </div>
            <div className="single-coffee-page__price">
              <span className="weight">Price: </span> 
              <span className="single-coffee-page__price_font-size">16.99$</span>
            </div>
          </div>
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
