import React from "react";
import { graphql } from "gatsby";
import { saveAs } from "file-saver";

import Layout from "../components/layout";
import Hero from "../components/hero";
import Seo from "../components/seo";
import LegacyTimeline from "../containers/about-us/LegacyTimeline";
import HighLights from "../containers/project/HighLights";
import Overview from "../containers/project/Overview";
import AboutTheProject from "../containers/project/About";
import PresentationProject from "../components/presentation-project";

const TocantinzinhoProjects = ({ data }) => {
  const {
    heroImage,
    title,
    highlightsTitle,
    highlightsCard1Title,
    highlightsCard1Text,
    highlightsCard2Title,
    highlightsCard2Text,
    highlightsCard3Title,
    highlightsCard3Text,
    overviewTitle,
    overviewText,
    overviewImage1,
    overviewImage2,
    overviewImage3,
    overviewButtonLabel,
    overviewButtonLink,
    overviewDocument,
    presentationTitle,
    presentationIframeLink,
    aboutTitle,
    aboutTab1Title,
    aboutTab1ContentTitle,
    aboutTab1Content,
    aboutTab2Title,
    aboutTab2ContentTitle,
    aboutTab2Content,
    aboutTab3Title,
    aboutTab3ContentTitle,
    aboutTab3Table,
    aboutTab4Title,
    aboutTab4ContentTitle,
    aboutTab4Table,
    feasibilityStudyTableDocument,
    feasibilityStudyTableButtonLink,
    feasibilityStudyTableButtonLabel,
    historyTitle,
    historyContent,
    historyTimeline,
    historyIcons,
  } = data.tocantinzinhoPage.nodes[0];

  const openThankModal = async (file) => {
    if (typeof window != "undefined") {
      const downloadResult = await fetch(file.url);
      const blob = await downloadResult.blob();
      saveAs(blob, file.fileName);
    }
  };
  return (
    <Layout inverted>
      <Seo title={title} />
      <Hero title={title} image={heroImage} />
      <HighLights
        title={highlightsTitle}
        card1Title={highlightsCard1Title}
        card1Text={highlightsCard1Text}
        card2Title={highlightsCard2Title}
        card2Text={highlightsCard2Text}
        card3Title={highlightsCard3Title}
        card3Text={highlightsCard3Text}
      />
      <Overview
        title={overviewTitle}
        text={overviewText}
        image1={overviewImage1.file.url}
        image2={overviewImage2.file.url}
        image3={overviewImage3.file.url}
        buttonLabel={overviewButtonLabel}
        link={overviewButtonLink}
        file={overviewDocument.file}
        onDownloadClick={openThankModal}
      />
      <PresentationProject
        title={presentationTitle}
        iframeLink={presentationIframeLink}
      />
      <AboutTheProject
        aboutTitle={aboutTitle}
        tab1Title={aboutTab1Title}
        tab1ContentTitle={aboutTab1ContentTitle}
        tab1Content={aboutTab1Content}
        tab2Title={aboutTab2Title}
        tab2ContentTitle={aboutTab2ContentTitle}
        tab2Content={aboutTab2Content}
        tab3Title={aboutTab3Title}
        tab3ContentTitle={aboutTab3ContentTitle}
        tab4Title={aboutTab4Title}
        tab4ContentTitle={aboutTab4ContentTitle}
        mineralInventoryItems={aboutTab3Table}
        feasibilityItems={aboutTab4Table}
        buttonLabel={feasibilityStudyTableButtonLabel}
        buttonLin={feasibilityStudyTableButtonLink}
        file={feasibilityStudyTableDocument.file}
        onDownloadClick={openThankModal}
      />
      <LegacyTimeline
        colored={true}
        data={{
          title: historyTitle,
          content: { content: historyContent.historyContent },
          timeline: historyTimeline,
          icons: historyIcons,
        }}
      />
    </Layout>
  );
};

