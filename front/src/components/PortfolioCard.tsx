import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import styled from "styled-components";

export interface portfolioPorps {
  src: string;
  title: string;
  desc: string;
  footer: string;
  link: string;
}

export interface portfolioPropsArray {
  props: portfolioPorps[];
}

const CardWrapper = styled(Card)`
  font-family: "SansNeo";
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const PortfolioCard = ({ props }: portfolioPropsArray) => {
  return (
    <Row xs={1} md={2} className="g-4">
      {props.map((v, i) => (
        <Col key={i}>
          <CardWrapper>
            <a
              href={v.link}
              rel="noreferrer"
              target={v.link === "#" ? "" : "_blank"}
            >
              <Card.Img variant="top" src={v.src} />
            </a>
            <Card.Body>
              <Card.Title>{v.title}</Card.Title>
              <Card.Text>{v.desc}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{v.footer}</small>
            </Card.Footer>
          </CardWrapper>
        </Col>
      ))}
    </Row>
  );
};

export default PortfolioCard;
