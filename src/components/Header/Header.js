import HeaderNavbar from '../HeaderNavbar/HeaderNavbar';
import beansLogo from '../../resources/img/icon_coffe_descr.svg';

import './header.scss';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <HeaderNavbar />
        <h1 className="header__title">Everything You Love About Coffee</h1>
        <div className="line-with-logo">
          <div className="line-with-logo__line" />
          <img src={beansLogo} className="line-with-logo__logo" alt="beans logo" />
          <div className="line-with-logo__line" />
        </div>
        <div className="header__subtitle">
          <span className="header__subtitle__line">We makes every day full of energy and taste</span>
          <span className="header__subtitle__line">Want to try our beans?</span>
        </div>
        <div className="more-info">More</div>
      </div>
    </header>
  );
}

export default Header;
