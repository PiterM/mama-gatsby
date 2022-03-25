require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Joanna Markiewicz - choreograf i instruktor tańca`,
    siteUrl: `https://joannamarkiewicz.pl`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          includePaths: ["src"],
          indentedSyntax: true,
        },
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "jm",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "jm",
        // Url to query from
        url: process.env.GRAPHQL_PREPR_API_URL,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: "https://joannamarkiewicz.pl",
        sitemap: null,
        policy: [{ userAgent: "*", allow: "/", disallow: null }],
      },
    },
  ],
};
