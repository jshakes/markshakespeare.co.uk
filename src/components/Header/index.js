import React from 'react';
import styles from './header.module.scss';
import Nav from './Nav';
import { siteMetadata } from '../../../gatsby-config';

const Header = () => {
  return (
    <header className={styles.siteHeader}>
      <div>
        <h2 className={styles.siteTitle}>{siteMetadata.title}</h2>
        <h5 className={styles.siteDescription}>{siteMetadata.description}</h5>
      </div>
      <Nav />
    </header>
  );  
};

export default Header;
