import React from "react";

const OurValues = ({ data }) => {
  return (
    <div className="bg-primary">
      <div className="max-w-5xl mx-auto py-12 lg:py-24 px-4 lg:px-0 xl:px-0 text-center ">
        <h4 className="text-primary font-light py-5 leading-8 uppercase border-b border-t border-dark-blue">
          {data?.title}
        </h4>
      </div>
    </div>
  );
};

export default OurValues;
