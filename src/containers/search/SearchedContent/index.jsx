import React from 'react';
import { Link } from 'gatsby';
import { IntlContextConsumer } from 'gatsby-plugin-intl';
import { useQueryParam, StringParam } from 'use-query-params';

// Components
import TitledContainer from '../../../components/titledContainer';

const SearchedContent = ({ data }) => {
  const [query, _] = useQueryParam('query', StringParam); // eslint-disable-line no-unused-vars
  if(!query) return null;

  const { news, reports } = data;
  let totallength = 0;

  return (
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) => {
        return (
          <div className='mt-16'>
            <TitledContainer title={`SEARCH RESULTS: "${query}"`}>
              {/* News */}
              {news.edges
                .filter(({ node: { title } }) =>
                  title.toLowerCase().includes(query.toLowerCase())
                )
                .map(({ node: { title, ctaLink, formattedDate } }) => {
                  totallength++;
                  return (
                    <div className='bg-primary flex py-4 px-5 rounded-lg mb-2'>
                      <Link
                        to={`/${currentLocale}/${ctaLink}`}
                        className='flex-1 uppercase underline text-primary'
                      >
                        {title}
                      </Link>
                      <div className='uppercase'>{formattedDate}</div>
                    </div>
                  );
                })}
              {/* Reports */}
              {reports.edges
                .filter(({ node: { title } }) =>
                  title.toLowerCase().includes(query.toLowerCase())
                )
                .map(({ node: { title, date, linkUrl } }) => {
                  totallength++;
                  return (
                    <div className='bg-primary flex py-4 px-5 rounded-lg mb-2'>
                      <Link
                        to={linkUrl}
                        className='flex-1 uppercase underline text-primary'
                      >
                        {title}
                      </Link>
                      <div className='uppercase'>{date}</div>
                    </div>
                  );
                })}
              {totallength === 0 && (
                <div>
                  No results found for current query, try searching for
                  something else
                </div>
              )}
            </TitledContainer>
          </div>
        );
      }}
    </IntlContextConsumer>
  );
};

export default SearchedContent;
