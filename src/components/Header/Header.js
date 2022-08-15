import logo from '../../resources/img/icon_coffe_header_nav.svg';
import './header.scss';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <ul className="header-list">
            <li className="header-list__item">
              <img src={logo} alt="logo" className="header__logo" />
              <a className="header-list__link" href="#empty">
                Coffee house
              </a>
            </li>
            <li className="header-list__item"><a className="header-list__link" href="#empty">Our coffee</a></li>
            <li className="header-list__item"><a className="header-list__link" href="#empty">For your pleasure</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
