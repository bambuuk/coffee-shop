import { NavLink } from 'react-router-dom';
import './headerNavbar.scss';

function HeaderNavbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-list__item">
          <NavLink 
            to="/"
            style={({ isActive }) => ({ color: isActive ? '#fc7107' : '#fff' })}
            className="navbar-list__link" 
          >
            Coffee house
          </NavLink>
        </li>
        <li className="navbar-list__item">
          <NavLink 
            to="/our-coffee"
            style={({ isActive }) => ({ color: isActive ? '#fc7107' : '#fff' })}
            className="navbar-list__link" 
          >
            Our coffee
          </NavLink>
        </li>
        <li className="navbar-list__item">
          <NavLink 
            to="/for-your-pleasure"
            style={({ isActive }) => ({ color: isActive ? '#fc7107' : '#fff' })}
            className="navbar-list__link" 
          >
            For your pleasure
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavbar;
