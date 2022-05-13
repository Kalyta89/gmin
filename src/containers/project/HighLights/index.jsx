import React from "react";

import "./index.scss";

const HighLightsItem = ({ color, itemTitle, itemValue }) => {
  return (
    <div
      className={`grid gap-5 bg-card-1 justify-items-center items-center py-5 md:py-7.5 rounded-lg ${color}`}
    >
      <div className="font-2xl text-primary leading-6 md:leading-6.5">
        {itemTitle}
      </div>
      <div className="highlights-line-color h-px w-12" />
      <div className="font-smallest text-text leading-4.5">
        {itemValue}
      </div>
    </div>
  );
};

const HighLights = ({
  title,
  card1Title,
  card1Text,
  card2Title,
  card2Text,
  card3Title,
  card3Text,
}) => {
  return (
    <div className="grid justify-items-center mt-10 md:mt-24 mb-12 md:mb-18.5">
      <h3 className="text-secondary justify-self-center uppercase mb-4 md:mb-5">
        {title}
      </h3>
      <div className="grid md:grid-cols-3 gap-5 justify-self-center md:max-w-78 px-4 sm:px-9 lg:px-16 w-full">
        <HighLightsItem
          color="highlights-card-1-color"
          itemTitle={card1Title}
          itemValue={card1Text}
        />
        <HighLightsItem
          color="highlights-card-2-color"
          itemTitle={card2Title}
          itemValue={card2Text}
        />
        <HighLightsItem
          color="highlights-card-3-color"
          itemTitle={card3Title}
          itemValue={card3Text}
        />
      </div>
    </div>
  );
};

export default HighLights;
