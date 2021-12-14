module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.stephmeltzer.com',
    title: 'steph-portfolio',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-sharp',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/content/assets`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: 'https://wp.stephmeltzer.com/graphql',
        schema: {
          requestConcurrency: 50,
        },
      },
    },
  ],
};
