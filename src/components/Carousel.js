import Carousel from "react-bootstrap/Carousel";

const CarouselImages = ({ item }) => {
  return (
    <Carousel slide={false} variant="dark" controls={false} indicators={false}>
      {item.images.map((image) => (
        <Carousel.Item key={image} interval={2000}>
          <img
            className="d-block w-100"
            src={image}
            alt="Ayuntamiento"
            // style={{ height: "88%" }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselImages;
