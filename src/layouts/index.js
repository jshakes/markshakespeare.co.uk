import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { siteMetadata } from '../../gatsby-config';

import '../scss/main.scss';

const d = new Date();

export default props => {
  const isHome = props.location.pathname === '/';
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{ siteMetadata.title }</title>
        <link rel="canonical" href={siteMetadata.siteUrl} />
        <link rel="author" href={siteMetadata.author} />
      </Helmet>
      <Header isHome={isHome} headerImage={props.data.headerImage} />
      <div className="content-wrapper">
        <Navigation />
        {props.children()}
        <footer className="site-footer">&copy; Mark Shakespeare, {d.getFullYear()}</footer>
      </div>
    </div>
  );
};

export const pageQuery = graphql`
  query HeaderImageQuery {
    headerImage: imageSharp(id: { regex: "/header-bg/" }) {
      sizes(maxWidth: 1280 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
