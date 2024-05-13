import React from 'react';
import {Link} from 'gatsby';
import BgImage from '../BgImage/BgImage';
import logoSmall from '../../img/logo-small.svg';
import logoFull from '../../img/logo-full.svg';
import { siteMetadata } from '../../../gatsby-config';

const Header = ({ isHome, headerImage }) => {
  let content;
  
  if (isHome) {
    content = (
      <span className="site-header__tagline">
        <Link to="/" exact className="site-header__title">{siteMetadata.title}</Link> is a freelance art therapist and artist based in Surrey.
      </span>
    );
  }
  else {
    content = (
      <span className="site-header__tagline">
        <Link to="/" exact className="site-header__title">{siteMetadata.title}</Link>
      </span>
    );
  }
  const logo = isHome ? logoSmall : logoFull;
  return (
    <header className={isHome ? 'site-header--home' : 'site-header'}>
      <div className="site-header__content">
        <Link to="/" exact className="site-header__title">
          <img src={logo} alt="Mark Shakespeare" className="site-header__logo" />
        </Link>
        {
          isHome && 
          <span className="site-header__tagline">
            <Link to="/" exact className="site-header__title">{siteMetadata.title}</Link> is a freelance art therapist and artist based in Surrey.
          </span>
        }
      </div>
      <BgImage fixed={headerImage.childImageSharp.fixed} />
    </header>
  );  
};

export default Header;

