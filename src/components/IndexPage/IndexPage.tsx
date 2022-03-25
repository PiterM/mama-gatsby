import React, { FC } from 'react';
import '../../styles/globals.css';
import '../../styles/bootstrap.css';
import '../../styles/paper-kit.css';
import '../../styles/Home.sass';
import IndexNavbar from '../IndexNavbar/IndexNavbar';
import { Container } from 'reactstrap';
import IndexCv from '../IndexCv/IndexCv';
import PageLayout from '../../layouts/PageLayout';
import IndexNews from '../IndexNews/IndexNews';
import IndexGallery from '../IndexGallery/IndexGallery';
import IndexVideo from '../IndexVideo/IndexVideo';
import IndexContact from '../IndexContact/IndexContact';

interface IndexProps {
  data: any;
}

const IndexPage: FC<IndexProps> = ({ data }: any) => {
  if (!data || !data.sectionJoannaMarkiewicz) {
    return null;
  }

  return (
    <PageLayout>
      <IndexNavbar />
      <Container>
        <IndexCv data={data.sectionJoannaMarkiewicz} />
        <IndexNews
          data={{
            section: data.sectionAktualnosci,
            news: data.sectionAktualnosc,
          }}
        />
        <IndexGallery data={data.jmGallery.jmGalleryField} />
        <IndexVideo data={data.jmVideo.jmVideosField.videos} />
        <IndexContact data={data.sectionKontakt.jmSectionField} />
      </Container>

      <footer className="footer">
        Copyright &copy; {new Date().getFullYear()} JoannaMarkiewicz.pl
      </footer>
    </PageLayout>
  );
};

export default IndexPage;
