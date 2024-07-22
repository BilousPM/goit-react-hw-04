import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ photos }) => {
  console.log(photos);
  return (
    <ul className={s.list}>
      {photos.map((photo) => (
        <li key={photo.id} className={s.item}>
          <ImageCard data={photo} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
