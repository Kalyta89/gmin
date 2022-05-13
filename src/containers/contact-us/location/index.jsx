import React from "react";
import MapsComponent from "../../../components/maps";
import RRenderer from "../../../components/richtextRenderer";

import "./index.scss";

const LocationTile = ({ mapTileTitle, mapTileAddress, mapTileLocation }) => {
  return (
    <div className="tile mx-auto lg:mx-2 my-10 rounded-lg overflow-hidden">
      <h5 className="px-7.5 mt-6 lg:mt-9 text-center">{mapTileTitle}</h5>
      <div className="px-7.5 mt-5 mb-6">
        {
          <RRenderer
            data={mapTileAddress}
            config={{
              p: "font-normal",
            }}
          />
        }
      </div>
      <div className="size-map w-full">
        <MapsComponent location={mapTileLocation} />
      </div>
    </div>
  );
};
const Locations = ({
  mapTile1Title,
  mapTile1Address,
  mapTile1Location,
  mapTile2Title,
  mapTile2Address,
  mapTile2Location,
  mapTile3Title,
  mapTile3Address,
  mapTile3Location,
  className,
}) => {
  return (
    <div
      className={`w-full lg:justify-center lg:flex mx-auto ${className}`}
    >
      <LocationTile
        mapTileTitle={mapTile1Title}
        mapTileAddress={mapTile1Address}
        mapTileLocation={mapTile1Location}
      />
      <LocationTile
        mapTileTitle={mapTile2Title}
        mapTileAddress={mapTile2Address}
        mapTileLocation={mapTile2Location}
      />
      <LocationTile
        mapTileTitle={mapTile3Title}
        mapTileAddress={mapTile3Address}
        mapTileLocation={mapTile3Location}
      />
    </div>
  );
};
export default Locations;
