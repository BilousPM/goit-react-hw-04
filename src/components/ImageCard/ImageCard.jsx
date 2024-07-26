import s from "./ImageCard.module.css";

const ImageCard = ({ data, onClick }) => {
  return (
    <>
      <img
        className={s.image}
        src={data.urls.small}
        alt=""
        width={350}
        height={300}
        onClick={() => onClick(data.urls.regular)}
        style={{ cursor: "pointer" }}
      />
    </>
  );
};
export default ImageCard;
