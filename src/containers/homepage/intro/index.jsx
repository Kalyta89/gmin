import React from "react";
import { Link } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import YouTubeVideo from "../../../components/you-tube-video/YouTubeVideo";

import iconArrow from "../../../images/icon-arrow.svg";

import "./index.scss";

const Intro = ({ data }) => {
  return (
    <section className="intro-section py-12 max-w-78 mx-auto global-x-spacing">
      <div class="grid md:pt-9 md:pb-8 grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:px-5 xl:px-0">
        <div className="">
          <h3 className="text-secondary uppercase">
            {data.title}
          </h3>
          <p className="mt-4 text-text text-left md:mr-24">
            {documentToReactComponents(JSON.parse(data.content.raw))}
          </p>
          <div className="mt-4 flex">
            <Link
              className="flex text-secondary intro-link-underline underline underline-offset-2 text-sm font-normal tracking-wider"
              to="/about-us/our-business-model"
            >
              {data.contentButtonLabel}
              <img src={iconArrow} className="ml-10" />
            </Link>
          </div>
        </div>
        <div className="intro-video-container mt-12 md:mt-0 mx-auto md:mx-0 md:ml-auto ">
          <h3 className="text-secondary">{data.videoTitle}</h3>
          <h3 className="text-dark-blue">{data.videoDescription}</h3>
          <YouTubeVideo media={data.videoLink} className="video mt-4" />
        </div>
      </div>
      <div className="lg:flex flex-none gap-12"></div>
    </section>
  );
};

export default Intro;
