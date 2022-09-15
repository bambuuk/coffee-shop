import beansLogoBlack from '../../resources/img/icon_coffe_about_us_and_footer.svg';

function BlackLineWithLogo() {
  return (
    <div className="line-with-logo">
      <div className="line-with-logo__line line-with-logo__line_black" />
      <img src={beansLogoBlack} className="line-with-logo__logo" alt="beans logo" />
      <div className="line-with-logo__line line-with-logo__line_black" />
    </div>
  );
}

export default BlackLineWithLogo;
