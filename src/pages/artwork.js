import React from 'react';
import ImageGrid from '../components/ImageGrid';
import Page from '../components/Page';

const images = [
  {
    src: 'artwork/1.jpg'
  },
  {
    src: 'artwork/2.jpg'
  },
  {
    src: 'artwork/3.jpg'
  },
  {
    src: 'artwork/4.jpg'
  },
  {
    src: 'artwork/5.jpg'
  },
  {
    src: 'artwork/6.jpg'
  },
  {
    src: 'artwork/7.jpg'
  },
  {
    src: 'artwork/8.jpg'
  },
  {
    src: 'artwork/9.jpg'
  },
  {
    src: 'artwork/10.jpg'
  },
  {
    src: 'artwork/11.jpg'
  },
  {
    src: 'artwork/12.jpg'
  }
];

const ArtworkPage = ({ data }) => {
  const images = data.allFile.edges.map(edge => edge.node.childImageSharp);
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
            ...GatsbyImageSharpResolutions
          }
          large: resolutions(width: 1280) {
            ...GatsbyImageSharpResolutions
          }
        }
      }
    }
  }
}
`;
