import { NavLink } from 'react-router-dom';
import BlackLineWithLogo from '../BlackLineWithLogo/BlackLineWithLogo';
// import footerBeansCoffee from '../../resources/img/footer_beans.svg';
import './footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__navbar">
        <ul className="footer__list">
          <li className="footer__item">
            {/* <img src={footerBeansCoffee} alt="coffee beans" className="footer__logo" /> */}
            <NavLink 
              to="/"
              style={({ isActive }) => ({ color: isActive ? '#fc7107' : '#000' })}
              className="footer__link" 
            >
              Coffee house
            </NavLink>
          </li>
          <li className="footer__item">
            <NavLink 
              to="/our-coffee"
              style={({ isActive }) => ({ color: isActive ? '#fc7107' : '#000' })}
              className="footer__link" 
            >
              Our coffee
            </NavLink>
          </li>
          <li className="footer__item">
            <NavLink 
              to="/for-your-pleasure"
              style={({ isActive }) => ({ color: isActive ? '#fc7107' : '#000' })}
              className="footer__link" 
            >
              For your pleasure
            </NavLink>
          </li>
        </ul>
      </nav>
      <BlackLineWithLogo />
    </footer>
  );
}

export default Footer;
