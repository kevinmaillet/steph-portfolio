import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import '../styles/vendor/@wordpress/build-style/style.css';
import '../styles/vendor/@wordpress/build-style/theme.css';

const BlogPostTemplate = ({ data }) => {
  console.log(data.wpPost.content);
  return (
    <Layout>
      <section className="wp-post">
        <div className="wp-post__title">
          <h1>{data.wpPost.title}</h1>
        </div>

        <article
          dangerouslySetInnerHTML={{ __html: data.wpPost.content }}
          className="wp-post__content"
        />
      </section>
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
