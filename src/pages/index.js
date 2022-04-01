import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { GatsbyImage } from 'gatsby-plugin-image';

const HomePage = ({ data }) => {
  const featuredImage =
    data.wpPost.featuredImage.node.localFile.childImageSharp.gatsbyImageData;
  const altText = data.wpPost.featuredImage.node.altText;

  return (
    <Layout>
      <Seo title="Home" />
      <section className="home">
        <article
          dangerouslySetInnerHTML={{ __html: data.wpPost.content }}
          className="wp-post__content"
          style={{ position: `absolute`, zIndex: `50`, paddingLeft: `10%` }}
        />
        <GatsbyImage image={featuredImage} alt={altText} />
      </section>
    </Layout>
  );
};

export const query = graphql`
  query getHomePost {
    wpPost(title: { eq: "Home" }) {
      id
      content
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                placeholder: DOMINANT_COLOR
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
    }
  }
`;

export default HomePage;
