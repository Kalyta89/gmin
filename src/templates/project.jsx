import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Hero from "../components/hero";
import Article from "../containers/project/Article";
import Seo from "../components/seo";

const Project = ({ data }) => {
  const { node } = data.allContentfulProject.edges[0];
  const { heroTitle, heroImage } = node;

  return (
    <Layout inverted>
      <Seo title={heroTitle} />
      <Hero title={heroTitle} image={heroImage} />
      <Article data={node} />
    </Layout>
  );
};

export const query = graphql`
  query ProjectQuery($locale: String, $slug: String) {
    allContentfulProject(
      filter: { slug: { eq: $slug }, node_locale: { eq: $locale } }
    ) {
      edges {
        node {
          slug
          bottomText {
            raw
          }
          content {
            raw
            references {
              ... on ContentfulAsset {
                contentful_id
                __typename
                title
                file {
                  url
                }
              }
            }
          }
          heading
          heroTitle

          heroImage {
            file {
              url
            }
          }
        }
      }
    }
  }
`;

export default Project;
