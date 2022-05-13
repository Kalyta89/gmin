import React from "react";
import { Link } from "gatsby";
import { IntlContextConsumer } from "gatsby-plugin-intl";

import logoFacebook from "../../../images/logo-facebook.svg";
import logoTwitter from "../../../images/logo-twitter.svg";
import logoLinledin from "../../../images/logo-linkedin.svg";
import logoYoutube from "../../../images/logo-youtube.svg";

import "./index.scss";

const Hero = ({ data }) => {
  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) => (
        <section className="hero-section relative">
          <video className="video" playsInline autoPlay muted loop>
            <source src={data.backgroundImage?.file?.url} type="video/mp4" />
          </video>
          <div className="absolute top-0 right-0 left-0 bottom-0 overlay" />
          <div className="absolute left-0 hero-content min-w-3/5 flex items-center justify-center">
            <div className="py-8 md:pt-12 md:pb-11 px-10 md:pl-24 md:pr-18.5">
              <h1 className="text-primary sub-heading border-b border-dark-blue md:mr-20 pb-5">
                {data.title}
              </h1>
              <h2 className="text-secondary py-3">{data.subtitle}</h2>
            </div>
          </div>
          <div className={
                currentLocale === "fr" ? "hero-links-wrap-fr" : "hero-links-wrap-en"
              }>
            <div
              className={
                currentLocale === "fr" ? "hero-links-fr hero-links-box-fr" : "hero-links-en hero-links-box-en"
              }
            >
              <div className="relative hero-links-item flex pb-16 md:pb-6">
                <Link to="https://www.facebook.com/G-Mining-Ventures-Corp-107071545265052">
                  <img src={logoFacebook} alt="facebook" className="px-4" />
                </Link>
                <Link to="https://twitter.com/gminingventures">
                  <img src={logoTwitter} alt="twitter" className="px-4" />
                </Link>
                <Link to="https://www.linkedin.com/company/gminingventures">
                  <img src={logoLinledin} alt="linkedin" className="px-4" />
                </Link>
                <Link to="https://www.youtube.com/channel/UC0-fjRlYkkXkCgtuejowMIg">
                  <img src={logoYoutube} alt="youtube" className="px-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </IntlContextConsumer>
  );
};

export default Hero;
