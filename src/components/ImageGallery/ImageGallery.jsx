import styled from 'styled-components';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

const ImageGalleryStyled = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

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

// function ImageGallery({ images }) {
//   return (
//     <ImageGalleryStyled>
//       {images.map(({ id, webformatURL, largeImageURL, tags }) => (
//         <ImageGalleryItem
//           key={id}
//           webImage={webformatURL}
//           description={tags}
//           largeImageURL={largeImageURL}
//         />
//       ))}
//     </ImageGalleryStyled>
//   );
// }

export default ImageGallery;
