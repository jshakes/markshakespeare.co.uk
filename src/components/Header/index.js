import React from 'react';
import Link from 'gatsby-link';
import { siteMetadata } from '../../../gatsby-config';

const Header = props => {
  const { isHome } = props;
  let content;
  
  if (isHome) {
    content = <span className="site-header__tagline"><Link to="/" exact className="site-header__title">{siteMetadata.title}</Link> is a freelance art therapist and artist based in Dorking, Surrey.</span>;
  }
  else {
    content = <span className="site-header__tagline"><Link to="/" exact className="site-header__title">{siteMetadata.title}</Link></span>;
  }
  
  return (
    <header className={isHome ? 'site-header--home' : 'site-header'}>
      <div className="content-wrapper" style={{ background: 'none' }}>
        {content}
      </div>
    </header>
  );  
};

export default Header;
