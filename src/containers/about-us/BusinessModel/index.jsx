import React from "react";
import "./index.scss";
import RRenderer from "../../../components/richtextRenderer";

const BusinessModel = ({ data }) => {
  const { title, description, modelImage } = data;

  return (
    <div className="py-12">
      <div className="max-w-78 mx-auto flex flex-col md:items-center lg:pt-12 lg:pb-20">
        <h3 className="text-secondary pl-9 md:pl-0 uppercase">{title}</h3>
        <p className="w-10/12 md:text-center mx-auto text-text pt-4">
          <RRenderer data={description} />
        </p>
      </div>
      <div className="max-w-78 mx-auto flex flex-col items-center px-4 py-4 lg:pb-12">
        <img src={modelImage.file.url} alt="" />
      </div>
    </div>
  );
};

export default BusinessModel;
