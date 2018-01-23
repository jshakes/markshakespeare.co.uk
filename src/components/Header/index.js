import React from 'react';
import NavItems from './NavItems';
import Link from 'gatsby-link';
import { siteMetadata } from '../../../gatsby-config';

const Header = () => {
  return (
    <header>
      <nav className="site-nav">
        <Link to="/" exact className="site-nav__title">
          <h2>{siteMetadata.title}</h2>
        </Link>
        <h5>{siteMetadata.description}</h5>
        <NavItems />
      </nav>
    </header>
  );  
};

export default Header;
