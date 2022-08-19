import { NavLink } from 'react-router-dom';

import logo from '../../resources/img/icon_coffe_header_nav.svg';
import './headerNavbar.scss';

function HeaderNavbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-list__item">
          <img src={logo} alt="logo" className="navbar__logo" />
          <NavLink 
            to="/"
            style={({ isActive }) => ({ color: isActive ? '#fc7107' : '#fff' })}
            className="navbar-list__link" 
            href="#empty"
          >
            Coffee house
          </NavLink>
        </li>
        <li className="navbar-list__item">
          <NavLink 
            to="/our-coffee"
            style={({ isActive }) => ({ color: isActive ? '#fc7107' : '#fff' })}
            className="navbar-list__link" 
            href="#empty"
          >
            Our coffee
          </NavLink>
        </li>
        <li className="navbar-list__item">
          <NavLink 
            to="/for-your-pleasure"
            style={({ isActive }) => ({ color: isActive ? '#fc7107' : '#fff' })}
            className="navbar-list__link" 
            href="#empty"
          >
            For your pleasure
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavbar;
