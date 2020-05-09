import React from 'react';
import ImageGrid from '../components/ImageGrid/ImageGrid';
import Page from '../components/Page/Page';

const sections = [
  {
    title: 'Pastel and charcoal',
    works: [
      {
        file: 'pastel-woods-1.jpg',
        caption: 'Pastel on paper',
      },
      {
        file: 'pastel-woods-2.jpg',
        caption: 'Pastel on paper',
      },
      {
        file: 'pastel-woods-3.jpg',
        caption: 'Pastel on paper',
      },
      {
        file: 'pastel-woods-4.jpg',
        caption: 'Pastel on paper',
      },
      {
        file: 'pastel-woods-5.jpg',
        caption: 'Pastel on paper',
      },
      {
        file: 'pastel-woods-6.jpg',
        caption: 'Pastel on paper',
      },
      {
        file: 'pastel-woods-7.jpg',
        caption: 'Pastel on paper',
      },
      {
        file: 'ranmore.jpg',
        caption: 'Pencil on paper',
      },
      {
        file: 'welsh-road.jpg',
        caption: 'Pencil on board',
      },
      {
        file: 'south-france.jpg',
        caption: 'Pastel on board',
      },
      {
        file: 'hollow-lane.jpg',
        caption: 'Pencil on paper',
      },
      {
        file: 'charcoal-hedge.jpg',
        caption: 'Charcoal on paper',
      },
      {
        file: 'yew-trees.jpg',
        caption: 'Charcoal on paper',
      },
      {
        file: 'south-france-2.jpg',
        caption: 'Pastel on board',
      },
      {
        file: 'still-life.jpg',
        caption: 'Pastel on paper',
      },
      {
        file: 'ranmore-pastel.jpg',
        caption: 'Pastel on paper',
      },
      {
        file: 'venice-canal.jpg',
        caption: 'Pastel on paper',
      },
      {
        file: 'venice.jpg',
        caption: 'Pastel on paper',
      },
      {
        file: 'richmond-park.jpg',
        caption: 'Pastel on paper',        
      },
      {
        file: 'murano.jpg',
        caption: 'Pastel on paper',        
      },
      {
        file: 'southbank.jpg',
        caption: 'Pastel on paper',        
      },
    ],
  },
  {
    title: 'Acrylic',
    works: [
      {
        file: 'radnor.jpg',
        caption: 'Acrylic on board',
      },
      {
        file: 'peter.jpg',
        caption: 'Acrylic on board',
      },
      {
        file: 'italian-village.jpg',
        caption: 'Acrylic on canvas',
      },
      {
        file: 'italian-village-2.jpg',
        caption: 'Acrylic on canvas',
      },
      {
        file: 'yorkshire-sunset.jpg',
        caption: 'Acrylic on board',
      },
      {
        file: 'stone-wall.jpg',
        caption: 'Acrylic on board',
      },
      {
        file: 'radnor-2.jpg',
        caption: 'Acrylic on board',
      },
      {
        file: 'perrotts.jpg',
        caption: 'Acrylic on canvas',
      },
      {
        file: 'venice-2.jpg',
        caption: 'Acrylic on canvas',
      },
    ],
  },
  {
    title: 'Sketchbooks',
    works: [
      {
        file: 'otto.jpg',
        caption: 'Pencil on paper',
      },
      {
        file: 'otto-2.jpg',
        caption: 'Pencil on paper',
      },
      {
        file: 'chickens.jpg',
        caption: 'Pencil on paper',
      },
      {
        file: 'cows.jpg',
        caption: 'Pencil on paper',
      },
      {
        file: 'cows-2.jpg',
        caption: 'Pencil on paper',
      },
      {
        file: 'manhattan.jpg',
        caption: 'Pen on paper',
      },
      {
        file: 'walmer.jpg',
        caption: 'Pen on paper',
      },
      {
        file: 'kingsdown.jpg',
        caption: 'Pen on paper',
      },
    ],
  },
  {
    title: 'Watercolour',
    works: [
      {
        file: 'cornac.jpg',
        caption: 'Watercolour on paper',
      }
    ]
  },
  {
    title: 'Life drawing',
    works: [
      {
        file: 'life-drawing-1.jpg',
        caption: 'Pencil on paper'
      },
      {
        file: 'life-drawing-2.jpg',
        caption: 'Sepia on paper'
      },
      {
        file: 'life-drawing-3.jpg',
        caption: 'Charcoal and chalk on paper'
      },
      {
        file: 'life-drawing-4.jpg',
        caption: 'Charcoal on paper'
      },
    ]
  }
];

const ArtworkPage = ( { data } ) => {
  const allImages = {};

  data.allFile.edges.forEach( ( { node } ) => {
    const { childImageSharp, ext, name } = node;

    if ( ! childImageSharp ) {
      return;
    }

    const { thumbnail, large } = childImageSharp;

    allImages[ `${name}${ext}` ] = {
      thumbnail,
      large: {
        ...large,
        srcSet: large.srcSet.split(',')
      }
    };
  });

  return (
    <Page title="Artwork">
      <p>Mark continues to paint and draw. A small selection of his artwork can be found below. For sales enquiries, please email markjshakespeare@gmail.com.</p>
      {
        sections.map( ( { title, works } ) => {
          const images = works.map( work => ( {
            ...work,
            ...allImages[ work.file ]
          } ) );

          return (
            <section>
              <h2>{title}</h2>
              <ImageGrid images={images} />
            </section>
          );
        } )
      }
    </Page>
  );  
};

export default ArtworkPage;

export const pageQuery = graphql`
query ArtworkPageImages {
  allFile(
    filter: {
      id: {
        regex: "/img/artwork/"
      }
    }
  ) {
    edges {
      node {
        ext
        name
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
