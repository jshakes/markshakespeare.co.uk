import React from 'react';
import NavItem from './NavItem';

const Navigation = () => {
  return (
    <nav className="site-nav">
      <ul className="site-nav__items">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/services">Services</NavItem>
        <NavItem to="/artwork">Artwork</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </ul>
    </nav>
  );
};

export default Navigation;
