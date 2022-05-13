import React from "react";
import RRenderer from "../richtextRenderer";
import "./index.scss";

const GoldBox = ({
  title,
  main,
  button,
  link,
  onDownloadClick,
  file,
  blue,
  grey,
  white,
}) => {
  const bgCss = blue
    ? "bg-primary lg:py-32"
    : grey
    ? "bg-secondary-grey lg:py-32"
    : white
    ? "lg:pb-24 lg:pt-32"
    : "";
  const wrapperCss = blue || grey ? "mission-wrapper-blue" : "";

  let titleCss = "text-secondary";
  if (blue) {
    titleCss = "text-dark-blue mission-heading-blue";
  }
  if (grey) {
    titleCss = "text-dark-blue mission-heading-grey";
  }
  if (white) {
    titleCss = "text-secondary";
  }
  let textCss = "text-left text-text";
  if (blue) {
    textCss = "text-text pt-4 pb-8";
  }
  if (grey) {
    textCss = "text-primary";
  }
  if (white) {
    textCss = "text-text";
  }

  return (
    <div className={`${bgCss} our-mission-container py-2 global-x-spacing`}>
      <div
        className={`max-w-78 mx-auto py-7.5 lg:pb-3 lg:px-24 flex flex-col md:items-center mission-wrapper ${wrapperCss}`}
      >
        {title && (
          <h3
            className={`md:text-center uppercase mission-heading ${titleCss}`}
          >
            {title}
          </h3>
        )}

        {main && (
          <p className={`${textCss} lg:text-center`}>
            <RRenderer
              data={main}
              config={{
                p: "py-2",
              }}
            />
          </p>
        )}

        <div className="">
          <div className="container-goldbox-btn">
            {button && (
              <div className="px-8 bg-primary">
                <button
                  onClick={() => {
                    onDownloadClick(file || link || "/");
                  }}
                  className="font-xs uppercase goldbox-button"
                >
                  {button}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldBox;
