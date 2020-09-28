import React from 'react';
import logoPng from '../assets/img/logo.png';
import { Link } from 'react-router-dom';

function Header () {
    return(
    <div className="header">
      <Link to="/" className='header__link'>
        <div className="header__logo">
          <img src={logoPng} alt="Logo" />
          <div>
            <h1>Page Title</h1>
          </div>
        </div>
      </Link>
      <Link to="/" className='header__link'>
        <div className="header__logout">
              <span>Logout</span>
        </div>
      </Link>
    </div>

    )
}

export default Header;