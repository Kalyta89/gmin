import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Hero from "../../components/hero";
import OurValues from "../../containers/about-us/OurValues";
import Description from "../../containers/about-us/Description";
import OurOperationals from "../../containers/about-us/OurOperational";
import { MarketingPosition } from "./../../containers/homepage";
import Seo from "../../components/seo";

const OurPurposeAndValue = ({ data }) => {
  const { heroBackground, title, subtitle } = data.hero.nodes[0];
  return (
    <Layout inverted>
      <Seo title="Our purpose and values" />
      <Hero title={title} slogan={subtitle} image={heroBackground} />
      <MarketingPosition data={data.marketposition.nodes[0]} white className="bg-white py-10 lg:py-18.5" />
      <Description data={data.heading.nodes[0]} />
      <OurValues data={data.ourvalues.nodes[0]} />
      <OurOperationals data={data.operationalstandards.nodes[0]} />
    </Layout>
  );
};

export const query = graphql`
  query OurPurposeAndValues($locale: String) {
    hero: allContentfulOurPurposeAndValuesHero(
      filter: { node_locale: { eq: $locale } }
    ) {
      nodes {
        title
        subtitle
        heroBackground {
          file {
            url
          }
        }
      }
    }
    heading: allContentfulOurPurposeAndValuesHeading(
      filter: { node_locale: { eq: $locale } }
    ) {
      nodes {
        title
      }
    }

    marketposition: allContentfulMarketPositionOurPurposeAndValues(
      filter: { node_locale: { eq: $locale } }
    ) {
      nodes {
        title
        subtitle
        content {
          raw
        }
        features {
          items {
            title
            content
          }
        }
      }
    }

    ourvalues: allContentfulOurPurposeAndValuesOurValues(
      filter: { node_locale: { eq: $locale } }
    ) {
      nodes {
        title
        shortDescription
        content {
          raw
        }
        values {
          items {
            title
          }
        }
      }
    }

    operationalstandards: allContentfulOperationalStandardsOurPurposeAndValues(
      filter: { node_locale: { eq: $locale } }
    ) {
      nodes {
        title
        content {
          raw
        }
      }
    }
  }
`;

export default OurPurposeAndValue;
