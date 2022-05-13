import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import { saveAs } from "file-saver";
import { DateTime } from "luxon";
import Layout from "../components/layout";
import GoldBox from "../components/goldbox";
import Modal from "../components/Modal";
import ModalWindowSubscribe from "../components/modal-window-subscribe";
import Seo from "../components/seo";
import { Hero, Intro, MarketingPosition, Article } from "../containers/homepage";

const Home = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isModalWindowOpen, setIsModalWindowOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isWindowClose, setIsWindowClose] = useState(false);

  const scrollHeight = () => {
    const currentScrollY = window.scrollY;
    const pageHeight = document.body.scrollHeight;
    if (currentScrollY > (pageHeight / 100) * 15) {
      return setIsModalWindowOpen(true);
    }
  };

  useEffect(() => {
    const userSignature = window.localStorage.getItem("user-signature");
    const dateNow = DateTime.now().startOf("day");
    const oneMonthAgo = dateNow.minus({ days: 30 }).startOf("day");
    if (!userSignature) {
      window.localStorage.setItem("user-signature", false);
    }
    if (userSignature === "successful-subscription") {
      return setIsSubmitted(true);
    } else if (isSubmitted === true) {
      window.localStorage.setItem("user-signature", "successful-subscription");
    }
    if (userSignature?.includes("unsuccessful-subscription") && userSignature.split(":").pop() > oneMonthAgo) {
    } else if (!isModalWindowOpen && isWindowClose) {
      window.localStorage.setItem("user-signature", `unsuccessful-subscription date:${dateNow}`);
    } else if (!isSubmitted) {
      window.addEventListener("scroll", scrollHeight);
      return () => window.removeEventListener("scroll", scrollHeight);
    }
  }, [isWindowClose, isModalWindowOpen, isSubmitted]);

  const { title, content, ctaButtonLink, ctaButtonText, downloadDocument } = data.presentation.nodes[0];

  const openThankModal = async (file) => {
    if (typeof window != "undefined") {
      const downloadResult = await fetch(file.url);
      const blob = await downloadResult.blob();
      saveAs(blob, file.fileName);
    }
    // setTimeout(() => {
    //   setModalOpen(true);
    // }, 1000);
  };

  return (
    <Layout>
      <Seo title="Home" />
      {modalOpen && <Modal onClose={() => setModalOpen(false)} />}
      <Hero data={data.allContentfulHomeHero.nodes[0]} />
      {isModalWindowOpen && (
        <ModalWindowSubscribe
          isSubmitted={isSubmitted}
          onClose={() => {
            setIsModalWindowOpen(false);
            setIsWindowClose(true);
          }}
          onSubmit={() => setIsSubmitted(true)}
        />
      )}

      <Intro data={data.allContentfulHomeIntroduction.nodes[0]} />
      <MarketingPosition
        data={data.allContentfulHomeMarketPosition.nodes[0]}
        className="bg-secondary pt-12 md:pt-12 pb-12"
      />
      <GoldBox
        title={title}
        main={content}
        button={ctaButtonText}
        link={ctaButtonLink}
        file={downloadDocument.file}
        onDownloadClick={openThankModal}
        blue
      />
      <Article
        quickLinks={data.allContentfulHomeNewsRelease.nodes[0]}
        news={data.news}
        mediaUpdates={data.mediaUpdates}
      />
    </Layout>
  );
};

export const query = graphql`
  query HomepageQuery($locale: String) {
    allContentfulHomeHero(filter: { node_locale: { eq: $locale } }) {
      nodes {
        title
        subtitle
        backgroundImage {
          file {
            fileName
            url
          }
        }
      }
    }
    allContentfulHomeIntroduction(filter: { node_locale: { eq: $locale } }) {
      nodes {
        title
        content {
          raw
        }
        contentButtonLabel
        videoTitle
        videoDescription
        videoLink
      }
    }
    allContentfulStockItem(filter: { node_locale: { eq: $locale } }) {
      nodes {
        ticker
        marketCapTitle
        spotGoldTitle
        stockPriceTitle
      }
    }

    allContentfulHomeMarketPosition(filter: { node_locale: { eq: $locale } }) {
      nodes {
        title
        subtitle
        content {
          raw
        }
        features {
          items {
            content
            title
          }
        }
      }
    }

    presentation: allContentfulHomeCorporatePresentation(
      filter: { node_locale: { eq: $locale } }
    ) {
      nodes {
        title
        content {
          raw
        }
        ctaButtonLink
        ctaButtonText
        downloadDocument {
          file {
            url
            fileName
          }
        }
      }
    }
    news: allContentfulNews(
      filter: { node_locale: { eq: $locale } }
      limit: 2
      sort: { fields: createdAt, order: DESC }
    ) {
      edges {
        node {
          ctaText
          ctaLink
          title
          date
          content {
            raw
          }
        }
      }
    }
    mediaUpdates: allContentfulMediaUpdates(
      filter: { node_locale: { eq: $locale } }
      limit: 2
      sort: { fields: createdAt, order: DESC }
    ) {
      edges {
        node {
          ctaText
          ctaLink
          title
          date
          content {
            raw
          }
        }
      }
    }

    allContentfulHomeNewsRelease(filter: { node_locale: { eq: $locale } }) {
      nodes {
        ctaLink
        ctaText
        title
        titleLink
        mediaUpdatesTitle
        mediaUpdatesTitleLink
        content
        quickLinksTitle
        quickLinks {
          items {
            link
            title
          }
        }
      }
    }
  }
`;

export default Home;
