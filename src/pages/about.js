import { graphql } from 'gatsby';
import React, { useRef } from 'react';
import useIntersectionObserverOnChildren from '../hooks/useIntersectionObserverOnChildren';
import Layout from '../components/layout';
import Seo from '../components/seo';

const About = ({ data }) => {
  const containerRef = useRef(null);
  useIntersectionObserverOnChildren(containerRef)
  const about = data.allWpPost.edges.find(({ node }) => node.title === 'About');
  const methods = data.allWpPost.edges.find(
    ({ node }) => node.title === 'Methods'
  );

  return (
    <Layout>
      <Seo title="About" description={about.node.excerpt} />
      <section className="about">
        <h3 className="about__title">{about.node.title}</h3>
        <div
          ref={containerRef}
          dangerouslySetInnerHTML={{
            __html: about.node.content,
          }}
          className="about__paragraph"
        />
      </section>

      <section className="research-methods">
        <h4 className="research-methods__title">Methods</h4>
        <div
          dangerouslySetInnerHTML={{
            __html: methods.node.content,
          }}
          className="about-list"
        />
      </section>
    </Layout>
  );
};

export const query = graphql`
  query getListAndAbout {
    allWpPost(filter: { title: { in: ["Methods", "About"] } }) {
      edges {
        node {
          title
          content
          excerpt
        }
      }
    }
  }
`;

export default About;
