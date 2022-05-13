import React from "react";
import { graphql } from "gatsby";

import Hero from "../components/hero";
import Layout from "../components/layout";
import Seo from "../components/seo";
import MediaReleases from "../containers/news/blog/media-releases";

const MediaReleasesPage = ({ data }) => {
  const { title, heroImage } = data.hero.nodes[0];
  const { edges } = data.news;

  return (
    <Layout inverted>
      <Seo title="News" />
      <Hero title={title} image={heroImage} />
      <MediaReleases data={edges} />
    </Layout>
  );
};

export const query = graphql`
  query MediaReleasesQuery($locale: String) {
    hero: allContentfulMediaReleasesPageHero(
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
    news: allContentfulMediaUpdates(
      filter: { node_locale: { eq: $locale } }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          ctaText
          ctaLink
          videoLink
          title
          date(formatString: "MM-DD-YYYY")
          content {
            raw
          }
        }
      }
    }
  }
`;

export default MediaReleasesPage;
