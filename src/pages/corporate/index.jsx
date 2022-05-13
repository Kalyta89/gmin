import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Hero from "../../components/hero";
import GoldBox from "../../components/goldbox";
import Documents from "../../containers/corporate/documents";
import Seo from "../../components/seo";

const Coporate = ({ data }) => {
  const { title, heroImage } = data.hero.nodes[0];
  const { title: title2, content } = data.commitment.nodes[0];
  return (
    <Layout inverted>
      <Seo title="Corporate" />
      <Hero title={title} image={heroImage} />
      <GoldBox title={title2} main={content} white/>
      <Documents
        data={
          data.docs.nodes[0]
            .childrenContentfulCorporateGovernanceReferenceDocumentsDocumentsJsonNode[0]
        }
        title={
          data.docs.nodes[0].title
        }
      />
    </Layout>
  );
};

export const query = graphql`
  query CorporateGovernance($locale: String) {
    hero: allContentfulCorporateGovernanceHero(
      filter: { node_locale: { eq: $locale } }
    ) {
      nodes {
        title
        heroImage {
          file {
            url
          }
          title
        }
      }
    }
    commitment: allContentfulCorporateGovernanceOurCommitment(
      filter: { node_locale: { eq: $locale } }
    ) {
      nodes {
        title
        content {
          raw
        }
      }
    }
    docs: allContentfulCorporateGovernanceReferenceDocuments(
      filter: { node_locale: { eq: $locale } }
    ) {
      nodes {
        title
        childrenContentfulCorporateGovernanceReferenceDocumentsDocumentsJsonNode {
          items {
            title
            items {
              download_link
              title
              type
            }
          }
        }
      }
    }
  }
`;

export default Coporate;
