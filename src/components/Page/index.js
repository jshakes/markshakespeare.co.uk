import React from 'react';
import Helmet from 'react-helmet';
import { siteMetadata } from '../../../gatsby-config';

const Page = ({ title, children }) => {
  return (
    <div>
      <Helmet>
        <title>{title} - {siteMetadata.title}</title>
      </Helmet>
      <h1>{title}</h1>
      {children}
    </div>
  );  
};

export default Page;
