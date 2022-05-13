import React from "react";
import { Link, graphql } from "gatsby";
import { IntlContextConsumer } from "gatsby-plugin-intl";

//Components
import Layout from "../components/layout";
import TitledContainer from "../components/titledContainer";
import RRenderer from "../components/richtextRenderer";

//Assets
import "./news.scss";
import Seo from "../components/seo";

import { formatDate } from "../utils/functions";

const News = ({ data, pageContext }) => {
  const { title, date, content, author } = data.news;
  const { edges } = data.otherNews;

  const genereateSideList = () => {
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
              sideList={genereateSideList()}
              title={currentLocale === "fr" ? "Communiqué De Presse" : "News Release"}
            >
              <div className="news-title-container px-16 py-5 rounded-lg">
                <h5 className="text-primary mb-4">{title}</h5>
                <span className="text-text font-smallest block">{formatDate(date, currentLocale)}</span>
                {author && <span className="text-text font-news-author block mt-4">{author}</span>}
              </div>
              <div className="pt-4 lg:pt-5 px-2 lg:px-16">
                <RRenderer
                  data={content}
                  config={{
                    p: "text-text",
                  }}
                />
                <div className="pt-3">
                  <Link
                    to={`/${pageContext.locale}/news`}
                    className="back-link text-secondary underline uppercase font-xs tracking-wider"
                  >
                    {currentLocale === "fr" ? "< Retour Aux Actualités" : "< Back To News"}
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
  query SingleNewsPageQuery($locale: String, $slug: String) {
    news: contentfulNews(ctaLink: { eq: $slug }, node_locale: { eq: $locale }) {
      author
      ctaLink
      ctaText
      title
      date
      content {
        raw
      }
    }

    otherNews: allContentfulNews(
      filter: { ctaLink: { ne: $slug, regex: "/^(?!http).*/" }, node_locale: { eq: $locale } }
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

export default News;
