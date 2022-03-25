import * as React from "react";
import Helmet from "react-helmet";

const PageLayout: React.FC = ({ children }) => {
  return (
    <>
      <Helmet
        title="Joanna Markiewicz - choreograf i instruktor tańca"
        // meta={[
        //   { name: "description", content: siteMetadata.metaDescription },
        //   { name: "keywords", content: siteMetadata.metaKeywords },
        //   { property: "og:title", content: siteMetadata.metaTitle },
        //   { property: "og:description", content: siteMetadata.metaDescription },
        //   { property: "og:image", content: thumbnailUrl },
        //   { property: "og:url", content: "https://ortalio.pl" },
        //   { property: "og:site_name", content: siteMetadata.metaDescription },
        //   { property: "og:type", content: "website" },
        //   { name: "twitter:card", content: thumbnailUrl },
        //   { name: "twitter:image", content: thumbnailUrl },
        //   { name: "twitter:image:alt", content: siteMetadata.siteTitle },
        //   { name: "twitter:site", content: "@PtrMarkiewicz" },
        //   { name: "twitter:title", content: siteMetadata.metaTitle },
        //   {
        //     name: "twitter:description",
        //     content: siteMetadata.metaDescription,
        //   },
        // ]}
        link={[
          {
            href: "https://fonts.googleapis.com/css?family=Montserrat:400,700,200&display=swap",
            rel: "stylesheet",
            type: "text/css",
          },
          {
            href: "https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css",
            rel: "stylesheet",
            type: "text/css",
          },
        ]}
      />
      {children}
    </>
  );
};

export default PageLayout;
