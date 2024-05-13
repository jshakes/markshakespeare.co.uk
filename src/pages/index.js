import React from 'react';
import Img from 'gatsby-image';
import {graphql, Link} from 'gatsby'
import Layout from '../components/Layout';

const IndexPage = ({data}) => (
    <Layout isHome={true}>
        <div className="page home-page">
            <h2>Art Workshops in Surrey</h2>
            <div className="home-page__module">
                <div className="home-page__copy-container">
                    <p>Mark trained as an art therapist and has over thirty years of experience working in the NHS and
                        as a freelancer. He is available to hire for individual sessions, workshops and talks.</p>
                    <Link className="cta" to="/services">All services</Link>
                </div>
                <div className="home-page__image-container">
                    <Link to="/services">
                        <Img fluid={data.workshopImage.childImageSharp.fluid} alt="Art therapy workshop"/>
                    </Link>
                    <Link className="cta" to="/services">All services</Link>
                </div>
            </div>
            <h2>Painting and drawing in the Surrey Hills</h2>
            <div className="home-page__module">
                <div className="home-page__copy-container">
                    <p>Mark also continues to paint and draw. A small selection of his work can be found on this site,
                        some of which is for sale.</p>
                    <Link className="cta" to="/artwork">See artwork</Link>
                </div>
                <div className="home-page__image-container">
                    <Link to="/artwork">
                        <Img fluid={data.paintingImage.childImageSharp.fluid} alt="Mark Shakespeare paintings"/>
                    </Link>
                    <Link className="cta" to="/artwork">See artwork</Link>
                </div>
            </div>
        </div>
    </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query HomePageImages {
    workshopImage: file(relativePath: { eq: "workshop.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 560) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    
    paintingImage: file(relativePath: { eq: "artwork/ranmore-pastel.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 560) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