export const query = graphql`
  query TocantinzinhoQuery($locale: String) {
    tocantinzinhoPage: allContentfulTocantinzinhoPage(
      filter: { node_locale: { eq: $locale } }
    ) {
      nodes {
        title
        heroImage {
          file {
            url
          }
        }
        highlightsTitle
        highlightsCard1Title
        highlightsCard1Text
        highlightsCard2Title
        highlightsCard2Text
        highlightsCard3Title
        highlightsCard3Text
        overviewTitle
        overviewText {
          raw
        }
        overviewImage1 {
          file {
            url
          }
        }
        overviewImage2 {
          file {
            url
          }
        }
        overviewImage3 {
          file {
            url
          }
        }
        overviewButtonLabel
        overviewButtonLink
        overviewDocument {
          file {
            url
            fileName
          }
        }
        presentationTitle
        presentationIframeLink
        aboutTitle
        aboutTab1Title
        aboutTab1ContentTitle
        aboutTab1Content {
          raw
        }
        aboutTab2Title
        aboutTab2ContentTitle
        aboutTab2Content {
          raw
        }
        aboutTab3Title
        aboutTab3ContentTitle
        aboutTab3Table {
          IndicatedContained
          IndicatedGrade
          IndicatedTonnage
          InferredContained
          InferredGrade
          InferredTonnage
          MeasuredContained
          MeasuredGrade
          MeasuredTonnage
          ProbableContained
          ProbableGrade
          ProbableTonnage
          ProvenContained
          ProvenGrade
          ProvenTonnage
          TotalMiContained
          TotalMiGrade
          TotalMiTonnage
          TotalReservesContained
          TotalReservesGrade
          TotalReservesTonnage
        }
        aboutTab4Title
        aboutTab4ContentTitle
        aboutTab4Table {
          afterTaxIrrFirstPercent
          afterTaxIrrSecondPercent
          afterTaxIrrThirdPercent
          afterTaxIrrFourthPercent
          afterTaxNpvFirstPrice
          afterTaxNpvSecondPrice
          afterTaxNpvThirdPrice
          afterTaxNpvFourthPrice
          aiscValue
          lomFreeCashFlowFirstPrice
          lomFreeCashFlowSecondPrice
          lomFreeCashFlowThirdPrice
          lomFreeCashFlowFourthPrice
          containedGoldValue
          lomEbitdaFirstPrice
          lomEbitdaSecondPrice
          lomEbitdaThirdPrice
          lomEbitdaFourthPrice
          millThroughputValue
          mineLifeValue
          netClosureLiabilitiesValue
          oneTonnageMilledValue
          paybackPeriodFirstYear
          paybackPeriodSecondYear
          paybackPeriodThirdYear
          paybackPeriodFourthYear
          recoveryValue
          goldFirstPrice
          goldSecondPrice
          goldThirdPrice
          goldFourthPrice
          stripRatioValue
          totalCapitalValue
          totalGoldProductionValue
          totalTonnesMinedValue
          millThroughputSecondValue
          preStripTonnageValue
          totalTonnageValue
          goldHeadGradeValue
          averageAnnualGoldValue
          firstFiveFullYearsValue
          miningCostsFirstValue
          miningCostsSecondValue
          processingCostValue
          gACostValue
          totalSiteCostsFirstValue
          totalSiteCostsSecondValue
          totalOperatingCostsValue
          initialCapitalValue
          sustainingCapitalValue
          closureCostsValue
          capitalCostsBeforeTaxValue
          netTaxesPayableValue
          goldPriceAssumptionValue
          brlFxAssumptionValue
          afterTaxNpvSecondValue
          afterTaxIrrSecondValue
          paybackValue
        }
        feasibilityStudyTableDocument {
          file {
            fileName
            url
          }
        }
        feasibilityStudyTableButtonLink
        feasibilityStudyTableButtonLabel
        historyTitle
        historyContent {
          historyContent
        }
        historyTimeline {
          items {
            year
            content
          }
        }
        historyIcons {
          file {
            url
          }
        }
      }
    }
  }
`;

export default TocantinzinhoProjects;
