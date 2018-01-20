import React from 'react';
import Link from 'gatsby-link';
import styles from './header.module.scss';

const NavItem = props => {
  return (
    <li className={styles.navItem}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  );  
};

export default NavItem;
