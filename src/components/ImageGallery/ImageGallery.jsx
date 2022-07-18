import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';

function ImageGallery({ images, openModal }) {
  return (
    <ImageGalleryStyled>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webImage={webformatURL}
          description={tags}
          openModal={openModal}
          largeImageURL={largeImageURL}
        />
      ))}
    </ImageGalleryStyled>
  );
}

export default ImageGallery;
