import React from 'react';
import ImageGrid from '../components/ImageGrid';
import Page from '../components/Page';

const AboutPage = props => {
  return (
    <Page title="Artwork">
      <p>Mark continues to paint and draw. A small selection of his artwork can be found below. For sales enquiries, please email markjshakespeare@gmail.com.</p>
      <ImageGrid />
    </Page>
  );  
};

export default AboutPage;
