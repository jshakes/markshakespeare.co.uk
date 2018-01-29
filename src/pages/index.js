import React from 'react';
import ImageGrid from '../components/ImageGrid';
import Link from 'gatsby-link';

const IndexPage = () => (
  <div>
    <div className="homepage-intro">
      <div className="col">
        <img className="homepage-intro__image" src="/images/workshop.jpg" alt="Art therapy workshop" />
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
