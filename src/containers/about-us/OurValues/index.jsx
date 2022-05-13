import React from "react";
import RRenderer from "../../../components/richtextRenderer";

const OurValues = ({ data }) => {
  const { title, shortDescription, values, content } = data;

  const colorPicker = (i) => {
    let rest = i % 3;

    if (rest == 2) {
      return "bg-educate-blue";
    }
    if (rest == 1) {
      return "bg-grow-blue";
    }
    if (rest === 0) {
      return "bg-protected-brown";
    }
  };

  return (
    <div className="max-w-78 mx-auto p-8 lg:px-4 lg:pt-20 lg:pb-24">
      <h3 className="text-secondary uppercase py-4">
        {title}
      </h3>
      <div className="block md:flex">
        <div className="w-full lg:w-6/12 pr-6 lg:pr-24">
          <RRenderer
            data={content}
            config={{
              p: "text-text",
            }}
          />
        </div>
        <div className="w-full lg:w-6/12">
          <div className="font-2xl pb-4 text-primary">{shortDescription}</div>
          <div className="items-center grid gap-4 grid-cols-2">
            {values.items.map((v, i) => {
              return (
                <div
                  key={i}
                  className={` ${colorPicker(i)} text-center rounded-lg ${
                    i === values.items.length - 1 && "col-span-2"
                  } `}
                >
                  <h2 className="text-xs m-3 text-text font-normal">
                    {v.title}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
