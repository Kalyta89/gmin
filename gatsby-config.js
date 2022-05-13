const path = require("path");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  );
}

const contentfulConfig = {
  spaceId,
  accessToken,
};

if (process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN) {
  contentfulConfig.host = "preview.contentful.com";
  contentfulConfig.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
}

module.exports = {
  siteMetadata: {
    title: `G Mining Ventures`,
    description: `THE NEW APPROACH TO PROJECT DEVELOPMENT`,
    siteUrl: `https://www.gminingventures.com/`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-use-query-params',
    // 'gatsby-plugin-image',
    // 'gatsby-plugin-sharp',
    // 'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gmining Ventures`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `static/favicon/favicon-16x16.png`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require('tailwindcss'),
          require('./tailwind.config.js'), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [require(`tailwindcss`)(`./tailwind.config.js`)],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`],
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-hubspot-forms',
      options: {
        apiKey: process.env.HUBSPOT_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en-US`, `fr`],
        // language file path
        defaultLanguage: `en-US`,
        // option to redirect to `/en` when connecting `/`
        redirect: true,
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-Z96KNNBWEW"],
        pluginConfig: {
          head: true,
        },
      },
    },
  ],
};
