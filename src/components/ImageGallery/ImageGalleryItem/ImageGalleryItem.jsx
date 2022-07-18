import {
  ImageGalleryItemStyled,
  ImageGalleryItemImageStyled,
} from './ImageGalleryItem.styled';

function ImageGalleryItem({ webImage, openModal, description, largeImageURL }) {
  return (
    <ImageGalleryItemStyled>
      <ImageGalleryItemImageStyled
        src={webImage}
        alt={description}
        onClick={() => {
          openModal(largeImageURL);
        }}
      />
    </ImageGalleryItemStyled>
  );
}

export default ImageGalleryItem;
