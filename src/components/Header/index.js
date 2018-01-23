import React from 'react';
import Nav from './Nav';
import Link from 'gatsby-link';
import { siteMetadata } from '../../../gatsby-config';

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <h2>{siteMetadata.title}</h2>
        </Link>
        <h5>{siteMetadata.description}</h5>
      </div>
      <Nav />
    </header>
  );  
};

export default Header;
