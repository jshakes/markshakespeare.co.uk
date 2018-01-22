import React from 'react';
import styles from './header.module.scss';
import NavItem from './NavItem';

const Nav = () => {
  return (
    <ul className={styles.nav}>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/services">Services</NavItem>
      <NavItem to="/contact">Contact</NavItem>
    </ul>
  );
};

export default Nav;
