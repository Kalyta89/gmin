import React from "react";

import "./index.scss";

const Hero = ({ title, slogan, image }) => {
  return (
    <div className="hero-container">
      <div className="flex flex-col lg:flex-row h-full items-center">
        <div className="w-full lg:w-1/2 flex-1 flex flex-col justify-center pt-16 lg:pt-40 pl-8 lg:pl-20 pr-4 md:pr-0">
          {title && (
            <h1 className="lg:w-10/12 mb-2 text-white sub-heading uppercase">
              {title}
            </h1>
          )}
          {slogan && (
            <h3 className="text-secondary leading-9 uppercase w-10/12 lg:w-11/12">
              {slogan}
            </h3>
          )}
        </div>
        <div
          style={{
            backgroundImage: `url(${image?.file?.url})`,
          }}
          className="w-1/2 hero-image"
        />
      </div>
    </div>
  );
};

export default Hero;
