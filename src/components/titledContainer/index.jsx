import React from "react";
import { Link } from "gatsby";

import "./index.scss";
import { ChevronRight } from "../icon";

const TitledContainer = ({
  title,
  sideList,
  sideNoWrap,
  children,
  bgColor,
  filter,
  pagination,
  page,
  setPage,
  setFilter,
  pagLen,
}) => {
  return (
    <div
      style={{
        backgroundColor: bgColor || "#fff",
      }}
      className="py-8 lg:py-24"
    >
      <div className="global-x-spacing px-0 lg:px-16 max-w-78 mx-auto">
        <h3 className=" text-secondary border-b uppercase border-secondary pb-4 mb-4 lg:mb-5">
          {title}
        </h3>
        <div className="justify-between lg:flex">
          {sideList && (
            <div className="lg:w-3/12 mb-6 lg:mb-0">
              <ul className="flex lg:flex-col flex-wrap">
                {sideList.map((text) => (
                  <li
                    className={`${
                      sideNoWrap && "w-full"
                    } font-xs text-secondary underline uppercase cursor-pointer tit-shortText mb-4`}
                    onClick={() => {
                      if (!text.ctaLink) {
                        setFilter(text);
                        setPage(1);
                      }
                    }}
                  >
                    {text.title ? (
                      <Link to={`/${text.ctaLink}`}>{text.title}</Link>
                    ) : (
                      <div className={text === filter && 'font-bold'}>
                        {text}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className={sideList ? "flex-1 lg:pl-12" : "full-blogContainer"}>
            {children}
            {pagination && (
              <div className="tit-pagination">
                <div className="flex items-center">
                  <div
                    className="tit-chevronLeft cursor-pointer"
                    onClick={() => {
                      setPage((prev) => prev - 1 < 1 ? 1 : prev - 1);
                    }}
                  >
                    <ChevronRight size={15} />
                  </div>
                  <ul className="flex flex-1 justify-center">
                    {pagination.map((num) => (
                      <li
                        className={`font-xs text-secondary cursor-pointer px-5 ${
                          num === page && "underline"
                        }`}
                        onClick={() => setPage(num)}
                      >
                        {num}
                      </li>
                    ))}
                  </ul>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      setPage((prev) => prev + 1 > pagLen ? pagLen : prev + 1);
                    }}
                  >
                    <ChevronRight size={15} className="tit-chevronRight" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitledContainer;
