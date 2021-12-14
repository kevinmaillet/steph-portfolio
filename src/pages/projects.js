import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/layout';

const Projects = ({ data }) => {
  // const displayProjectTitles = data.allWpPost.edges.map(({ node }) => {
  //   if (node.categories.nodes[0].name === 'Projects') {
  //     return (
  //       <article className="project">
  //         <Link to={node.slug} key={node.id}>
  //           <GatsbyImage
  //             image={
  //               node.featuredImage.node.localFile.childImageSharp
  //                 .gatsbyImageData
  //             }
  //             alt={node.featuredImage.node.alt}
  //           />
  //           <h4 className="project__title">{node.title}</h4>
  //         </Link>
  //       </article>
  //     );
  //   }
  // });

  const displayProjectTitles = data.allWpPost.edges
    .filter(({ node }) => node.categories.nodes[0].name === 'Projects')
    .map(({ node }) => (
      <article className="project">
        <Link to={node.slug} key={node.id}>
          <GatsbyImage
            image={
              node.featuredImage.node.localFile.childImageSharp.gatsbyImageData
            }
            alt={node.featuredImage.node.alt}
          />
          <h4 className="project__title">{node.title}</h4>
        </Link>
      </article>
    ));

  return (
    <Layout>
      <section className="projects">
        <h2 className="ideas__title">Projects</h2>
        <div className="project-display">{displayProjectTitles}</div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query wpPosts {
    allWpPost {
      edges {
        node {
          title
          id
          slug
          categories {
            nodes {
              name
            }
          }
          featuredImage {
            node {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    quality: 100
                    placeholder: BLURRED
                    layout: FULL_WIDTH
                    aspectRatio: 1
                    transformOptions: { cropFocus: CENTER }
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Projects;
