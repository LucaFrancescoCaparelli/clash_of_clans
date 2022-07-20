import Carousel from "react-bootstrap/Carousel";

const CarouselImages = ({ item, id }) => {
  return (
    <Carousel slide={false} variant="dark" controls={false} indicators={false}>
      {item.images.map((image) => (
        <Carousel.Item
          key={Math.floor(Math.random() * (10000 - 2) + 2)}
          interval={1200}
        >
          <img
            className="d-block w-100"
            src={image}
            alt="Niveles"
            // style={{ height: "88%" }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselImages;
