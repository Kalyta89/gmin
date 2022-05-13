import React from "react";

import "./index.scss";

const PresentationProject = ({
  title,
  iframeLink
}) => {
  return (
    <div className="global-x-spacing py-2 lg:py-24 bg-primary">
      <div className="presentation-wrapper flex flex-col md:items-center max-w-70 mx-auto py-7.5 lg:pb-8 lg:pt-16 lg:px-8">
        {title && (
          <h3 className="presentation-heading text-dark-blue md:text-center tracking-tighter uppercase">
            {title}
          </h3>
        )}
        <div className="presentation-iframe-container mt-6 lg:mt-0 mb-10 lg:mb-0 pt-4 pb-8">
          <iframe
            id="vrify-iframe"
            width="100%"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="fullscreen"
            src={iframeLink}
            className="iframe-css"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PresentationProject;
