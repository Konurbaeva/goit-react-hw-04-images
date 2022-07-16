function ImageGalleryItem({ webImage, openModal, description, largeImageURL }) {
  return (
    <li>
      <img src={webImage} alt={description} />
    </li>
  );
}

export default ImageGalleryItem;
