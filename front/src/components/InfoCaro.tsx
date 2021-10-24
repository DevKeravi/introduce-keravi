import React from "react";
import { Carousel } from "react-bootstrap";

const changeInterval = 10000;
const InfoCaro = () => {
  return (
    <Carousel fade>
      <Carousel.Item interval={changeInterval}>
        <img
          className="d-block w-100"
          src="/images/theme1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <div
            style={{
              fontFamily: "SansNeo",
              marginBottom: "1rem",
            }}
          >
            <p
              style={{
                fontSize: "1.5rem",
                marginBottom: "0.5rem",
              }}
            >
              “ 항상 소통하고 생각하는 개발 ”
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={changeInterval}>
        <img
          className="d-block w-100"
          src="/images/books.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={changeInterval}>
        <img
          className="d-block w-100"
          src="/images/assen.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default InfoCaro;
