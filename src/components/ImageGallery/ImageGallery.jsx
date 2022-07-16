// import { ImageGalleryItem } from './ImageGalleryItem';

import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ images, openModal }) {
  return (
    <ul>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webImage={webformatURL}
          description={tags}
          openModal={openModal}
          largeImageURL={largeImageURL}
        />
      ))}
    </ul>
  );
}

export default ImageGallery;
