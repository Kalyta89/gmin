import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Hero from "../../components/hero";
import OurMission from "../../containers/about-us/OurMission";
import OurStory from "../../containers/about-us/OurStory";
import LegacyTimeline from "../../containers/about-us/LegacyTimeline";
import Seo from "../../components/seo";

const AboutUs = ({ data }) => {
  const { heroBackground, title, subtitle } = data.hero.nodes[0];

  return (
    <Layout inverted>
      <Seo title="About us" />
      <Hero title={title} slogan={subtitle} image={heroBackground} />
      <OurMission data={data.ourmission.nodes[0]} />
      <OurStory data={data.ourstory.nodes[0]} />
      <LegacyTimeline data={data.legacytimeline.nodes[0]} colored={true} />
    </Layout>
  );
};

export const query = graphql`
  query AboutQuery($locale: String) {
    hero: allContentfulAboutUsHero(filter: { node_locale: { eq: $locale } }) {
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
    legacytimeline: allContentfulAboutUsOurLegacy(
      filter: { node_locale: { eq: $locale } }
    ) {
      nodes {
        title
        timeline {
          items {
            content
            title
            year
          }
        }
        icons {
          file {
            url
          }
        }
        content {
          content
        }
      }
    }
    ourmission: allContentfulAboutUsOurMission(
      filter: { node_locale: { eq: $locale } }
    ) {
      nodes {
        title
        content {
          raw
        }
      }
    }
    ourstory: allContentfulAboutUsOurStory(
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
        imageLeftBottom {
          file {
            url
          }
        }
        imageRightBottom {
          file {
            url
          }
        }
      }
    }
  }
`;

export default AboutUs;
