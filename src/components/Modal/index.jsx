import { graphql, useStaticQuery } from "gatsby";
import { IntlContextConsumer } from "gatsby-plugin-intl";
import React from "react";

import "./index.scss";

const Modal = ({ onClose }) => {
  const { modalContentEn, modalContentFr } = useStaticQuery(graphql`
    query MyQuery {
      modalContentFr: allContentfulFormSubmitModal(
        filter: { node_locale: { eq: "fr" } }
      ) {
        nodes {
          content {
            content
          }
        }
      }
      modalContentEn: allContentfulFormSubmitModal(
        filter: { node_locale: { eq: "en-US" } }
      ) {
        nodes {
          content {
            content
          }
        }
      }
    }
  `);

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) => {
        return (
          <>
            <div className="modal-overlay" onClick={onClose} />
            <div className="modal-modal rounded-xl">
              <div className="modal-content flex flex-col items-center border-2 border-primary">
                <h3 className="text-primary">
                  {currentLocale === "fr" ? "Merci" : "Thank you"}
                </h3>
                <p className="text-text">
                  {currentLocale === "fr"
                    ? modalContentFr.nodes[0].content.content
                    : modalContentEn.nodes[0].content.content}
                </p>
                <div className="button-container">
                  <button
                    className="see-button rounded px-12 py-2 "
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      }}
    </IntlContextConsumer>
  );
};

export default Modal;
