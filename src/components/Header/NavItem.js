import React from 'react';
import Link from 'gatsby-link';

const NavItem = props => {
  return (
    <li>
      <Link to={props.to}>{props.children}</Link>
    </li>
  );  
};

export default NavItem;
