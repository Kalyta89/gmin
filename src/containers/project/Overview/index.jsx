import React from "react";
import RRenderer from "../../../components/richtextRenderer";

import "./index.scss";

const Overview = ({ onDownloadClick, file, link, title, text, image1, image2, image3, buttonLabel, }) => {
  return (
    <div className="grid justify-items-center my-12 md:mt-18.5 md:mb-24">
      <div className="overview-grid px-9 md:px-4">
        <h3 className="overview-title-area text-left text-secondary text-center md:text-left uppercase mb-5">
          {title}
        </h3>
        <div className="overview-text-area text-text leading-26 -mt-3 mb-5 md:mb-0px">
          <RRenderer
            data={text}
            config={{
              p: "py-2",
            }}
          />
        </div>
        <div className="overview-images-area grid gap-5 grid-col-2 content-start max-w-116 md:max-w-none justify-self-center">
          <img src={image1} className="col-span-2" alt="overview" />
          <img src={image2} alt="overview" />
          <img src={image3} alt="overview" />
        </div>
        <button
          onClick={() => {
            onDownloadClick(file || link || "/");
          }}
          className="overview-button-area w-full text-white overview-button-background h-12 font-xs uppercase rounded-md mt-12 md:mt-5"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default Overview;
