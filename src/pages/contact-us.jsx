import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Hero from "../components/hero";
import Seo from "../components/seo";
import Locations from "../containers/contact-us/location";
import RRenderer from "../components/richtextRenderer";
import ContactUsForm from "../containers/contact-us/contact-us-form";

import ContactUsLayout from "../containers/contact-us/contact-us-layout";

const ContactUsPage = ({ data }) => {
  const {
    heroTitle,
    heroImage,
    welcomeTitle,
    welcomeContentRichText,
    mapTile1Title,
    mapTile1Address,
    mapTile1Location,
    mapTile2Title,
    mapTile2Address,
    mapTile2Location,
    mapTile3Title,
    mapTile3Address,
    mapTile3Location,
    directTitle,
    directContactTop,
    directContactBottom,
    generalTitle,
    generalContentText,
    nameErrorMessage,
    companyErrorMessage,
    phoneErrorMatchesMessage,
    phoneErrorMinMessage,
    emailErrorMessage,
    commentTextareaLabel,
    commentErrorMessage,
    requiredErrorMessage,
    buttonLabel,
  } = data.contactUsPage.nodes[0];
  return (
    <Layout inverted>
      <Seo title="Contact us" />
      <Hero title={heroTitle} image={heroImage} />
      <ContactUsLayout>
        <div className="contact-us-text-area grid justify-items-center my-8 md:my-2">
          <div className="px-9 md:px-20">
            <div className="text-center">
              <h3 className="text-secondary text-left md:text-center uppercase mb-4 md:mb-10 mt-4 md:mt-10">
                {welcomeTitle}
              </h3>
              <div className="text-center">
                <RRenderer
                  data={welcomeContentRichText}
                />
              </div>
            </div>
          </div>
        </div>
        <Locations
          mapTile1Title={mapTile1Title}
          mapTile1Address={mapTile1Address}
          mapTile1Location={mapTile1Location}
          mapTile2Title={mapTile2Title}
          mapTile2Address={mapTile2Address}
          mapTile2Location={mapTile2Location}
          mapTile3Title={mapTile3Title}
          mapTile3Address={mapTile3Address}
          mapTile3Location={mapTile3Location}
          className="contact-us-map-area"
        />

        <div className="w-full contact-us-direct-inquiries-area">
          <div className="bg-direct-inquiries px-9 md:px-24 py-10 md:py-12">
            <h5 className="pt-40px text-primary text-center md:text-left md:mb-2">
              {directTitle}
            </h5>
            <p className="text-text mt-2">
              <div className="md:mb-3">
                <RRenderer
                  data={directContactTop}
                  config={{
                    p: "py-1",
                  }}
                />
              </div>
              <div>
                <RRenderer
                  data={directContactBottom}
                  config={{
                    p: "py-1",
                  }}
                />
              </div>
            </p>
          </div>
        </div>
        <div className="contact-us-form-area w-full px-9 md:px-24">
          <div className="py-8 md:py-12">
            <h5 className="pt-40px text-primary text-left md:mb-5 mb-2">
              {generalTitle}
            </h5>
            <p className="text-text">{generalContentText.generalContentText}</p>
          </div>
          <ContactUsForm
            nameErrorMessage={nameErrorMessage}
            companyErrorMessage={companyErrorMessage}
            phoneErrorMatchesMessage={phoneErrorMatchesMessage}
            phoneErrorMinMessage={phoneErrorMinMessage}
            emailErrorMessage={emailErrorMessage}
            commentTextareaLabel={commentTextareaLabel}
            commentErrorMessage={commentErrorMessage}
            requiredErrorMessage={requiredErrorMessage}
            buttonLabel={buttonLabel}
          />
        </div>
      </ContactUsLayout>
    </Layout>
  );
};

export default ContactUsPage;

export const query = graphql`
  query ContactUs($locale: String) {
    contactUsPage: allContentfulContactUsPage(
      filter: { node_locale: { eq: $locale } }
    ) {
      nodes {
        heroTitle
        heroImage {
          file {
            url
          }
        }
        welcomeTitle
        welcomeContentRichText {
          raw
        }
        mapTile1Title
        mapTile1Address {
          raw
        }
        mapTile1Location {
          lat
          lon
        }
        mapTile2Title
        mapTile2Address {
          raw
        }
        mapTile2Location {
          lat
          lon
        }
        mapTile3Title
        mapTile3Address {
          raw
        }
        mapTile3Location {
          lat
          lon
        }
        directTitle
        directContactTop {
          raw
        }
        directContactBottom {
          raw
        }
        generalTitle
        generalContentText {
          generalContentText
        }
        nameErrorMessage
        companyErrorMessage
        phoneErrorMatchesMessage
        phoneErrorMinMessage
        emailErrorMessage
        commentTextareaLabel
        commentErrorMessage
        requiredErrorMessage
        buttonLabel
      }
    }
  }
`;
