import React from 'react';
import Helmet from 'react-helmet';
import {siteMetadata} from '../../../gatsby-config';
import Layout from "../Layout";

const Page = ({title, children}) => (
    <Layout>
        <div className="page">
            <Helmet>
                <title>{`${title} - ${siteMetadata.title}`}</title>
                <meta property="og:title" content={`${title} - ${siteMetadata.title}`}/>
            </Helmet>
            <h1 className="page__title">{title}</h1>
            {children}
        </div>
    </Layout>
);

export default Page;
