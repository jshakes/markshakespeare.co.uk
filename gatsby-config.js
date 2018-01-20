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
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet'
  ]
};
