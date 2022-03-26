import React from 'react';
import IndexPage from '../components/IndexPage/IndexPage';
import Helmet from 'react-helmet';

const App: React.FC = ({ pageContext: { data } }: any) => {
  const faviconUrl = require(__dirname + '/../images/favicon.ico').default;
  const thumbnailImageUrl =
    require('/src/images/thumbnail/joannamarkiewicz.pl.jpg').default;

  return (
    <>
      <Helmet
        title="Joanna Markiewicz - choreograf i instruktor tańca"
        meta={[
          { name: 'description', content: 'Instruktor baletu w Olsztynie' },
          {
            name: 'keywords',
            content:
              'Joanna Markiewicz, choreograf, instruktor tańca, balet, instruktor baletu, taniec, ognisko baletowe, olsztyn, baletnice, dziewczynki',
          },
          {
            property: 'og:title',
            content: 'Joanna Markiewicz - choreograf i instruktor tańca',
          },
          {
            property: 'og:description',
            content: 'Choreograf i instruktor tańca z Olsztyna',
          },
          {
            property: 'og:image',
            content: thumbnailImageUrl,
          },
          { property: 'og:url', content: 'https://joannamarkiewicz.pl' },
          {
            property: 'og:site_name',
            content: 'Choreograf i instruktor tańca z Olsztyna',
          },
          { property: 'og:type', content: 'website' },
        ]}
        link={[
          {
            rel: 'icon',
            type: 'image/x-icon',
            href: faviconUrl,
          },
        ]}
      />
      <IndexPage data={data} />;
    </>
  );
};

export default App;
