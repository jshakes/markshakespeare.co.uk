import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import { siteMetadata } from '../../gatsby-config';

import '../scss/main.scss';

const d = new Date();

export default props => {
  return (
    <div className="content-wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{ siteMetadata.title }</title>
        <link rel="canonical" href={siteMetadata.siteUrl} />
        <link rel="author" href={siteMetadata.author} />
      </Helmet>
      <Header />
      {props.children()}
      <footer className="site-footer">&copy; Mark Shakespeare, {d.getFullYear()}</footer>
    </div>
  );
};
