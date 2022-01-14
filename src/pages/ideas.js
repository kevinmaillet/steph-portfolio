import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const Ideas = ({ data }) => {

  const { content } = data.wpPost;

  return (
    <Layout>
      <Seo title="Ideas" />
      <section className="ideas">
        <h2 className="ideas__title">Ideas</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </section>
    </Layout>
  );
};

export const query = graphql`
query getIdeasPost {
  wpPost(title: {eq: "Ideas"}) {
    id
    content
  }
}

`;

export default Ideas;
