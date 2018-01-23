import React from 'react';
import NavItems from './NavItems';
import Link from 'gatsby-link';
import { siteMetadata } from '../../../gatsby-config';

const Header = () => {
  return (
    <header>
      <nav className="site-nav">
        <div className="content-wrapper" style={{ background: 'none' }}>
          <Link to="/" exact className="site-nav__title">{siteMetadata.title}</Link>
          <span className="site-nav__tagline">{siteMetadata.description}</span>
          <NavItems />
        </div>
      </nav>
    </header>
  );  
};

export default Header;
