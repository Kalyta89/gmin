import React, { useState } from "react";
import { navigate, graphql, useStaticQuery, Link } from "gatsby";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";

import { submitForm } from "../../utils/submitForm";
import Modal from "../Modal";
import GradientButton from "../gradientButton";
import { Search, DownAngleLine } from "../icon";
import Logo from "../../images/white-log.png";
import GMS from "../../images/GMS-white.png";
import logoFacebook from "../../images/logo-facebook.svg";
import logoTwitter from "../../images/logo-twitter.svg";
import logoLinledin from "../../images/logo-linkedin.svg";
import logoYoutube from "../../images/logo-youtube.svg";
import "./index.scss";

const languageName = {
  "en-US": "English",
  fr: "Français",
};

const MENU_INDEX = {
  0: "footer-area-menu-0",
  1: "footer-area-menu-1",
  2: "footer-area-menu-2",
  3: "footer-area-menu-3",
  4: "footer-area-menu-4",
  5: "footer-area-menu-5",
};

const resolveMenuIndex = (index) => {
  const resolvedCss = MENU_INDEX[index];
  if (!resolvedCss) {
    throw new Error(`Failed to resolve menu index: ${index}`);
  }
  return resolvedCss;
};

function Footer() {
  const [thankModal, setThankModal] = useState(false);
  const [formState, setForm] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const {
    projectsFr,
    contentFulNavigationsFr,
    projectsEn,
    contentFulNavigationsEn,
    formEn,
    formFr,
  } = useStaticQuery(graphql`
    query Footer {
      formEn: hubspotForm(id: { eq: "81aa7cc7-7a89-43b0-9280-24df8bb89f84" }) {
        guid
        portalId
        name
        submitText
        redirect
        formFieldGroups {
          fields {
            label
            name
            required
            fieldType
            placeholder
          }
        }
      }
      formFr: hubspotForm(id: { eq: "afea6d0d-b0e3-4fef-9d04-64c13c3e5fc9" }) {
        guid
        portalId
        name
        submitText
        redirect
        formFieldGroups {
          fields {
            label
            name
            required
            fieldType
            placeholder
          }
        }
      }
      projectsFr: allContentfulProject(filter: { node_locale: { eq: "fr" } }) {
        edges {
          node {
            heading
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
            heading
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

  return (
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) => {
        let navigations;

        const { formFieldGroups: fields, guid: id } =
          currentLocale === "fr" ? formFr : formEn;
        const getFields = () => {
          return Object.keys(formState).map((key) => {
            return {
              name: key,
              value: formState[key],
            };
          });
        };
        const submitFormData = async () => {
          let data = await submitForm(id, getFields(), Date.now(), true);
          setThankModal(true);
        };

        if (currentLocale === "fr") {
          let currentEdges = projectsFr.edges;
          currentEdges = currentEdges.map(({ node }) => {
            return {
              title: node.heading,
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
        } else {
          let currentEdges = projectsEn.edges;
          currentEdges = currentEdges.map(({ node }) => {
            return {
              title: node.heading,
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
        }

        return (
          <div>
            {thankModal && <Modal onClose={() => setThankModal(false)} />}
            <div className="global-x-spacing footer-section relative z-10 flex justify-center">
              <div className="footer-overly text-center max-w-78 py-8 z-20 rounded-xl px-4">
                <h3 className="text-dark-blue uppercase mb-6 lg:mb-0">
                  {currentLocale === "fr"
                    ? "Inscrivez-vous à notre liste d’envoi"
                    : "Join our mailing list"}
                </h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    submitFormData();
                  }}
                  className="block lg:flex justify-center max-w-78 mx-auto items-end"
                >
                  {fields[0].fields.map((field, index) => {
                    const {
                      label,
                      fieldType,
                      required,
                      name,
                      placeholder,
                    } = field;
                    return (
                      <div className="mb-5 lg:mb-0 flex-1 pr-3" key={label}>
                        <input
                          name={name}
                          type={fieldType}
                          placeholder={placeholder}
                          required={required}
                          onChange={(e) =>
                            setForm({
                              ...formState,
                              [e.target.name]: e.target.value,
                            })
                          }
                          className="bg-transparent text-text input pb-1 pl-2 outline-none w-full font-xs"
                        />
                      </div>
                    );
                  })}
                  <div className="mt-6 lg:mt-0">
                    <GradientButton type="submit">
                      {currentLocale === "fr" ? "Soumettre" : "Submit"}
                    </GradientButton>
                  </div>
                </form>
              </div>
            </div>
            <div className="footer-bar w-full pt-24 lg:pt-24 pb-2 lg:pb-12">
              <div className="footer-container w-full mx-auto flex justify-center overflow-x-hidden">
                <div className="footer-grid flex-col mx-auto">
                  <div className="footer-logo-area w-full flex justify-center pb-9 lg:pb-12">
                    <img src={Logo} alt="" />
                  </div>
                  <ul className="footer-menu-items flex-col lg:footer-items-grid w-full">
                    {navigations.map((item, i) => {
                      return (
                        <MenuItem
                          {...item}
                          className={resolveMenuIndex(i)}
                          currentLocale={currentLocale}
                        />
                      );
                    })}
                  </ul>
                  <div className="footer-search-area flex flex-col items-center lg:items-start px-16 lg:px-0 mt-3 lg:mt-0 lg:pb-12 pb-2 ">
                    <form
                      className="w-full flex items-center"
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (searchQuery) {
                          navigate(
                            `/${currentLocale}/search/?query=${searchQuery}`,
                          );
                        }
                      }}
                    >
                      <button>
                        <Search color="#fff" size={14} />
                      </button>
                      <input
                        type="text"
                        className="footer-search tracking-wider flex-1 ml-2 p-1 font-xs"
                        placeholder={
                          currentLocale === "fr" ? "RECHERCHÉ" : "SEARCH"
                        }
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </form>
                    <div className="pt-7.5 lg:pt-2 lg:pl-6 text-white font-xs lg:mb-2">
                      {/* English | French */}
                      {languages.map((lang, idx) => {
                        return (
                          <>
                            {idx !== 0 && " | "}
                            <span
                              className={`cursor-pointer opacity-50 mx-2 tracking-wider ${
                                languageName[lang] ===
                                  languageName[currentLocale] && "opacity-100"
                              }`}
                              onClick={() => changeLocale(lang)}
                            >
                              {languageName[lang].toUpperCase()}
                            </span>
                          </>
                        );
                      })}
                    </div>
                    <Link
                      to={
                        currentLocale === "fr"
                          ? "https://gmining.com/fr/"
                          : "http://www.gminingservices.com/"
                      }
                      className="w-full flex items-center justify-center md:justify-start pt-7.5 lg:pt-24 "
                    >
                      <span
                        className="uppercase font-xs text-white mr-2 tracking-wider"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {currentLocale === "fr"
                          ? "Visiter nos amis"
                          : "Visit our friends at"}
                      </span>
                      <img src={GMS} className="bottom-logo" alt="" />
                    </Link>
                    <div className="footer-links">
                      <Link to="https://www.facebook.com/G-Mining-Ventures-Corp-107071545265052">
                        <img src={logoFacebook} alt="facebook" />
                      </Link>
                      <Link to="https://twitter.com/gminingventures">
                        <img src={logoTwitter} alt="twitter" />
                      </Link>
                      <Link to="https://www.linkedin.com/company/gminingventures">
                        <img src={logoLinledin} alt="linkedin" />
                      </Link>
                      <Link to="https://www.youtube.com/channel/UC0-fjRlYkkXkCgtuejowMIg">
                        <img src={logoYoutube} alt="youtube" />
                      </Link>
                    </div>
                  </div>
                  <div className="footer-copyright-area tracking-wider text-white font-xs w-full pt-3 mt-4 lg:mt-0 text-center footer-credits px-12">
                    2021 G Mining Ventures Corp.&nbsp;
                    {currentLocale === "fr"
                      ? "Tous droits réservés."
                      : "All rights Reserved."}
                    &nbsp;
                    <a
                      className="underline"
                      href={
                        currentLocale === "en-US"
                          ? "https://assets.ctfassets.net/jj9ent3ck4o2/GS2VIIOn6MlqVJv672kD9/cfe1bc089e979eda96bd199d99ae7a84/Website_Legal_Disclaimer_-_English.pdf"
                          : "https://assets.ctfassets.net/jj9ent3ck4o2/1Fak2QVv4RdpIQNUU3lQsd/66030a6263a3c774472722ab9f994020/Website_Disclaimer_-_French.pdf"
                      }
                      target="_blank"
                    >
                      {currentLocale === "fr" ? "Légal" : "Legal"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </IntlContextConsumer>
  );
}
const MenuItem = ({ path, title, items, currentLocale, className }) => {
  const [subOpen, setSubOpen] = useState(false);
  const onItemClick = () => {
    if (items && items.length > 0) {
      setSubOpen(!subOpen);
    } else {
      navigate(`/${currentLocale}${path}`);
    }
  };
  return (
    <li className={`${className} text-center lg:text-left w-full lg:mb-4`}>
      <div
        onClick={onItemClick}
        className="cursor-pointer text-white font-xs pb-4"
      >
        <div className="flex items-center justify-center tracking-wider lg:justify-start">
          <span className="pr-2">{title}</span>
          {items && items.length > 0 && (
            <div className={`${!subOpen && "rotate"}  lg:hidden`}>
              <DownAngleLine size={10} color="#fff" />
            </div>
          )}
        </div>
      </div>
      {items && items.length > 0 && (
        <ul className={`${!subOpen && "hidden"} lg:flex flex-col pb-2`}>
          {items.map((subNav) => (
            <li className="text-white opacity-50 tracking-wider font-xs uppercase pb-1">
              <Link to={`/${currentLocale}${subNav.path}`}>{subNav.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Footer;
