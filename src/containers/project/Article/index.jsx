import React from "react";

import RRenderer from "../../../components/richtextRenderer";
import "./index.scss";

const Article = ({ data: { heading, image, content, bottomText } }) => {
  return (
    <div className="py-8 lg:py-20 global-x-spacing">
      <div className="max-w-4xl mx-auto text-text">
        <h3 className="uppercase text-secondary text-center mb-8 lg:mb-10">
          {heading}
        </h3>

        <RRenderer
          data={content}
          config={{
            p: "mt-1 mb-2",
            span: "disc-bullet",
            h5: "text-primary mb-4",
          }}
        />
        <div className="border-t-2 border-secondary mt-6 pt-6">
          <RRenderer
            data={bottomText}
            config={{
              p: "font-xs",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Article;
