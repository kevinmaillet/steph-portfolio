import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

const About = ({ data }) => {
  const posts = data.allWpPost.edges.map(({ node }) => {
    return { title: node.title, content: node.content };
  });

  return (
    <Layout>
      <section className="about">
        <h2 className="about__title">
          {posts.find((post) => post.title === 'About').title}
        </h2>
        <div
          dangerouslySetInnerHTML={{
            __html: posts.find((post) => post.title === 'About').content,
          }}
          className="about__paragraph"
        />
      </section>

      <section className="research-methods">
        <h3 className="research-methods__title">Research Methods</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: posts.find((post) => post.title === 'List').content,
          }}
          className="about-list"
        />
      </section>
    </Layout>
  );
};

export const query = graphql`
  query getListAndAbout {
    allWpPost(filter: { title: { in: ["List", "About"] } }) {
      edges {
        node {
          title
          content
        }
      }
    }
  }
`;

export default About;
