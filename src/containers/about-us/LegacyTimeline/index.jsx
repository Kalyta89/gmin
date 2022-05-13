import React from "react";

import "./index.scss";

function getColor(colored, index) {
  if (!colored) {
    return "history-color-2";
  }

  const colorNumber = index % 3;
  switch (colorNumber) {
    case 0:
      return "history-color-1";
    case 1:
      return "history-color-2";
    case 2:
      return "history-color-3";
    default:
      return "history-color-2";
  }
}

const LegacyTimeline = ({
  data: { title, content, timeline, icons },
  colored,
}) => {
  const items = [...timeline.items];
  const firstEvent = items.shift();
  const lastEvent = items.pop();
  return (
    <div className="py-8 lg:py-24">
      <div className="max-w-78 mx-auto flex flex-col md:items-center">
        <h3 className="text-secondary pl-10 md:pl-0 uppercase">{title}</h3>
        <p className="global-x-spacing lg:w-10/12 md:text-center text-text pt-6">
          {content.content}
        </p>
        <div className={`w-full mt-8 lg:mt-20 timeline-container`}>
          {/* FIRST START */}
          <div className={`flex first-event timeline-event`}>
            <div className={`event-container`}>
              <img src={icons[0].file.url} alt="" className="event-icon" />
              <div className={`event-detail ${getColor(colored, 0)}`}>
                <h5 className="text-primary">{firstEvent?.year}</h5>
                <p className="text-secondary font-xs uppercase">
                  {firstEvent?.title}
                </p>
                <p className="text-text font-xs">{firstEvent?.content}</p>
              </div>
            </div>
          </div>
          {/* FIRST END */}
          {items.map(({ year, title, content: details, logo }, idx) => {
            const direction = idx % 2 === 0 ? "event-right" : "event-left";
            return (
              <div className={`flex timeline-event ${direction}`}>
                <div className={`event-container`}>
                  <span className={`event-line`} />
                  <img
                    src={icons[idx].file.url}
                    alt=""
                    className="event-icon"
                  />
                  <div className={`event-detail ${getColor(colored, idx + 1)}`}>
                    <h5 className="text-primary">{year}</h5>
                    <p className="text-secondary font-xs uppercase">{title}</p>
                    <p
                      className="text-text font-xs"
                      dangerouslySetInnerHTML={{ __html: details }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
          {/* LAST START */}
          <div className={`flex last-event timeline-event`}>
            <div className={`event-container`}>
              <img
                src={icons[icons.length - 1].file.url}
                alt=""
                className="event-icon"
              />
              <div
                className={`event-detail ${getColor(
                  colored,
                  timeline.items.length + 1
                )}`}
              >
                <h5 className="text-primary">{lastEvent?.year}</h5>
                <h5 className="text-secondary font-xs uppercase">
                  {lastEvent?.title}
                </h5>
                <p className="text-text font-xs">{lastEvent?.content}</p>
              </div>
            </div>
          </div>
          {/* LAST END */}
        </div>
      </div>
    </div>
  );
};

export default LegacyTimeline;
