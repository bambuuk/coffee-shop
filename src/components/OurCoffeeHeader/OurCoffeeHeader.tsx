import HeaderNavbar from '../HeaderNavbar/HeaderNavbar';

import './ourCoffeeHeader.scss';

function OurCoffeeHeader() {
  return (
    <header className="our-coffee-header">
      <div className="container">
        <HeaderNavbar />
        <h1 className="header__title header__title_pd-top60">Our Coffee</h1>
      </div>
    </header>
  );
}

export default OurCoffeeHeader;
