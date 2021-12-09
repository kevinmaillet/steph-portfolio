import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import '@wordpress/block-library/build-style/style.css';
import '@wordpress/block-library/build-style/theme.css';

const BlogPostTemplate = ({ data }) => {
  return (
    <Layout>
      <main className="wp-post">
        <h1 className="wp-post__title">{data.wpPost.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: data.wpPost.content }}
          className="wp-post__content"
        />
      </main>
    </Layout>
  );
};
export default BlogPostTemplate;

export const query = graphql`
  query ($id: String) {
    wpPost(id: { eq: $id }) {
      title
      content
    }
  }
`;
