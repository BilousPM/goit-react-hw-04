const ImageCard = ({ data }) => {
  // console.log(data);

  return (
    <div>
      <img src={data.urls.small} alt="" width={300} />
    </div>
  );
};

export default ImageCard;
