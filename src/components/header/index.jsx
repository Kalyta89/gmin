import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery, Link, navigate } from "gatsby";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";
import { useLocation } from "@reach/router";

import { Search } from "../icon";
import "./index.scss";
import Logo from "../../images/logo.png";
import CrossIcon from "../../images/crossicon.png";
import ArrowDownBlack from "../../images/down-arrow-black.png";
import ArrowDownWhite from "../../images/down-arrow-white.png";

import { commaDelineation } from "../../utils/functions";
import { useApplyAfterWidth } from "../../utils/hooks";

const languageName = {
  "en-US": "EN",
  fr: "FR",
};

const Header = ({ inverted }) => {
  const [stockItem, setStockItem] = useState(null);
  const [isExpanded, toggleExpansion] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [isInverted, setInverted] = useState(inverted);
  const [langOpen, setLangOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const isDesktop = useApplyAfterWidth(1023);
  const {
    projectsFr,
    contentFulNavigationsFr,
    projectsEn,
    contentFulNavigationsEn,
  } = useStaticQuery(graphql`
    query allProjectPagesQueryAndSiteTitleQueryFrench {
      site {
        siteMetadata {
          title
        }
      }
      projectsFr: allContentfulProject(filter: { node_locale: { eq: "fr" } }) {
        edges {
          node {
            heroTitle
            slug
          }
        }
      }
      contentFulNavigationsFr: allContentfulNavigation(
        filter: { node_locale: { eq: "fr" } }
      ) {
        nodes {
          links {
            links {
              items {
                path
                title
                items {
                  path
                  title
                }
              }
            }
          }
        }
      }
      projectsEn: allContentfulProject(
        filter: { node_locale: { eq: "en-US" } }
      ) {
        edges {
          node {
            heroTitle
            slug
          }
        }
      }

      contentFulNavigationsEn: allContentfulNavigation(
        filter: { node_locale: { eq: "en-US" } }
      ) {
        nodes {
          links {
            links {
              items {
                path
                title
                items {
                  path
                  title
                }
              }
            }
          }
        }
      }
    }
  `);

  function scrollFunction() {
    if (typeof window != "undefined") {
      if (window.pageYOffset > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }
  }

  useEffect(() => {
    if (typeof window != "undefined") {
      window.onscroll = function () {
        scrollFunction();
      };
    }
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        var stock = await fetch(
          `${process.env.GATSBY_STOCK_TRACK_URL}&symbol=${process.env.GATSBY_STOCK_SYMBOL}&apikey=${process.env.GATSBY_STOCK_API_KEY}`,
          {
            headers: { "Content-Type": "application/json" },
          }
        )
          .then((re) => re.json())
          .then((res) => res["Global Quote"]);
      } catch (error) {
        console.log("Stock fetch error: ", error);
      }

      try {
        var spot = await fetch(process.env.GATSBY_GOLD_API_URL, {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": process.env.GATSBY_GOLD_API_KEY,
          },
        })
          .then((re) => re.json())
          .then((res) => res["ask"]);
      } catch (error) {
        console.log("Spot fetch error: ", error);
      }

      setStockItem({
         stockPrice: stock
          ? `${Number(stock["05. price"]).toFixed(2)} CAD`
          : "0",
        marketCap: stock ? commaDelineation(stock["06. volume"]) : "0",
        spotGold: `${commaDelineation(Number(spot).toFixed(2))} USD`,
      });
    }
    if (isDesktop) fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDesktop]);

  return (
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) => {
        let navigations;

        if (currentLocale === "fr") {
          let currentEdges = projectsFr.edges;
          currentEdges = currentEdges.map(({ node }) => {
            return {
              title: node.heroTitle,
              path: `/${node.slug}`,
            };
          });

          const projectsLinks = {
            title: "PROJETS",
            path: currentEdges[0].path,
            items: currentEdges,
          };
          navigations = contentFulNavigationsFr.nodes[0].links.links.items;

          navigations[4] = projectsLinks;

          navigations[5] = {
            title: "CONTACT",
            path: "/contact-us",
          };
        } else {
          let currentEdges = projectsEn.edges;
          currentEdges = currentEdges.map(({ node }) => {
            return {
              title: node.heroTitle,
              path: `/${node.slug}`,
            };
          });

          const projectsLinks = {
            title: "PROJECTS",
            path: currentEdges[0].path,
            items: currentEdges,
          };
          navigations = contentFulNavigationsEn.nodes[0].links.links.items;

          navigations[4] = projectsLinks;

          navigations[5] = {
            title: "CONTACT",
            path: "/contact-us",
          };
        }

        return (
          <header
            onMouseOver={() => setInverted(true)}
            onMouseOut={() => {
              setInverted(false);
            }}
            className={`${
              isInverted || inverted ? "bg-white shadow" : "bg-transparent"
            } left-0 right-0 top-0 z-50 header-main ${
              scroll ? "fixed bg-white shadow" : "absolute"
            } ${isExpanded ? "active-nav relative" : ""}`}
          >
            {isDesktop ? (
              <TopStocksBar
                stockItem={stockItem}
                currentLocale={currentLocale}
              />
            ) : null}
            <div className="lg:py-1 flex flex-wrap items-center justify-between">
              <div className="px-4 py-2 flex items-center justify-between w-full lg:w-auto logo-wrapper">
                <Link
                  className="flex items-center justify-content no-underline text-white"
                  to={`/${currentLocale}/`}
                >
                  <img src={Logo} alt="logo" />
                </Link>

                <button
                  className="lg:hidden flex items-center px-3 py-2 rounded text-white"
                  onClick={() => toggleExpansion(!isExpanded)}
                >
                  {isExpanded ? (
                    <img src={CrossIcon} />
                  ) : (
                    <span className="navbarToggleIcon" />
                  )}
                </button>
              </div>
              <nav
                className={`${
                  isExpanded ? `block` : `hidden`
                }  lg:flex md:items-center w-full md:w-auto font-xs overflow-y-auto lg:overflow-visible`}
              >
                {navigations.map((item) => (
                  <NavListItem
                    currentLocale={currentLocale}
                    item={item}
                    inverted={inverted}
                    isInverted={isInverted}
                    scroll={scroll}
                  />
                ))}
                <div className="cursor-pointer flex items-center flex-wrap-reverse lg:flex-wrap pb-8 lg:pb-0 mt-9 lg:mt-0 lg:relative px-4 lg:px-0 w-full lg:w-auto">
                  <div
                    className="w-full lg:w-auto px-3 link-item language-toggle block md:inline-block mt-4 font-xs md:mt-0 md:ml-10 no-underline text-primary"
                    key="LanguageToggle"
                  >
                    <div className="hidden lg:inline-block">
                      <div className="item">{languageName[currentLocale]}</div>
                      <div
                        className={`${
                          !langOpen && "hidden"
                        } flex langDropDown font-xs`}
                      >
                        {languages.map((language) => (
                          <a
                            className="lang"
                            onClick={() => changeLocale(language)}
                          >
                            <span
                              className={`${
                                languageName[currentLocale] ===
                                languageName[language]
                                  ? "lg:text-secondary"
                                  : ""
                              }`}
                            >
                              {languageName[language]}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-center w-full lg:hidden">
                      {languages.map((lang, idx) => {
                        return (
                          <>
                            {idx !== 0 && " | "}
                            <span
                              className={`cursor-pointer px-4 ${
                                languageName[lang] ===
                                languageName[currentLocale]
                                  ? "text-primary lg:text-secondary"
                                  : "text-text"
                              }`}
                              onClick={() => changeLocale(lang)}
                            >
                              {languageName[lang]}
                            </span>
                          </>
                        );
                      })}
                    </div>
                  </div>
                  <div
                    className="w-full lg:w-auto block md:inline-block mt-4 md:mt-0 md:ml-10 no-underline text-black font-xs"
                    key="Search"
                  >
                    <form
                      className="flex items-center"
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (searchValue) {
                          const redirectLink = `/${currentLocale}/search?query=${searchValue}`;
                          navigate(redirectLink);
                        }
                      }}
                    >
                      <button onClick={() => setSearchOpen((prev) => !prev)}>
                        <Search
                          size={14}
                          className={`navbar-search-icon ${
                            !searchOpen ? "inactive" : ""
                          }`}
                        />
                      </button>

                      <input
                        placeholder={
                          currentLocale === "fr" ? "RECHERCHÉ" : "SEARCH"
                        }
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className={`font-xs navbar-search-field ml-2 ${
                          searchOpen ? "px-2" : "inactive"
                        }`}
                      />
                    </form>
                  </div>
                </div>
              </nav>
            </div>
          </header>
        );
      }}
    </IntlContextConsumer>
  );
};

