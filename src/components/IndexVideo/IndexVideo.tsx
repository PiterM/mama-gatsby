import React, { FC } from 'react';
import ReactPlayer from 'react-player';
import '../../styles/Home.sass';
import './IndexVideo.sass';

interface IndexVideoProps {
  data: any;
}

const IndexVideo: FC<IndexVideoProps> = ({ data }) => {
  return (
    <section className="video-gallery" id="video">
      <h2 className="header">Galeria video</h2>
      <p className="subtitle video-description">
        materiały video z naszych występów
      </p>
      <div className="videos">
        {data.split('\n').map((link: string, key: number) => (
          <div className="video" key={key}>
            <ReactPlayer
              url={link.trim()}
              controls={true}
              width="100%"
              height="100%"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndexVideo;
