import React from "react";
import RRenderer from "../../../components/richtextRenderer";
import "./index.scss";

const Approach = ({ data }) => {
  return (
    <div className="bg-secondary py-10 lg:py-20 global-x-spacing">
      <div className="max-w-78 mx-auto">
        <h3 className="text-secondary md:text-center mb-4 lg:mb-3 uppercase">{data.title}</h3>
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-16 lg:py-8 text-text">
          {data.rightContent ? (
            <div className="list-wrapper">
              <RRenderer
                data={data.leftContent}
                config={{
                  li: "normal ml-4",
                }}
              />
            </div>
          ) : null}
          {data.rightContent ? (
            <div className="list-wrapper">
              <RRenderer
                data={data.rightContent}
                config={{
                  li: "normal mb-5 ml-3",
                }}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Approach;
