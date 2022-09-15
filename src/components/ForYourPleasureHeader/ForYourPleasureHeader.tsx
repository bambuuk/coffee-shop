import HeaderNavbar from '../HeaderNavbar/HeaderNavbar';
import './ForYourPleasureHeader.scss';

function ForYourPleasureHeader() {
  return (
    <header className="for-you-pleasure">
      <div className="container">
        <HeaderNavbar />
        <h1 className="header__title header__title_pd-top60">For your pleasure</h1>
      </div>
    </header>
  );
}

export default ForYourPleasureHeader;
