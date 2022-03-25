import React, { FC } from 'react';
import '../../styles/Home.sass';
import { GatsbyImage } from 'gatsby-plugin-image';
import parse from 'html-react-parser';
import './IndexNews.sass';
import { getParagraphText } from '../../utils/helpers';

interface IndexNewsProps {
  data: any;
}

const IndexNews: FC<IndexNewsProps> = ({ data: { section, news } }) => {
  const { title, body } = section.jmSectionField;
  const { altText, imageFile } = section.featuredImage.node;
  const { gatsbyImageData } = imageFile.childImageSharp;
  const newsTitle = news.jmSectionField.title;
  const newsDate = news.jmSectionField.date;
  const newsBody = news.jmSectionField.body;

  return (
    <section className="news" id="news">
      <div className="photo-news">
        <GatsbyImage alt={altText} image={gatsbyImageData} />
      </div>
      <h2 className="header text-right">{parse(title)}</h2>
      <div className="description section-description news-description">
        {parse(getParagraphText(body))}
      </div>
      <div className="news-article">
        <h3 className="subheader">{parse(newsTitle)}</h3>
        <p className="date">{newsDate}</p>
        <div className="description news-description">
          {parse(getParagraphText(newsBody))}
        </div>
      </div>
      <div className="clear"></div>
    </section>
  );
};

export default IndexNews;
