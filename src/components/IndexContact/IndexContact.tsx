import React, { FC } from 'react';
import '../../styles/Home.sass';
import './IndexContact.sass';
import parse from 'html-react-parser';

interface IndexContactProps {
  data: any;
}

const IndexContact: FC<IndexContactProps> = ({ data }) => {
  return (
    <section className="contact" id="contact">
      <h2 className="header text-right">{data.title}</h2>
      <p className="subtitle contact-subtitle">{parse(data.subtitle)}</p>
      <div className="contact-data text-right">{parse(data.body)}</div>
    </section>
  );
};

export default IndexContact;
