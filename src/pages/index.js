import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

const IndexPage = ({ data }) => (
  <div className="page">
    <h2>Art Therapy Services in Surrey</h2>
    <div className="page__two-columns">
      <div className="col">
        <p>Mark is available to hire for art therapy sessions, workshops and talks. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non aliquam turpis. Nam non eleifend lorem. Proin finibus feugiat velit, quis dignissim diam efficitur eget. Nam ullamcorper ligula at elit tempus dapibus.</p>
        <Link className="cta" to="/services">All services</Link>
      </div>
      <div className="col">
        <Link to="/services">
          <Img sizes={data.workshopImage.sizes} alt="Art therapy workshop" />
        </Link>
      </div>
    </div>
    <h2>Painting and drawing in the Surrey Hills</h2>
    <div className="page__two-columns">
      <div className="col">
        <p>Mark also continues to paint and draw. A small selection of his work can be found on this site, some of which is for sale.</p>
        <Link className="cta" to="/artwork">See artwork</Link>
      </div>
      <div className="col">
        <Link to="/artwork">
          <Img sizes={data.paintingImage.sizes} alt="Mark Shakespeare paintings" />
        </Link>
      </div>
    </div>
  </div>
);

export default IndexPage;

export const pageQuery = graphql`
  query HomePageImages {
    workshopImage: imageSharp(id: { regex: "/workshop/" }) {
      sizes(maxWidth: 560) {
        ...GatsbyImageSharpSizes
      }
    },
    paintingImage: imageSharp(id: { regex: "/artwork/1/" }) {
      sizes(maxWidth: 560) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
