import React from "react";
import "./index.scss";
import RRenderer from "../../../components/richtextRenderer";

const OurStory = ({
  data: { title, content, image, imageLeftBottom, imageRightBottom },
}) => {
  return (
    <div className="story-container grid justify-items-center">
      <div className="out-story-grid px-9 md:px-4">
        <h3 className="outStory-title-area text-left text-secondary uppercase mb-6">
          {title}
        </h3>
        <div className="outStory-text-area leading-26 -mt-4 mb-6 md:mb-0px">
          <RRenderer
            data={content}
            config={{
              p: "text-text mb-4 whitespace-pre-wrap",
            }}
          />
        </div>
        <div className="outStory-images-area grid gap-5 grid-col-2 content-start max-w-116 md:max-w-none justify-self-center">
          <img
            src={image.file.url}
            className="col-span-2 our-story-image-container"
            alt="overview"
          />
          <img src={imageLeftBottom.file.url} alt="overview" />
          <img src={imageRightBottom.file.url} alt="overview" />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
