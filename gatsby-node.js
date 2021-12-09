const path = require(`path`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const BlogPostTemplate = path.resolve('./src/templates/post.js');

  const result = await graphql(`
    {
      allWpPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const BlogPosts = result.data.allWpPost.edges;
  BlogPosts.forEach((post) => {
    createPage({
      path: `/projects/${post.node.slug}`,
      component: BlogPostTemplate,
      context: {
        id: post.node.id,
      },
    });
  });
};
