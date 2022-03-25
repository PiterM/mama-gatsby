import React, { FC } from 'react';
import '../../styles/Home.sass';
import './IndexCv.sass';
import { GatsbyImage } from 'gatsby-plugin-image';
import parse from 'html-react-parser';
import { getParagraphText } from '../../utils/helpers';

interface IndexCvProps {
  data: any;
}

const IndexCv: FC<IndexCvProps> = ({ data }: IndexCvProps) => {
  const { title, subtitle, body } = data.jmSectionField;
  const { altText } = data.featuredImage.node;
  const { gatsbyImageData } = data.featuredImage.node.imageFile.childImageSharp;

  return (
    <section className="cv" id="cv">
      <div className="cv-header">
        <div className="photo-portrait">
          <GatsbyImage image={gatsbyImageData} alt={altText} />
        </div>
        <header>
          <h1 className="title">{parse(title)}</h1>
          <p className="subtitle cv-subtitle">{parse(subtitle)}</p>
        </header>
      </div>
      <p className="description cv-description">
        {parse(getParagraphText(body))}
      </p>
    </section>
  );
};

export default IndexCv;
