module.exports = {
  siteMetadata: {
    title: 'Mark Shakespeare',
    author: 'Mark Shakespeare',
    description: 'Mark Shakespeare is a freelance art therapist and artist based in Dorking, Surrey',
    siteUrl: 'https://markshakespeare.co',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-6245948-8',
        anonymize: true,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify'
  ]
};
