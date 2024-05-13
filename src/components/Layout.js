import React from 'react';
import Helmet from 'react-helmet';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import { siteMetadata } from '../../gatsby-config';
import { graphql, useStaticQuery } from 'gatsby'
import '../scss/main.scss';

const d = new Date();

export default ({ children, isHome }) => {
  const query = useStaticQuery(graphql`
      query LayoutImages {
        headerImage: file(relativePath: { eq: "header-bg.jpg" }) {
          childImageSharp {
            fixed(width: 1440) {
              ...GatsbyImageSharpFixed
            }
          }
        }       
        ogImage: file(relativePath: { eq: "artwork/peter.jpg" }) {
          childImageSharp {
            resize(width: 1280) {
               src
            }
          }
        }
      }
    `);

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
        <meta property="og:image" content={`${siteMetadata.siteUrl}${query.ogImage.childImageSharp.resize.src}`} />
        <meta property="og:site_name" content={siteMetadata.title} />
        <meta property="og:url" content={siteMetadata.siteUrl} />
        <meta property="og:locale" content={siteMetadata.locale} />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <Header isHome={isHome} headerImage={query.headerImage} />
      <div className="content-wrapper">
        <Navigation />
        {children}
        <footer className="site-footer">&copy; Mark Shakespeare, {d.getFullYear()}</footer>
      </div>
    </div>
  );
};
