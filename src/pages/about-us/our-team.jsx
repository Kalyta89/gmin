import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/layout";
import Hero from "../../components/hero";
import Team from "../../containers/our-team/Team";
import Seo from "../../components/seo";

const OurTeam = ({ data }) => {
  const { title, heroImage, subtitle } = data.hero.nodes[0];

  return (
    <Layout inverted>
      <Seo title="Our team" />
      <Hero title={title} slogan={subtitle} image={heroImage} />
      <Team data={data.team.nodes[0]} members={data.members.edges} />
    </Layout>
  );
};

export const query = graphql`
  query OurTeamQuery($locale: String) {
    members: allContentfulTeamMember(
      filter: { node_locale: { eq: $locale } }
      sort: { fields: order }
    ) {
      edges {
        node {
          name
          image {
            file {
              url
            }
          }
          position
          bioRichText {
            raw
          }
          role
          isBoardOfDirectors
          linkedinLink
          emailLink
        }
      }
    }
    team: allContentfulOurTeamManagementTeam(
      filter: { node_locale: { eq: $locale } }
    ) {
      nodes {
        title
        subheading
        heading
      }
    }
    hero: allContentfulOurTeamHero(filter: { node_locale: { eq: $locale } }) {
      nodes {
        title
        subtitle
        heroImage {
          file {
            url
          }
        }
      }
    }
  }
`;

export default OurTeam;
