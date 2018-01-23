import React from 'react';
import Link from 'gatsby-link';

const NavItem = props => {
  return (
    <li className="site-nav__item">
      <Link exact className="site-nav__link" activeClassName="site-nav__link--active" to={props.to}>{props.children}</Link>
    </li>
  );  
};

export default NavItem;
