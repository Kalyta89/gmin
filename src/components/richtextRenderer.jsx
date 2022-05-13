import React from "react";

import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const Text = ({ data, config, useSupAsCode }) => {
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,

      [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,

      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="mt-8 mb-2">{children}</h3>
      ),

      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className={`${config && config.h4}`}>{children}</h4>
      ),

      [BLOCKS.HEADING_5]: (node, children) => (
        <h5 className={`${config && config.h5}`}>{children}</h5>
      ),

      [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,

      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className={`${config && config.p}`}>{children}</p>
      ),

      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className={(config && config.ul) || "my-5 ml-6 flex flex-col"}>
          {children}
        </ul>
      ),

      [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,

      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li className={(config && config.li) || "disc-bullet"}>
          <span className="flex-1">{children}</span>
        </li>
      ),

      [BLOCKS.HR]: () => <hr />,

      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        return (
          <div className="flex justify-center">
            <img
              className="mb-10 lg:mb-12"
              src={node.data.target.file?.url}
              alt={node.data.target.title}
            />
          </div>
        );
      },

      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
        const { author, remark } = node?.data?.target?.fields;

        return <div className="my-20">{children}</div>;
      },

      [INLINES.HYPERLINK]: (node) => {
        const { content, data } = node;

        return (
          <a
            className="cursor-pointer text-blue-500 hover:underline hover:text-blue-700"
            href={data.uri}
            target="_blank"
            rel="noreferrer"
          >
            {content[0].value}
          </a>
        );
      },

      [INLINES.ASSET_HYPERLINK]: (node, children) => {
        const { content, data } = node;
        console.log("children >>", children);

        return (
          <a
            className="cursor-pointer text-secondary underline mt-4 block"
            href={data.uri}
            target="_blank"
            rel="noreferrer"
          >
            {children[0]}
          </a>
        );
      },
    },

    renderMark: {
      [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
      [MARKS.BOLD]: (text) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text) => <i>{text}</i>,
      [MARKS.CODE]: (text) => {
        if (useSupAsCode) {
          return <sup>{text}</sup>;
        } else {
          return <code>{text}</code>;
        }
      },
    },
  };

  return <div>{renderRichText(data, options)}</div>;
};

export default Text;
