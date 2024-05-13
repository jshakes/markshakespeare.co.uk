import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => (
  <div className="page home-page">
    <h2>Art Workshops in Surrey</h2>
    <div className="home-page__module">
      <div className="home-page__copy-container">
        <p>Mark trained as an art therapist and has over thirty years of experience working in the NHS and as a freelancer. He is available to hire for individual sessions, workshops and talks.</p>
        <Link className="cta" to="/services">All services</Link>
      </div>
      <div className="home-page__image-container">
        <Link to="/services">
          <Img sizes={data.workshopImage.sizes} alt="Art therapy workshop" />
        </Link>
        <Link className="cta" to="/services">All services</Link>
      </div>
    </div>
    <h2>Painting and drawing in the Surrey Hills</h2>
    <div className="home-page__module">
      <div className="home-page__copy-container">
        <p>Mark also continues to paint and draw. A small selection of his work can be found on this site, some of which is for sale.</p>
        <Link className="cta" to="/artwork">See artwork</Link>
      </div>
      <div className="home-page__image-container">
        <Link to="/artwork">
          <Img sizes={data.paintingImage.sizes} alt="Mark Shakespeare paintings" />
        </Link>
        <Link className="cta" to="/artwork">See artwork</Link>
      </div>
    </div>
  </div>
);

export default IndexPage;

export const pageQuery = graphql`
  query HomePageImages {
    workshopImage: imageSharp(id: { regex: "/workshop/" }) {
      fixed(width: 560) {
        ...GatsbyImageSharpFixed
      }
    }
    paintingImage: imageSharp(id: { regex: "/artwork/ranmore-pastel/" }) {
      fixed(width: 560) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;
