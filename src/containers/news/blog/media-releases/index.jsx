import React, { useState } from "react";
import { Link } from "gatsby";
import { IntlContextConsumer } from "gatsby-plugin-intl";
import uniq from "lodash.uniq";

import { shortenText } from "../../../../utils/functions";
import RRenderer from "../../../../components/richtextRenderer";
import { ChevronRight } from "../../../../components/icon";
import YouTubeVideo from "../../../../components/you-tube-video/YouTubeVideo";

import { formatDate } from "../../../../utils/functions";

import "./index.scss";

const MediaReleases = ({ data }) => {
  const [page, setPage] = useState(1);
  const [filteredYear, setFilteredYear] = useState("");
  let pagLen = 1;

  const years = data.map(({ node: { date } }) => {
    let year = new Date(date.replace(/-/g, "/")).getFullYear().toString();
    return year;
  });

  const filteredData = data.filter((item) => {
    let year = new Date(item.node.date.replace(/-/g, "/"))
      .getFullYear()
      .toString();
    return year.includes(filteredYear);
  });

  const renderPagination = () => {
    const pagination = [];
    let pgCount = Math.ceil(filteredData.length / 4);

    pagLen = pgCount;
    for (; pgCount > 0; pgCount--) {
      pagination.unshift(pgCount);
    }
    return pagination.map((num) => (
      <li
        className={`text-secondary cursor-pointer font-xs ${
          num === page && "underline media-blog-underline-offset"
        }`}
        onClick={() => setPage(num)}
      >
        {num}
      </li>
    ));
  };

  const renderCtaLink = (currentLocale, ctaLink, ctaText) => {
    if (ctaLink.startsWith("http")) {
      return (
        <a
          href={ctaLink}
          target="_blank"
          className="font-xs text-secondary underline media-blog-underline-offset uppercase tracking-wider mt-4"
        >
          {ctaText || "Read the Article"} {">"}
        </a>
      );
    }
    return (
      <Link
        to={`/${currentLocale}/${ctaLink}`}
        className="font-xs text-secondary underline media-blog-underline-offset uppercase tracking-wider mt-3"
      >
        {ctaText || "Read the Article"} {">"}
      </Link>
    );
  };

  return (
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) => {
        return (
          <div className="py-8 lg:pt-24 lg:pb-12 lg:mx-10">
            <div className="global-x-spacing px-0 lg:px-16 max-w-78 mx-auto">
              <h3 className="text-secondary uppercase border-b border-secondary pb-4 mb-4 lg:mb-5">
                {currentLocale === "fr" ? "Filtrer par date" : "Filter by date"}
              </h3>
              <div className="lg:flex justify-between">
                <div className="mb-6 lg:mb-0">
                  <ul className="flex lg:flex-col lg:gap-4 gap-x-12 gap-y-3 flex-wrap">
                    {uniq(years).map((year) => (
                      <li
                        className="text-secondary underline media-blog-underline-offset font-xs cursor-pointer"
                        onClick={() => setFilteredYear(year)}
                      >
                        {year}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="media-blog-container lg:mr-10">
                  <div className="-mx-4 md:mx-0 grid grid-cols-1 lg:grid-cols-2 gap-y-5 media-blog-grid mb-10 lg:mb-12">
                    {filteredData
                      .slice((page - 1) * 4, page * 4)
                      .map(
                        ({
                          node: {
                            content,
                            ctaLink,
                            ctaText,
                            videoLink,
                            title,
                            date,
                          },
                        }) => (
                          <div className="article flex flex-col rounded-lg py-5 lg:py-9 px-7.5">
                            <h5 className="text-primary capitalize h-18">
                              <div className="md:hidden lg:block leading-7">
                                {shortenText(title, 40)}
                              </div>
                              <div className="hidden md:block lg:hidden">
                                {shortenText(title, 80)}
                              </div>
                            </h5>
                            <h5 className="text-text font-xs mt-4">
                              {formatDate(date, currentLocale)}
                            </h5>
                            <div className="media-blog-video-container mt-5">
                              <YouTubeVideo media={videoLink} className="media-blog-video" />
                            </div>
                            <div className="flex-1 text-text media-read-more-content mt-3">
                              <RRenderer
                                data={content}
                                config={{
                                  ul: "mt-1",
                                }}
                              />
                            </div>
                            {renderCtaLink(currentLocale, ctaLink, ctaText)}
                          </div>
                        )
                      )}
                  </div>
                  <div className="pagination media-blog-pagination">
                    <div className="flex items-center">
                      <div
                        onClick={() => {
                          setPage((prev) => (prev - 1 < 1 ? 1 : prev - 1));
                        }}
                        className="media-chevron-left cursor-pointer"
                      >
                        <ChevronRight size={18} />
                      </div>
                      <ul className="flex flex-1 justify-center gap-10">
                        {renderPagination()}
                      </ul>
                      <div
                        className="cursor-pointer"
                        onClick={() => {
                          setPage((prev) =>
                            prev + 1 > pagLen ? pagLen : prev + 1
                          );
                        }}
                      >
                        <ChevronRight size={18} className="media-chevron-right" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </IntlContextConsumer>
  );
};

export default MediaReleases;
