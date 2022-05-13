import React from "react";
import { Link } from "gatsby";

import RRenderer from "../../../components/richtextRenderer";
import "./index.scss";

const Directory = ({ data }) => {
  return (
    <div className="py-10 lg:py-24">
      <div className="global-x-spacing max-w-78 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-32 lg:gap-y-12">
        {data &&
          data.map(
            ({
              node: {
                email,
                name,
                phone,
                phone2,
                address,
                subtitle,
                websiteUrl,
              },
            }) => (
              <div className="flex flex-col">
                <div>
                  <h3 className="text-secondary uppercase mb-5">{name}</h3>
                  {subtitle && (
                    <h5 className="text-primary mb-5">{subtitle}</h5>
                  )}
                </div>
                {address && (
                  <ul className="flex-1 mb-5">
                    <RRenderer
                      data={address}
                      config={{
                        p: "text-text",
                      }}
                    />
                  </ul>
                )}
                {(email || phone || phone2 || websiteUrl) && (
                  <div className="contact-location lg:-ml-5 py-2 lg:py-7.5 pl-5 pr-18.5 rounded-xl">
                    {email && (
                      <div className="flex">
                        <span className="text-text font-semibold">e:&nbsp;</span>
                        <span className="text-text">{email}</span>
                      </div>
                    )}
                    {phone && (
                      <div className="flex">
                        <span className="text-text font-semibold">t:&nbsp;</span>
                        <span className="text-text">{phone}</span>
                      </div>
                    )}
                    {phone2 && (
                      <div className="flex">
                        <span className="text-text font-semibold">f:&nbsp;</span>
                        <span className="text-text">{phone2}</span>
                      </div>
                    )}
                    {websiteUrl && (
                      <div className="flex">
                        <Link
                          to={websiteUrl}
                          className="underline text-secondary"
                        >
                          {websiteUrl}
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default Directory;
