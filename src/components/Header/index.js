import React from 'react';
import Nav from './Nav';
import { siteMetadata } from '../../../gatsby-config';

const Header = () => {
  return (
    <header>
      <div>
        <h2>{siteMetadata.title}</h2>
        <h5>{siteMetadata.description}</h5>
      </div>
      <Nav />
    </header>
  );  
};

export default Header;
