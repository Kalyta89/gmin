import React from "react";

const Achivements = ({ data }) => {
  return (
    <div className="bg-primary py-4 lg:py-12 global-x-spacing">
      <div className="max-w-78 mx-auto grid lg:grid-cols-2 items-center">
        <div className="order-1 lg:border-r border-primary pt-4">
          <h3 className="text-center text-primary">{data.primaryStockTitle}</h3>
        </div>
        <div className="order-3 lg:order-2 pt-4">
          <h3 className="text-center text-primary">
            {data.issuedSharedCapitalHeading}
          </h3>
        </div>
        <div className="order-2 lg:order-3 lg:border-r border-b lg:border-b-0 border-primary p-6">
          <div className="mt-2 text-center">
            <img
              src={data.primaryStockImage.file.url}
              className="w-full lg:w-5/12 mx-auto"
            />
          </div>
        </div>
        <div className="order-4 p-6">
          <div className="mt-2 text-center">
            <h2 className="font-semibold text-primary">
              {data.issuesSharedCapital}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achivements;
