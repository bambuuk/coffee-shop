import BlackLineWithLogo from '../BlackLineWithLogo/BlackLineWithLogo';

import cupWithCoffee from '../../resources/img/cup-with-coffee.jpg';
import './aboutOurGoods.scss';

function AboutOurGoods() {
  return (
    <section className="about-goods">
      <div className="container">
        <div className="about-goods__wrapper">
          <img className="about-goods__img" src={cupWithCoffee} alt="About our beans" />
          <div className="about-goods__description">
            <h2 className="title title_margin-top-9">About our goods</h2>
            <BlackLineWithLogo />
            <p className="about-goods__text">
              Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
              <br />
              <br />
              Afraid at highly months do things on at. Situation
              recommend objection do intention
              <br />
              so questions.
              <br />
              As greatly removed calling pleased improve an.
              <br />
              Last ask him cold feel
              <br />
              met spot shy want. Children me laughing we prospect answered followed. At it went
              <br />
              is song that held help face.
            </p>
          </div>
        </div>
        <div className="about-goods__black-line" />
      </div>
    </section>
  );
}

export default AboutOurGoods;
