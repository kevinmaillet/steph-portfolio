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
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // Remote schema query type. This is an arbitrary name.
        // typeName: 'WPGraphQL',
        // Field name under which it will be available. Used in your Gatsby query. This is also an arbitrary name.
        // fieldName: 'wpcontent',
        // GraphQL endpoint, relative to your WordPress home URL.
        url: 'https://wp.stephmeltzer.com/graphql',
        // html: {
        //   useGatsbyImage: true,
        //   imageQuality: 90,
        //   createStaticFiles: true,
        // },
        // develop: {
        //   hardCacheMediaFiles: true,
        // },
      },
    },
  ],
};

//.gatsby-image-wrapper [data-main-image]
