import React, { FC, useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import '../../styles/Home.sass';
import './IndexGallery.sass';
// import { getPhotoParams } from '../../utils/helpers';

React.useLayoutEffect = React.useEffect;

interface PhotoGalleryProps {
  data: any;
}

const PhotoGallery: FC<PhotoGalleryProps> = ({ data }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  console.log('gallery', data);

  const photoUrls = Object.keys(data).map((key: any) => {
    const src =
      data[key].imageFile.childImageSharp.gatsbyImageData.images.fallback.src;

    return {
      src,
      width: data[key].imageFile.childImageSharp.gatsbyImageData.width,
      height: data[key].imageFile.childImageSharp.gatsbyImageData.height,
    };
  });

  const photosReady = photoUrls && photoUrls.length;

  return (
    <section className="photo-gallery" id="gallery">
      <h2 className="header">Galeria zdjęć</h2>
      <p className="subtitle gallery-description">
        zdjęcia z moich zajęć z dziewczynkami
      </p>
      {photosReady && (
        <>
          <div className="gallery-grid">
            <Gallery photos={photoUrls} onClick={openLightbox} />
          </div>
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photoUrls.map((x: any) => ({
                    source: x.src,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </>
      )}
    </section>
  );
};

export default PhotoGallery;
