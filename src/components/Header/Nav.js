import React from 'react';
import NavItem from './NavItem';

const Nav = () => {
  return (
    <ul>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/services">Services</NavItem>
      <NavItem to="/contact">Contact</NavItem>
    </ul>
  );
};

export default Nav;
