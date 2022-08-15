import Header from '../Header/Header';
import beansLogo from '../../resources/img/icon_coffe_descr.svg';
import './app.scss';

function App() {
  return (
    <section className="main">
      <div className="container">
        <Header />
        <h1 className="main__title">Everything You Love About Coffee</h1>
        <div className="line-with-logo">
          <div className="line-with-logo__line" />
          <img src={beansLogo} className="line-with-logo__logo" alt="beans logo" />
          <div className="line-with-logo__line" />
        </div>
        <div className="main__subtitle">
          <span className="main__subtitle__line">We makes every day full of energy and taste</span>
          <span className="main__subtitle__line">Want to try our beans?</span>
        </div>
        <div className="more-info">More</div>
      </div>
    </section>
  );
}

export default App;
