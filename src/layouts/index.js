import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styles from './layout.module.scss';
import Header from '../components/Header';
import { siteMetadata } from '../../gatsby-config';

export default props => {
  console.log(props);
  return (
    <div className={styles.container}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{ siteMetadata.title }</title>
        <link rel="canonical" href={siteMetadata.siteUrl} />
        <link rel="author" href={siteMetadata.author} />
      </Helmet>
      <Header />
      {props.children()}
    </div>
  );
};
