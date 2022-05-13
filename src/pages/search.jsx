import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import SearchedContent from '../containers/search/SearchedContent';

const CorporateDirectory = ({ data }) => {
  return (
    <Layout inverted>
      <Seo title='Search' />
      <SearchedContent data={data} />
    </Layout>
  );
};

export const query = graphql`
  query SearchQuery($locale: String) {
    news: allContentfulNews(
      filter: { node_locale: { eq: $locale } }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          ctaText
          ctaLink
          title
          date(formatString: "MM-DD-YYYY")
          formattedDate: date(formatString: "MMM DD, YYYY")
          content {
            raw
          }
        }
      }
    }

    reports: allContentfulReportsDisclosuresReports(
      filter: { node_locale: { eq: $locale } }
    ) {
      edges {
        node {
          date(formatString: "MMM DD, YYYY")
          title
          linkText
          linkUrl
        }
      }
    }
  }
`;

export default CorporateDirectory;
