import React, { useState } from "react";
import { Link } from "gatsby";
import { IntlContextConsumer } from "gatsby-plugin-intl";

import TitledContainer from "../../../components/titledContainer";
import "./index.scss";

const numPerPage = 8;

const SedarFillings = ({ data }) => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");

  let pagLen = 1;

  const generatePagination = () => {
    const pagination = [];
    let pgCount = Math.ceil(
      data.filter(({ node: { date } }) => {
        return !filter || date === filter;
      }).length / numPerPage
    );

    pagLen = pgCount;
    for (; pgCount > 0; pgCount--) {
      pagination.unshift(pgCount);
    }
    return pagination;
  };

  const generateDates = () => {
    const allDates = [];

    data.forEach(({ node: { date } }) => {
      const year = new Date(date).getFullYear().toString();
      !allDates.includes(year) && year && allDates.push(year);
    });

    return allDates;
  };

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) => (
        <TitledContainer
          title={currentLocale === "fr" ? "Depots Sedar" : "Sedar Filings"}
          sideList={generateDates()}
          sideNoWrap
          pagination={generatePagination()}
          page={page}
          setPage={setPage}
          setFilter={setFilter}
          pagLen={pagLen}
        >
          <ul className="flex flex-col mb-6 lg:mb-10">
            {data
              .filter(({ node: { date } }) => {
                return !filter || filter === new Date(date).getFullYear().toString();
              })
              .slice((page - 1) * numPerPage, (page - 1) * numPerPage + numPerPage)
              .map(({ node: { date, link, title, type } }) => (
                <li className="reports-file-single rounded-lg py-4 px-6 flex mb-2 items-start lg:items-center">
                  <span className="pr-3 font-bold text-text w-8/12 lg:w-1/2">
                    {type}
                  </span>
                  <span className="lg:items-center flex-1 flex flex-col lg:flex-row lg:pl-10">
                    <span className="font-xs order-1 uppercase">{date}</span>
                    <span className="flex-1 flex items-center lg:order-2 lg:pl-10">
                      <Link
                        to={link}
                        className="text-primary underline uppercase font-xs"
                      >
                        {title}
                      </Link>
                    </span>
                  </span>
                </li>
              ))}
          </ul>
        </TitledContainer>
      )}
    </IntlContextConsumer>
  );
};

export default SedarFillings;
