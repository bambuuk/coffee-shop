import BlackLineWithLogo from '../BlackLineWithLogo/BlackLineWithLogo';

import AboutBeansImg from '../../resources/img/about_our_beans-2.jpg';
import './aboutBeans.scss';

function AboutBeans() {
  return (
    <section className="about-beans">
      <div className="container">
        <div className="about-beans__wrapper">
          <img className="about-beans__img" src={AboutBeansImg} alt="About our beans" />
          <div className="about-beans__description">
            <h2 className="title title_margin-top-9">About our beans</h2>
            <BlackLineWithLogo />
            <p className="about-beans__text">
              Our 100% Arabica coffee is hand roasted in small batches and packaged at the peak of its cycle to
              preserve its natural flavors and fresh-roasted quality. We use 100 percent organic and natural
              coffee beans, certified by the USDA and CCOF.
              <br />
              Our 25 years of combined roasting experience allow us to roast coffee to maximize
              its health benefits, while preserving its great taste and quality.
            </p>
          </div>
        </div>
        <div className="about-beans__black-line" />
      </div>
    </section>
  );
}

export default AboutBeans;
