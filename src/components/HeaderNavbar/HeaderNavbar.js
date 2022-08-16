import logo from '../../resources/img/icon_coffe_header_nav.svg';
import './headerNavbar.scss';

function HeaderNavbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-list__item">
          <img src={logo} alt="logo" className="navbar__logo" />
          <a className="navbar-list__link" href="#empty">Coffee house</a>
        </li>
        <li className="navbar-list__item"><a className="navbar-list__link" href="#empty">Our coffee</a></li>
        <li className="navbar-list__item"><a className="navbar-list__link" href="#empty">For your pleasure</a></li>
      </ul>
    </nav>
  );
}

export default HeaderNavbar;
