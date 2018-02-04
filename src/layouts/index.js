import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import WebFont from 'webfontloader';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { siteMetadata } from '../../gatsby-config';

import '../scss/main.scss';

const d = new Date();

export default ({ data, location, children }) => {
  WebFont.load({
    google: {
      families: [`PT Sans`, `PT Serif`]
    },
    async: true
  });
  const isHome = location.pathname === '/';
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{ siteMetadata.title }</title>
        <meta name="author" content={siteMetadata.author} />
        <meta name="description" content={siteMetadata.description} />        
        <link rel="canonical" href={siteMetadata.siteUrl} />
        <meta property="og:title" content={siteMetadata.title} />
        <meta property="og:description" content={siteMetadata.description} />
        <meta property="og:image" content={`${siteMetadata.siteUrl}${data.ogImage.resize.src}`} />
        <meta property="og:site_name" content={siteMetadata.title} />
        <meta property="og:url" content={siteMetadata.siteUrl} />
        <meta property="og:locale" content={siteMetadata.locale} />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <Header isHome={isHome} headerImage={data.headerImage} />
      <div className="content-wrapper">
        <Navigation />
        {children()}
        <footer className="site-footer">&copy; Mark Shakespeare, {d.getFullYear()}</footer>
      </div>
    </div>
  );
};

export const pageQuery = graphql`
  query LayoutImages {
    headerImage: imageSharp(id: { regex: "/header-bg/" }) {
      sizes(maxWidth: 1440 ) {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    ogImage: imageSharp(id: { regex: "/artwork/1/" }) {
      resize(width: 1280) {
        src
      }
    }
  }
`;
