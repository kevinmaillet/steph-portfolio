import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { GatsbyImage } from 'gatsby-plugin-image';

const HomePage = ({ data }) => {
  const featuredImage =
    data.wpPost.featuredImage.node.localFile.childImageSharp.gatsbyImageData;
  const altText = data.wpPost.featuredImage.node.altText;
  //   data.wpPost.featuredImage.node.childImageSharp.gatsbyImageData;
  // const altText = data.wpPost.featuredImage.node.altText;
  return (
    <Layout>
      <section className="home">
        <GatsbyImage image={featuredImage} alt={altText} />
      </section>
    </Layout>
  );
};

export const query = graphql`
  query getHomePost {
    wpPost(title: { eq: "Home" }) {
      id
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
