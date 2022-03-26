import React from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import Auth from '../../utils/auth';
//import images
import Logo from "../../assets/Header/logo.png"
const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
      <nav className="navbar">
        {Auth.loggedIn() ? (
          <>
            <div className='navbar-brand'>
              <a className='navbar-item' href="/">
                <img src={Logo} alt="logo" />Sparkling Spaces
              </a>
            </div>
            <div className='navbar-menu is-active'>
              <div className='navbar-end'>
                <Link to="/" onClick={logout} className='navbar-item'>
                  Logout
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className='navbar-brand'>
              <a className='navbar-item' href="/">
                <img src={Logo} alt="logo" />Sparkling Spaces
              </a>
            </div>
            <div className='navbar-menu'>
              <div className='navbar-end'>
                <Link to="/login" className='navbar-item'>
                  Login
                </Link>
                <Link to="/signup" className='navbar-item'>
                  Sign Up
                </Link>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};
export default Header;