import React from 'react';
import NavItem from './NavItem';

const Nav = () => {
  return (
    <div className="site-nav">
      <ul className="site-nav__items">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/services">Services</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </ul>
    </div>
  );
};

export default Nav;
