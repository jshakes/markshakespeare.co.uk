import React from 'react';
import Link from 'gatsby-link';
import { siteMetadata } from '../../../gatsby-config';

const Header = () => {
  return (
    <header className="site-header">
      <div className="content-wrapper" style={{ background: 'none' }}>
        <Link to="/" exact className="site-header__title">{siteMetadata.title}</Link>
        <span className="site-header__tagline">{siteMetadata.description}</span>
      </div>
    </header>
  );  
};

export default Header;
