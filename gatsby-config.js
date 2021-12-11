module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
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
      // options: {
      //   formats: ['auto', 'webp'],
      //   quality: 100,
      //   breakpoints: [750, 1080, 1366, 1920],
      // },
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
      },
    },
  ],
};

//.gatsby-image-wrapper [data-main-image]
