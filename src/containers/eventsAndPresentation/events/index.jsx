import React, { useState } from "react";
import { Link } from "gatsby";
import { IntlContextConsumer } from "gatsby-plugin-intl";

import TitledContainer from "../../../components/titledContainer";
import "./index.scss";

const Events = ({ data }) => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState(null);
  let pagLen = 1;

  const generatePagination = () => {
    const pagination = [];
    let pgCount = Math.ceil(data.length / 4);
    pagLen = pgCount;
    for (; pgCount > 0; pgCount--) {
      pagination.unshift(pgCount);
    }
    return pagination;
  };

  const generateFilters = () => {
    const yearsArray = [];

    data.forEach((edge) => {
      // Fetching year
      const date = edge.node.formattedDate;
      const year = new Date(date).getFullYear();

      console.log('year >>', year);

      if (!yearsArray.includes(year)) {
        yearsArray.push(year);
      }
    });
    return yearsArray;
  };

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) => (
        <TitledContainer
          title={currentLocale === 'fr' ? 'FILTRER PAR DATE' : 'SORT BY DATE'}
          sideList={generateFilters()}
          pagination={generatePagination()}
          page={page}
          setPage={setPage}
          pagLen={pagLen}
          setFilter={setFilter}
          filter={filter}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 mb-4 lg:mb-10 gap-4">
            {data.map(
              ({ node: { image, title, linkTitle, linkUrl, formattedDate } }) => (
                <div className="event-card-container rounded-xl overflow-hidden">
                  <div className="card-image">
                    <img src={image?.file?.url} alt={title} className="w-full h-full" />
                  </div>
                  <div className="card-detail flex flex-col gap-3 p-6">
                    <h5 className="text-primary">{title}</h5>
                    <p className="text-text font-xs uppercase">{formattedDate}</p>
                    <Link
                      to={linkUrl}
                      className="font-xs underline uppercase text-secondary"
                    >
                      {linkTitle}
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>
        </TitledContainer>
      )}
    </IntlContextConsumer>
  );
};

export default Events;
