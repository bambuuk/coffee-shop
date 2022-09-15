import BlackLineWithLogo from '../BlackLineWithLogo/BlackLineWithLogo';
import './aboutUs.scss'; 

function AboutUs() {
  return (
    <section className="about-company">
      <div className="container">
        <h2 className="title title_margin-top-80">About Us</h2>
        <BlackLineWithLogo />
        <div className="about-company__description">
          <p className="about-company__text">
            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            Afraid at highly months do things on at. Situation recommend objection do intention
            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
            met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face.
          </p>
          <br />
          <p className="about-company__text">
            Now residence dashwoods she excellent you. Shade being under his bed her, Much
            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
            horrible but confined day end marriage. Eagerness furniture set preserved far
            recommend. Did even but nor are most gave hope. Secure active living depend son
            repair day ladies now.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
