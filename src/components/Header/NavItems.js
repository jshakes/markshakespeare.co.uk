import React from 'react';
import NavItem from './NavItem';

const NavItems = () => {
  return (
    <ul className="site-nav__items">
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/services">Services</NavItem>
      <NavItem to="/contact">Contact</NavItem>
    </ul>
  );
};

export default NavItems;
