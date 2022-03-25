require('typescript-require');

let basePath;
exports.onPreBootstrap = () => {
  basePath = `/`;
};

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

// exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
//   const config = getConfig();
//   if (stage.startsWith('develop') && config.resolve) {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       'react-dom': '@hot-loader/react-dom',
//     };
//   }
// };

const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions;
  createResolvers({
    jm_MediaItem: {
      imageFile: {
        type: `File`,
        resolve(source) {
          return createRemoteFileNode({
            url: encodeURI(source.sourceUrl),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          });
        },
      },
    },
  });
};

exports.createPages = async ({ page, graphql, actions, reporter }) => {
  const { createPage } = actions;
  const App = require.resolve('./src/app/app.tsx');

  const jmData = await graphql(`
    query jmQuery {
      jm {
        sectionJoannaMarkiewicz: jmSection(
          id: "joanna-markiewicz"
          idType: SLUG
        ) {
          jmSectionField {
            body
            subtitle
            title
          }
          featuredImage {
            node {
              altText
              sourceUrl(size: THUMBNAIL)
              imageFile {
                childImageSharp {
                  gatsbyImageData(quality: 100)
                }
              }
            }
          }
        }
        sectionAktualnosci: jmSection(id: "aktualnosci", idType: SLUG) {
          jmSectionField {
            body
            subtitle
            title
          }
          featuredImage {
            node {
              altText
              sourceUrl(size: MEDIUM)
              imageFile {
                childImageSharp {
                  gatsbyImageData(layout: FIXED, quality: 100)
                }
              }
            }
          }
        }
        sectionAktualnosc: jmSection(
          id: "aktualnosc-zapraszam-na-balet"
          idType: SLUG
        ) {
          jmSectionField {
            body
            subtitle
            title
            date
          }
        }
        sectionKontakt: jmSection(id: "kontakt", idType: SLUG) {
          jmSectionField {
            body
            subtitle
            title
          }
        }
        jmVideo(id: "youtube-videos", idType: SLUG) {
          jmVideosField {
            videos
          }
        }
        jmGallery(id: "photo-gallery", idType: SLUG) {
          jmGalleryField {
            photo1 {
              altText
              sourceUrl(size: MEDIUM)
              imageFile {
                childImageSharp {
                  gatsbyImageData(layout: FIXED, quality: 100)
                }
              }
            }
            photo2 {
              altText
              sourceUrl(size: MEDIUM)
              imageFile {
                childImageSharp {
                  gatsbyImageData(layout: FIXED, quality: 100)
                }
              }
            }
            photo3 {
              altText
              sourceUrl(size: MEDIUM)
              imageFile {
                childImageSharp {
                  gatsbyImageData(layout: FIXED, quality: 100)
                }
              }
            }
            photo4 {
              altText
              sourceUrl(size: MEDIUM)
              imageFile {
                childImageSharp {
                  gatsbyImageData(layout: FIXED, quality: 100)
                }
              }
            }
            photo5 {
              altText
              sourceUrl(size: MEDIUM)
              imageFile {
                childImageSharp {
                  gatsbyImageData(layout: FIXED, quality: 100)
                }
              }
            }
            photo6 {
              altText
              sourceUrl(size: MEDIUM)
              imageFile {
                childImageSharp {
                  gatsbyImageData(layout: FIXED, quality: 100)
                }
              }
            }
            photo7 {
              altText
              sourceUrl(size: MEDIUM)
              imageFile {
                childImageSharp {
                  gatsbyImageData(layout: FIXED, quality: 100)
                }
              }
            }
            photo8 {
              altText
              sourceUrl(size: MEDIUM)
              imageFile {
                childImageSharp {
                  gatsbyImageData(layout: FIXED, quality: 100)
                }
              }
            }
            photo9 {
              altText
              sourceUrl(size: MEDIUM)
              imageFile {
                childImageSharp {
                  gatsbyImageData(layout: FIXED, quality: 100)
                }
              }
            }
            photo10 {
              altText
              sourceUrl(size: MEDIUM)
              imageFile {
                childImageSharp {
                  gatsbyImageData(layout: FIXED, quality: 100)
                }
              }
            }
            photo11 {
              altText
              sourceUrl(size: MEDIUM)
              imageFile {
                childImageSharp {
                  gatsbyImageData(layout: FIXED, quality: 100)
                }
              }
            }
            photo12 {
              altText
              sourceUrl(size: MEDIUM)
              imageFile {
                childImageSharp {
                  gatsbyImageData(layout: FIXED, quality: 100)
                }
              }
            }
          }
        }
      }
    }
  `);

  if (jmData.errors) {
    reporter.panic(jmData.errors);
  }

  const data = jmData?.data?.jm;

  createPage({
    ...page,
    path: basePath,
    component: App,
    context: { data },
  });
};
