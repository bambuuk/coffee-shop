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
          <div className="single-coffee-page__specifications">
            <h2 className="title">Specifications</h2>
            <table className="table">
              <tbody>
                <tr className="table_str">
                  <td className="leftCell">Product Dimensions</td>
                  <td className="rightCell">9 x 8 x 17 cm; 200 Grams</td>
                </tr>
                <tr>
                  <td>Product Name</td>
                  <td>Ground Coffee</td>
                </tr>
                <tr>
                  <td>Allergen Information</td>
                  <td>Contains: Gluten Free</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>200 Grams</td>
                </tr>
                <tr>
                  <td>Units</td>
                  <td>1.0 gram</td>
                </tr>
                <tr>
                  <td>Solid Net Weight</td>
                  <td>200 Grams</td>
                </tr>
                <tr>
                  <td>Storage Instructions</td>
                  <td>Keep in a cool and dry place</td>
                </tr>
                <tr>
                  <td>Country of origin</td>
                  <td>Italy</td>
                </tr>
                <tr>
                  <td>Country of origin of primary ingredient(s)</td>
                  <td>Ethiopia</td>
                </tr>
                <tr>
                  <td>Location Produced In of primary ingredient(s)</td>
                  <td>Italy</td>
                </tr>
                <tr>
                  <td>Brand</td>
                  <td>AROMISTICO Crafted Selections of Italian Coffee</td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td>COARSE GROUND</td>
                </tr>
                <tr>
                  <td>Format</td>
                  <td>Ground</td>
                </tr>
                <tr>
                  <td>Region Produced In</td>
                  <td>Lombardy</td>
                </tr>
                <tr>
                  <td>Speciality</td>
                  <td>Natural</td>
                </tr>
                <tr>
                  <td>Caffeine content</td>
                  <td>Caffeinated</td>
                </tr>
              </tbody>
            </table>
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
