import React from "react";

import { Link } from 'react-router-dom';

import favourites from '../../../../public/images/favourites.svg';
import Logo from '../../../../public/images/logo.png';

import './footer.scss';

const Footer = () => {
  return (
    <footer>
      <img src={Logo} className="logo" />
      <div className="favourites-link">
        <Link to="/wishlist">
          <img src={favourites} />
          <span>Your wishlist!</span>
        </Link>
      </div>

    </footer>
  )
};

export default Footer;