import React from 'react';
import Link from 'gatsby-link';
import BgImage from '../BgImage/BgImage';
import { siteMetadata } from '../../../gatsby-config';

const Header = ({ isHome, headerImage }) => {
  let content;
  
  if (isHome) {
    content = <span className="site-header__tagline"><Link to="/" exact className="site-header__title">{siteMetadata.title}</Link> is a freelance art therapist and artist based in Surrey.</span>;
  }
  else {
    content = <span className="site-header__tagline"><Link to="/" exact className="site-header__title">{siteMetadata.title}</Link></span>;
  }
  
  return (
    <header className={isHome ? 'site-header--home' : 'site-header'}>
      <div className="site-header__content">
        {content}
      </div>
      <BgImage sizes={headerImage.sizes} />
    </header>
  );  
};

export default Header;

