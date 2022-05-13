import React from "react";
import { Link } from "gatsby";

import RRenderer from "../../../components/richtextRenderer";

import LinkedInIcon from "../../../images/linkedin.png";
import MailIcon from "../../../images/mail.png";

import "./index.scss";

const Bio = ({ node: { name, role, position, image, bioRichText, linkedinLink, emailLink } }) => {
  return (
    <div className="bio-container lg:pt-10">
      <div className="global-x-spacing max-w-78 mx-auto flex gap-12 md:px-5">
        <div className="w-full lg:w-8/12">
          {name && (
            <h3 className="hidden lg:block text-secondary mb-5">{name}</h3>
          )}
          {position && (
            <h5 className="hidden lg:block text-primary mb-5">{position}</h5>
          )}
          {role && <p className="text-text font-bold lg:my-3">{role}</p>}
          {bioRichText && (
            <div className="mt-3">
              <RRenderer
                data={bioRichText}
                config={{
                  p: "text-text mb-5",
                }}
              />
            </div>
          )}
          <div className="flex">
            {linkedinLink && linkedinLink !== "null" ?
              <Link to={linkedinLink} className="mr-2"><img src={LinkedInIcon} alt="linkedin icon" /></Link>
              : null}
            {emailLink && emailLink !== "null" ?
              <Link to={emailLink}><img src={MailIcon} alt="mail icon" /></Link>
              : null}
          </div>
        </div>
        <div className="hidden lg:block bio-image-container">
          {image && <img alt={name} src={image?.file?.url} className="" />}
        </div>
      </div>
    </div>
  );
};

export default Bio;
