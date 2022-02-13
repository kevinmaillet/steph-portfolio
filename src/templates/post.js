import React, { useRef } from 'react';
import useIntersectionObserverOnChildren from '../hooks/useIntersectionObserverOnChildren';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import '../styles/vendor/@wordpress/build-style/style.css';
import '../styles/vendor/@wordpress/build-style/theme.css';

const BlogPostTemplate = ({ data }) => {
  const containerRef = useRef(null)
  useIntersectionObserverOnChildren(containerRef);

  return (
    <Layout>
      <Seo title={data.wpPost.title} description={data.wpPost.excerpt} />

      <section className="wp-post">
        <div className="wp-post__title">
          <h1>{data.wpPost.title}</h1>
        </div>

        <article
          ref={containerRef}
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
      excerpt
    }
  }
`;
