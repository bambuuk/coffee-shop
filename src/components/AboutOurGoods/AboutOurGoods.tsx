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
              Using carefully balanced and crafted combinations of quality arabica and robusta, 
              mostly from East Africa and Central America, with Aromistico we have developed distinct 
              Italian blends all different in strength and with distinguishing notes, but with 
              a reoccurring aftertaste theme. We hand roast each blend in our small roastery 
              located in the beautiful region of Lake Garda, Italy. Aromistico has pronounced respect 
              for traditions. Our in house coffee roaster has been used for over 40 years and it even 
              once used to operate by wood burning.
            </p>
          </div>
        </div>
        <div className="about-goods__black-line" />
      </div>
    </section>
  );
}

export default AboutOurGoods;
