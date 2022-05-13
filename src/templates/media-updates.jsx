import React from "react";
import { Link, graphql } from "gatsby";
import { IntlContextConsumer } from "gatsby-plugin-intl";

//Components
import Layout from "../components/layout";
import TitledContainer from "../components/titledContainer";
import RRenderer from "../components/richtextRenderer";
import YouTubeVideo from "../components/you-tube-video/YouTubeVideo";

//Assets
import "./media-updates.scss";
import Seo from "../components/seo";

import { formatDate } from "../utils/functions";

const MediaUpdates = ({ data, pageContext }) => {
  const { title, date, content, author, videoLink } = data.mediaUpdates;
  const { edges } = data.otherMediaUpdates;

  const generateSideList = () => {
    return edges.map(({ node: { title, ctaLink } }) => ({
      title,
      ctaLink: `${pageContext.locale}/${ctaLink}`,
    }));
  };

  return (
    <Layout inverted>
      <Seo title={title} />
      <div className="mt-16 lg:mt-32" />
      <IntlContextConsumer>
        {({ language: currentLocale }) => {
          return (
            <TitledContainer
              sideList={generateSideList()}
              title={currentLocale === "fr" ? "Mises à jour des médias" : "Media Updates"}
            >
              <div className="media-updates-title-container px-16 py-5 rounded-lg">
                <h5 className="text-primary mb-4">{title}</h5>
                <span className="text-text font-smallest block">{formatDate(date, currentLocale)}</span>
                {author && <span className="text-text font-media-updates-author block mt-4">{author}</span>}
              </div>
              <div className="pt-4 lg:pt-5 px-2 lg:px-16">
                <div className="media-updates-video-container mb-4 lg:mb-5">
                  <YouTubeVideo media={videoLink} className="media-updates-video" />
                </div>
                <RRenderer
                  data={content}
                  config={{
                    p: "text-text",
                  }}
                />
                <div className="pt-3">
                  <Link
                    to={`/${pageContext.locale}/media-releases`}
                    className="back-link text-secondary underline uppercase font-xs tracking-wider"
                  >
                    {currentLocale === "fr" ? "< Retour Aux Médias" : "< Back To Media"}
                  </Link>
                </div>
              </div>
            </TitledContainer>
          );
        }}
      </IntlContextConsumer>
    </Layout>
  );
};

export const query = graphql`
  query SingleMediaUpdatesPageQuery($locale: String, $slug: String) {
    mediaUpdates: contentfulMediaUpdates(ctaLink: { eq: $slug }, node_locale: { eq: $locale }) {
      author
      ctaLink
      ctaText
      title
      date
      videoLink
      content {
        raw
      }
    }

    otherMediaUpdates: allContentfulMediaUpdates(
      filter: { ctaLink: { ne: $slug }, node_locale: { eq: $locale } }
      limit: 3
      sort: { fields: createdAt, order: DESC }
    ) {
      edges {
        node {
          title
          ctaLink
        }
      }
    }
  }
`;

export default MediaUpdates;
