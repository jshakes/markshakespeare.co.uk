import React from 'react';
import ImageGrid from '../components/ImageGrid';
import Page from '../components/Page';

// Captions in order of source filename alphabetical from /src/images/artwork
const captions = [
  'Acrylic on Canvas, 2016',
  'Charcoal, 2016',
  'Oil pastel, 2013',
  'Acrylic on Canvas, 2016',
  'Acrylic on Canvas, 2016',
  'Acrylic on Canvas, 2016',
  'Charcoal, 2016',
  'Acrylic on Canvas, 2016',
  'Acrylic on Canvas, 2016',
  'Acrylic on Canvas, 2016',
  'Oil pastel, 2013',
  'Charcoal, 2016',
];

const ArtworkPage = ({ data }) => {
  const images = data.allFile.edges.map(({ node }, index) => {
    const { thumbnail, large } = node.childImageSharp;
    return {
      thumbnail,
      large: { 
        ...large,
        caption: captions[index],
        srcSet: large.srcSet.split(',')
      }
    };
  });
  console.log(images);
  return (
    <Page title="Artwork">
      <p>Mark continues to paint and draw. A small selection of his artwork can be found below. For sales enquiries, please email markjshakespeare@gmail.com.</p>
      <ImageGrid images={images} />
    </Page>
  );  
};

export default ArtworkPage;

export const pageQuery = graphql`
query ArtworkPageImages {
  allFile(filter: {id: {regex: "/img/artwork/"}}) {
    edges {
      node {
        childImageSharp {
          thumbnail: resolutions(width: 364, height: 364) {
            ...GatsbyImageSharpResolutions_noBase64
          }
          large: sizes(maxWidth: 1280) {
            ...GatsbyImageSharpSizes_noBase64
          }
        }
      }
    }
  }
}
`;
