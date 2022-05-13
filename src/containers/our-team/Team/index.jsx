import React, { useState } from "react";
import Slider from "react-slick";

import { ChevronRight, ChevronLeft } from "../../../components/icon";
import Bio from "../Bio";
import "./index.scss";

const RightArrow = ({ onClick }) => {
  return (
    <div className="right-arrow" onClick={onClick}>
      <button>
        <ChevronRight className="icon" />
      </button>
    </div>
  );
};

const LeftArrow = ({ onClick }) => {
  return (
    <div className="left-arrow" onClick={onClick}>
      <button>
        <ChevronLeft className="icon" />
      </button>
    </div>
  );
};

const Team = ({ data: { title, heading, subheading }, members }) => {
  const [activeMember, setActiveMember] = useState(0);
  const [directors, setDirectors] = useState(false);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    afterChange: (num) => {
      setActiveMember(num);
    },
    responsive: [
      {
        breakpoint: 1023,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 767,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };
  return (
    <div className="pt-10 lg:pt-24 pb-10 lg:pb-24">
      <div className="max-w-78 mx-auto">
        <h3 className="text-secondary md:text-center pl-9 md:pl-0 mb-3">{title}</h3>
        <p className="text-center text-text uppercase mb-10 lg:mb-24 font-xs">
          <span
            className={`cursor-pointer mr-1 ${
              !directors ? "text-secondary" : "opacity-50 text-text"
            }`}
            onClick={() => {
              setDirectors(false);
              setActiveMember(0);
            }}
          >
            {heading}
          </span>
          &nbsp;|
          <span
            className={`cursor-pointer ml-1 ${
              directors ? "text-secondary" : "opacity-50 text-text"
            }`}
            onClick={() => {
              setDirectors(true);
              setActiveMember(0);
            }}
          >
            {" "}
            {subheading}
          </span>
        </p>

        <div>
          <Slider {...settings}>
            {members &&
              members.length > 0 &&
              members
                .filter(
                  ({ node: { isBoardOfDirectors } }) =>
                    isBoardOfDirectors === directors
                )
                .map(
                  (
                    { node: { image, name, position, isBoardOfDirectors } },
                    idx
                  ) => (
                    <div
                      className={`team-card-container ${
                        activeMember === idx && "active"
                      }`}
                      onClick={() => setActiveMember(idx)}
                    >
                      <div className="flex flex-col items-center card">
                        <div className="flex justify-center card-image">
                          <img
                            alt={name}
                            src={image?.file?.url}
                            className="rounded-xl"
                          />
                        </div>
                        <div className="pt-4">
                          <h5 className="card-title text-center text-primary">
                            {name}
                          </h5>
                          <p className="card-position text-center w-8/12 mx-auto text-text font-xs opacity-50">
                            {position}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                )}
          </Slider>
        </div>
      </div>
      <div className="colored-stripe" />
      <Bio
        {...members.filter(
          ({ node: { isBoardOfDirectors } }) => isBoardOfDirectors === directors
        )[activeMember]}
      />
    </div>
  );
};

export default Team;
