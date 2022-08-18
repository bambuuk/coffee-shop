import BlackLineWithLogo from '../BlackLineWithLogo/BlackLineWithLogo';

import AboutBeansImg from '../../resources/img/about_our_beans-2.jpg';
import './aboutBeans.scss';

function AboutBeans() {
  return (
    <section className="about-beans">
      <div className="container">
        <div className="about-beans_wrapper">
          <img className="about-beans__img" src={AboutBeansImg} alt="About our beans" />
          <div className="about-beans__description">
            <h2 className="title title_margin-top-9">About our beans</h2>
            <BlackLineWithLogo />
            <p className="about-beans__text">
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
        <div className="about-beans__black-line" />
      </div>
    </section>
  );
}

export default AboutBeans;
