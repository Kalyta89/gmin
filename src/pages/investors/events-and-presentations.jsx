import React from "react";
import { graphql } from "gatsby";

import Hero from "../../components/hero";
import Events from "../../containers/eventsAndPresentation/events";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const CorporateDirectory = ({ data }) => {
  const { title, heroImage } = data.hero.nodes[0];

  return (
    <Layout inverted>
      <Seo title="Events with presentation" />
      <Hero title={title} image={heroImage} />
      <Events data={data.events.edges} />
    </Layout>
  );
};

export const query = graphql`
  query EventsAndPresentationQuery($locale: String) {
    events: allContentfulEventsPresentationsEvents(
      filter: { node_locale: { eq: $locale } }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          title
          date(formatString: "MM-DD-YYYY")
          formattedDate: date(formatString: "MMM DD, YYYY")
          linkTitle
          linkUrl
          image {
            file {
              url
            }
          }
        }
      }
    }
    hero: allContentfulEventsPresentationsHero(
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
  }
`;

export default CorporateDirectory;
