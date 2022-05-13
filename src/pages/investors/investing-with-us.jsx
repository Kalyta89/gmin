import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Hero from "../../components/hero";
import OurMission from "../../containers/about-us/OurMission";
import ExceptionalContent from "../../containers/investors/exceptional";
import Achivements from "../../containers/investors/activements";
import Approach from "../../containers/investors/approach";
import Seo from "../../components/seo";

const InvestingWithUs = ({ data }) => {
  const { heroImage, title, subtitle } = data.hero.nodes[0];

  return (
    <Layout inverted>
      <Seo title="Investing with us" />
      <Hero title={title} slogan={subtitle} image={heroImage} />
      <OurMission data={data.ourmission.nodes[0]} />
      <Achivements data={data.achivements.nodes[0]} />
      <ExceptionalContent data={data.exceptional.nodes[0]} />
      <Approach data={data.approach.nodes[0]} />
    </Layout>
  );
};

export const query = graphql`
  query InvestingWithUs($locale: String) {
    hero: allContentfulInvestingWithUsHero(
      filter: { node_locale: { eq: $locale } }
    ) {
      nodes {
        title
        heroImage {
          file {
            url
          }
        }
      }
    }
    ourmission: allContentfulInvestingWithUsOurMission(
      filter: { node_locale: { eq: $locale } }
    ) {
      nodes {
        title
        content {
          raw
        }
      }
    }
    achivements: allContentfulInvestingWithUsFeatures(
      filter: { node_locale: { eq: $locale } }
    ) {
      nodes {
        issuedSharedCapitalHeading
        issuesSharedCapital
        primaryStockTitle
        primaryStockImage {
          file {
            url
          }
        }
      }
    }
    exceptional: allContentfulInvestingWithUsContent(
      filter: { node_locale: { eq: $locale } }
    ) {
      nodes {
        title
        content {
          raw
        }
        image {
          file {
            url
          }
        }
      }
    }
    approach: allContentfulInvestingWithUsSelfPerformApproach(
      filter: { node_locale: { eq: $locale } }
    ) {
      nodes {
        title
        rightContent {
          raw
        }
        leftContent {
          raw
        }
      }
    }
  }
`;

export default InvestingWithUs;
