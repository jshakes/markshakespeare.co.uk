import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

const IndexPage = ({ data }) => (
  <div>
    <div className="homepage-intro">
      <div className="col">
        <Img sizes={data.workshopImage.sizes} alt="Art therapy workshop" />
      </div>
      <div className="col">
        <p>Mark is available to hire for art therapy sessions, workshops and talks. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non aliquam turpis. Nam non eleifend lorem. Proin finibus feugiat velit, quis dignissim diam efficitur eget. Nam ullamcorper ligula at elit tempus dapibus.</p>
        <Link className="cta" to="/services">All services</Link>
      </div>
    </div>
    <hr />
    <p>Mark also continues to paint and draw. A small selection of his work can be found below.</p>
    <Link className="cta" to="/artwork">See more</Link>
  </div>
);

export default IndexPage;

export const pageQuery = graphql`
  query WorkshopImage {
    workshopImage: imageSharp(id: { regex: "/workshop/" }) {
      sizes(maxWidth: 560) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
