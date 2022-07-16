// export const ImageGallery = ({ images }) => {
//   return (
//     <ul className="gallery">
//       {images.map(({ id, webformatURL, largeImageURL }) => (
//         <li className="gallery-item" key={id}>
//           <img src={webformatURL} alt="" />
//         </li>
//       ))}
//     </ul>
//   );
// };

export const ImageGallery = ({ images }) => {
  return (
    <ul className="gallery">
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <li className="gallery-item" key={id}>
          <img src={webformatURL} alt="" />
        </li>
      ))}
    </ul>
  );
};
