import React, { ReactNode } from "react";
import { Row, Col, Card } from "react-bootstrap";

export interface contactPorps {
  title: string;
  link: string;
  icon: ReactNode;
  linkable: boolean;
}
export interface contactPropsArray {
  props: contactPorps[];
}

const ContactCard = ({ props }: contactPropsArray) => {
  return (
    <Row xs={1} md={2} className="g-4">
      {props.map((v, i) => (
        <Col key={i}>
          <Card>
            <div style={{ textAlign: "center" }}>
              <Card.Body>
                <Card.Title>
                  <div style={{ marginBottom: "0.5rem" }}>
                    <span style={{ marginRight: "0.5rem", fontSize: "1.5rem" }}>
                      {v.icon}
                    </span>
                    {v.title}
                  </div>
                </Card.Title>
                <Card.Text>
                  <span style={{ fontSize: "1.1rem" }}>
                    {v.linkable ? (
                      <a target="_blank" rel="noreferrer" href={v.link}>
                        {v.link}
                      </a>
                    ) : (
                      `${v.link}`
                    )}
                  </span>
                </Card.Text>
              </Card.Body>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ContactCard;
