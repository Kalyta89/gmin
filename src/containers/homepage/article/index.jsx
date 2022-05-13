import React from "react";
import { Link } from "gatsby";
import { IntlContextConsumer } from "gatsby-plugin-intl";

import { shortenText } from "../../../utils/functions";
import GradientButton from "../../../components/gradientButton";

import { formatDate } from "../../../utils/functions";

import "./index.scss";

const NewsAndMediaColumn = ({ title, link, items, tileClassName }) => {
  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) => {
        return (
          <div className="grid gap-4 grid-cols-1 latest-items-grid">
            <Link to={link} className="justify-self-start">
              <h3 className="text-secondary uppercase pb-2 ml-5 lg:ml-0">{title}</h3>
            </Link>
            {items.edges.map(({ node: { ctaLink, ctaText, title, date } }) => (
              <div className={`${tileClassName} rounded-lg px-5 md:px-7.5 py-6 md:py-9`}>
                <div className="h-20 text-primary font-2xl">
                  <div className="md:hidden lg:block">{shortenText(title, 40)}</div>
                  <div className="hidden md:block lg:hidden">{shortenText(title, 30)}</div>
                </div>
                <div className="font-smallest mb-3 md:mt-3 text-text">{formatDate(date, currentLocale)}</div>
                <Link className="text-secondary underline uppercase font-xs" to={ctaLink}>
                  {ctaText}
                </Link>
              </div>
            ))}
          </div>
        );
      }}
    </IntlContextConsumer>
  );
};

const Article = ({ quickLinks, news, mediaUpdates }) => {
  return (
    <section className="intro-section pt-6 md:pt-20 pb-4 md:pb-12">
      <div className="max-w-78 mx-auto">
        <div className="grid gap-x-24 gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 px-4">
          <div className="col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4">
              <NewsAndMediaColumn
                items={news}
                tileClassName={"article-container"}
                title={quickLinks.title}
                link={quickLinks.titleLink}
              />
              <NewsAndMediaColumn
                items={mediaUpdates}
                tileClassName={"media-container"}
                title={quickLinks.mediaUpdatesTitle}
                link={quickLinks.mediaUpdatesTitleLink}
              />
            </div>
          </div>
          <div className="flex col-span-2 flex-wrap-reverse lg:flex-wrap lg:col-span-1 px-4 lg:p-0">
            <div className="w-full">
              <h3 className="text-secondary uppercase border-secondary border-b border-solid mr-20 pb-5">
                {quickLinks.quickLinksTitle}
              </h3>
              <div className="mb-2 pt-3" />
              {quickLinks.quickLinks.items.map((v, i) => (
                <Link
                  className="text-secondary uppercase article-link-underline underline font-xs no-light block mt-4"
                  to={v.link}
                >
                  {v.title}
                </Link>
              ))}
            </div>
            <div className="w-full mb-12 lg:mb-0">
              <p className="pt-4 lg:pt-32 pb-5 text-text">{quickLinks.content}</p>
              <GradientButton>
                <Link href={quickLinks.ctaLink}>{quickLinks.ctaText}</Link>
              </GradientButton>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap p-4"></div>
      </div>
    </section>
  );
};

export default Article;