const TopStocksBar = ({ stockItem, currentLocale }) => {
  return (
    <div className="top-stocks-bar">
      {stockItem && (
        <>
          <div className="text-primary top-stocks-bar-values">
            <span className="top-stocks-bar-labels">TSX-V:</span> GMIN
            <div className="inline-block ml-16">
              {currentLocale === "fr" ? "Dernier Prix" : "Last Price"}&nbsp;
              <span className="top-stocks-bar-labels">
                ${stockItem.stockPrice}
              </span>
            </div>
            <div className="inline-block ml-16">
              {currentLocale === "fr" ? "Le volume" : "Volume"}&nbsp;
              <span className="top-stocks-bar-labels">
                {stockItem.marketCap}
              </span>
            </div>
          </div>
          <div className="top-stocks-bar-right text-secondary top-stocks-bar-values">
            <span className="top-stocks-bar-labels">
              {currentLocale === "fr" ? "ET COURS DE L'OR" : "SPOT GOLD"}
            </span>
            <div className="inline-block ml-24">
              {currentLocale === "fr" ? "Dernier Prix" : "Last Price"}&nbsp;
              <span className="top-stocks-bar-labels">
                ${stockItem.spotGold}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const NavListItem = ({ item, inverted, isInverted, scroll, currentLocale }) => {
  const [subMenuVisible, setSubMenuVisible] = useState(false);
  const location = useLocation();

  const toggleDropDown = (e) => {
    setSubMenuVisible(!subMenuVisible);
    !item.items && navigate(`/${currentLocale}${item.path}`);
  };

  let className = location.pathname.includes(item.path) ? "link" : "";
  return (
    <div>
      <div
        className={`cursor-pointer lg:hidden block uppercase py-2 md:mt-0 md:pl-10 no-underline link-item relative ${className} text-text`}
        key={item.title}
        onClick={toggleDropDown}
      >
        <div className="item flex items-center">
          <span className="px-4 md:px-0">{item.title}</span>
          {item?.items && (
            <img
              src={ArrowDownBlack}
              className={`${!subMenuVisible ? "arrow-right" : ""} ml-4`}
            />
          )}
        </div>
        {item.items && (
          <div
            className={`${
              !subMenuVisible && "hidden"
            }  dropdown lg:absolute lg:-ml-4`}
          >
            <div className="dropdown-content">
              {item.items?.map((item) => (
                <Link
                  className="subitem block bg-white no-underline py-4 pr-4 pl-8 text-text font-xs"
                  key={item.title}
                  to={`/${currentLocale}${item.path}`}
                  activeClassName="dropdown-active"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <Link
        className={`cursor-pointer uppercase hidden lg:inline-block mt-4 md:mt-0 md:ml-10 no-underline link-item relative ${
          inverted || isInverted ? "text-text" : "text-white"
        } ${scroll ? "text-text" : "text-white"}`}
        key={item.title}
        activeClassName="link"
        partiallyActive={true}
        onClick={toggleDropDown}
        to={`/${currentLocale}${item.path}`}
      >
        <div className="item flex items-center">
          <span>{item.title}</span>
          {item.items && (
            <span>
              {!scroll && !inverted && !isInverted ? (
                <img src={ArrowDownWhite} className="ml-4" />
              ) : (
                <img src={ArrowDownBlack} className="ml-4" />
              )}
            </span>
          )}
        </div>
        {item.items && (
          <div
            className={`${
              !subMenuVisible && "hidden"
            } dropdown lg:absolute lg:-ml-4`}
          >
            <div className="dropdown-content">
              {item.items?.map((item) => (
                <Link
                  className="subitem block bg-white no-underline py-4 pl-4 pr-8 text-text font-xs"
                  key={item.title}
                  to={`/${currentLocale}${item.path}`}
                  activeClassName="dropdown-active"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Link>
    </div>
  );
};

export default Header;
