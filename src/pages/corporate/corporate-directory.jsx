import React from "react";
import { graphql } from "gatsby";

import Hero from "../../components/hero";
import Directory from "../../containers/corporate/directory";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const CorporateDirectory = ({ data }) => {
  const { title, heroImage } = data.hero.nodes[0];

  return (
    <Layout inverted>
      <Seo title="Corporae directory" />
      <Hero title={title} image={heroImage} />
      <Directory data={data.offices.edges} />
    </Layout>
  );
};

export const query = graphql`
  query CorporateDirectory($locale: String) {
    hero: allContentfulCorporateDirectoryHero(
      filter: { node_locale: { eq: $locale } }
    ) {
      nodes {
        heroImage {
          file {
            url
          }
        }
        title
      }
    }
    offices: allContentfulCorporateDirectoryOffices(
      filter: { node_locale: { eq: $locale } }
    ) {
      edges {
        node {
          address {
            raw
          }
          name
          subtitle
          email
          phone
          phone2
          websiteUrl
        }
      }
    }
  }
`;

export default CorporateDirectory;
