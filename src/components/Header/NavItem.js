import React from 'react';
import Link from 'gatsby-link';

const NavItem = props => {
  return (
    <li className="site-nav__item">
      <Link className="site-nav__link" to={props.to}>{props.children}</Link>
    </li>
  );  
};

export default NavItem;
