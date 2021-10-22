import React from "react";
import { Carousel } from "react-bootstrap";

const changeInterval = 1000000;
const InfoCaro = () => {
  return (
    <Carousel fade>
      <Carousel.Item interval={changeInterval}>
        <img
          className="d-block w-100"
          src="/images/theme1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={changeInterval}>
        <img
          className="d-block w-100"
          src="http://placehold.it/800x300"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={changeInterval}>
        <img
          className="d-block w-100"
          src="http://placehold.it/800x300"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default InfoCaro;
