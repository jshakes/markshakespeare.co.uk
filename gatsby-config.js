module.exports = {
  siteMetadata: {
    title: 'Mark Shakespeare',
    author: 'Mark Shakespeare',
    description: 'Mark Shakespeare is a freelance art therapist and artist based in Dorking, Surrey',
    siteUrl: 'https://markshakespeare.co',
  },
  plugins: [ 
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-6245948-8',
        anonymize: true,
      },
    },    
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/img/`
      }
    }, 
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/img/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-plugin-netlify'
  ]
};

