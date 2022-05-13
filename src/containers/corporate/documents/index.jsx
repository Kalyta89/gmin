import React from "react";
import { saveAs } from "file-saver";
import { IntlContextConsumer } from "gatsby-plugin-intl";

import "./index.scss";

const Documents = ({ data, title }) => {
  const DOCUMENTS = data.items;
  function onDownload(link, title, type) {
    if (link != "" || link != "/") saveAs(link, title+'.'+type);
  }

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) => (
        <div className="documents-container global-x-spacing">
          <div className="max-w-78 mx-auto">
            <h3 className="text-secondary uppercase md:text-center">
              {title}
            </h3>
            <div>
              {DOCUMENTS.map(({ title, items }) => (
                <div className="pt-10">
                  <div className="font-2xl text-primary mb-4">{title}</div>

                  {items && items.length > 0 && (
                    <ul className="flex flex-col">
                      {items.map(({ title, type, download_link }) => (
                        <li className="bg-white rounded-lg py-4 pl-5 pr-8 grid grid-cols-6 justify-between lg:flex lg:items-start gap-6 lg:gap-0 mb-2">
                          <span className="col-span-1 font-bold text-text">
                            {type}
                          </span>
                          <span className="col-span-5 gap-x-8 flex-1 flex flex-col lg:flex-row lg:pl-10">
                            <span className="text-text flex-1">{title}</span>
                            <span>
                              <button
                                className="text-secondary underline documents-underline-offset uppercase font-xs"
                                onClick={()=>onDownload(download_link, title, type)}
                              >
                                {currentLocale === "fr" ? "Télécharger" : "Download Now"}                                
                              </button>
                            </span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </IntlContextConsumer>
  );
};

export default Documents;
