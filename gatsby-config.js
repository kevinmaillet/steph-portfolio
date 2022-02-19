module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.stephmeltzer.com',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: false, // optional parameter to include script in development
        id: '2839865',
        sv: '6',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: ['/thanks', '/404', '/404.html'],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Steph Meltzer Portfolio`,
        short_name: `Steph Meltzer`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: 'content/assets/favicon.png',
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
          requestConcurrency: 1,
        },
      },
    },
  ],
};
