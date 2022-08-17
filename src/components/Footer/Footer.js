import BlackLineWithLogo from '../BlackLineWithLogo/BlackLineWithLogo';
import footerBeansCoffee from '../../resources/img/footer_beans.svg';
import './footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__navbar">
        <ul className="footer__list">
          <li className="footer__item">
            <img src={footerBeansCoffee} alt="coffee beans" className="footer__logo" />
            <a className="footer__link" href="#empty">Coffee house</a>
          </li>
          <li className="footer__item"><a className="footer__link" href="#empty">Our coffee</a></li>
          <li className="footer__item"><a className="footer__link" href="#empty">For your pleasure</a></li>
        </ul>
      </nav>
      <BlackLineWithLogo />
    </footer>
  );
}

export default Footer;
