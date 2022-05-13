import React from "react";
import RRenderer from "../../../components/richtextRenderer";

const OurOperationals = ({ data }) => {
  const { title, content } = data;
  return (
    <div className="bg-secondary">
      <div className="max-w-78 mx-auto px-8 lg:px-0 py-24 border-secondary border-b border-solid">
        <h3 className="text-secondary md:text-center uppercase">{title}</h3>
        <RRenderer
          data={content}
          config={{
            p: "mt-4 text-center text-text",
          }}
        />
      </div>
    </div>
  );
};

export default OurOperationals;
