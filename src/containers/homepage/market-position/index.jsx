import React from "react";
import RRenderer from "../../../components/richtextRenderer";

import "./index.scss";

const columnCount = {
  5: "xl:grid-cols-5",
  6: "xl:grid-cols-6",
};

const resolveColumnCount = (variants) => {
  const resolvedCss = columnCount[variants];
  if (!resolvedCss) {
    throw new Error(`Failed to resolve variant: ${variants}`);
  }
  return resolvedCss;
};

const MarketingPosition = ({ data, white, className }) => {
  const columnCountVariants = data.features.items.length;

  return (
    <section
      className={`intro-section md:text-center global-x-spacing ${className}`}
    >
      <div className="max-w-78 mx-auto">
        <div className="pb-10 md:py-6 border-secondary border-b border-solid">
          <h3 className="text-secondary uppercase">{data.title}</h3>
          <div className="text-primary font-2xl capitalize mt-2 md:mt-5 mb-4">
            {data.subtitle}
          </div>
          <RRenderer
            data={data.content}
            config={{
              p: "mb-3 text-text",
            }}
          />
        </div>
        <div className="md:pb-6">
          <div
            class={`grid md:gap-4 mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${resolveColumnCount(
              columnCountVariants,
            )} text-center`}
          >
            {data.features.items.map((v, i) => (
              <div key={i} className="marketing-position-width sm:mx-auto">
                <div
                  className={`marketing-position-title-width text-primary font-medium mx-auto mt-10 mb-3 ${
                    white ? "font-roman-numerals py-2" : "font-2xl"
                  }`}
                >
                  {v.title}
                </div>
                <p
                  className="font-smallest text-text"
                  dangerouslySetInnerHTML={{ __html: v.content }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingPosition;
