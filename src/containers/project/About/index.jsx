import React from "react";
import { Tab, TabPanel, Tabs, TabList } from "react-tabs";

import RRenderer from "../../../components/richtextRenderer";
import FeasibilityTables from "../FeasibilityTables";
import MineralInventoryTables from "../MineralInventoryTables";

import "./index.scss";

const TabContentStyled = ({
  title,
  content,
  mineralInventoryItems,
  feasibilityItems,
  mineralInventoryTables,
  feasibilityTables,
  buttonLabel,
  buttonLink,
  file,
  onDownloadClick,
}) => {
  return (
    <div className="container-content w-full bg-white rounded-lg px-5 md:px-8 pt-6 md:pt-10 pb-5 mt-12 md:mt-0 ml-auto">
      <h5 className="text-primary mb-3 md:mb-2">{title}</h5>
      {content ? (
        <RRenderer
          useSupAsCode={true}
          data={content}
          config={{
            p: "py-2",
          }}
        />
      ) : null}
      {mineralInventoryTables ? (
        <MineralInventoryTables mineralInventoryItems={mineralInventoryItems} />
      ) : null}
      {feasibilityTables ? (
        <FeasibilityTables
          feasibilityItems={feasibilityItems}
          buttonLabel={buttonLabel}
          buttonLink={buttonLink}
          file={file}
          onDownloadClick={onDownloadClick}
        />
      ) : null}
    </div>
  );
};

const AboutTheProject = ({
  aboutTitle,
  tab1Title,
  tab1ContentTitle,
  tab1Content,
  tab2Title,
  tab2ContentTitle,
  tab2Content,
  tab3Title,
  tab3ContentTitle,
  tab4Title,
  tab4ContentTitle,
  mineralInventoryItems,
  feasibilityItems,
  buttonLabel,
  buttonLink,
  file,
  onDownloadClick,
}) => {
  return (
    <div className="wrapper py-10 lg:py-24">
      <div className="px-4 lg:px-16 lg:max-w-78 mx-auto">
        <h3 className="text-secondary uppercase mx-5">{aboutTitle}</h3>
        <hr className="border-secondary mt-4 mb-4 md:mt-5 mx-5" />

        <Tabs className="tabs-grid md:mx-5">
          <TabList className="grid-tab-list-area mx-5 md:mx-0">
            <Tab>{tab1Title}</Tab>
            <Tab>{tab2Title}</Tab>
            <Tab>{tab3Title}</Tab>
            <Tab>{tab4Title}</Tab>
          </TabList>
          <div className="grid-tab-panel-area">
            <TabPanel>
              <TabContentStyled
                title={tab1ContentTitle}
                content={tab1Content}
              />
            </TabPanel>
            <TabPanel>
              <TabContentStyled
                title={tab2ContentTitle}
                content={tab2Content}
              />
            </TabPanel>
            <TabPanel>
              <TabContentStyled
                title={tab3ContentTitle}
                mineralInventoryItems={mineralInventoryItems}
                mineralInventoryTables={true}
              />
            </TabPanel>
            <TabPanel>
              <TabContentStyled
                title={tab4ContentTitle}
                feasibilityItems={feasibilityItems}
                feasibilityTables={true}
                buttonLabel={buttonLabel}
                buttonLink={buttonLink}
                file={file}
                onDownloadClick={onDownloadClick}
              />
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default AboutTheProject;
