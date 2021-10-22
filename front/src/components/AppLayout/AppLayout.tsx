import React from "react";
import type { ReactNode } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "./NavBar";
import Footer from "./Footer";
import styled from "styled-components";
import InfoCaro from "../InfoCaro";

interface AppLayoutProps {
  children?: ReactNode;
}

const ContentRow = styled(Row)`
  margin-left: 2rem;
  margin-right: 2rem;
`;

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Navbar />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="Info-caro" style={{ marginTop: "1rem" }}>
              <InfoCaro />
            </div>
          </Col>
        </Row>
        <Row style={{ float: "none", margin: "0 auto" }}>
          <Col style={{ float: "none", margin: "0 auto" }}>
            <ContentRow>{children}</ContentRow>
          </Col>
        </Row>
        <Row style={{ marginTop: "2rem" }}>
          <Footer />
        </Row>
      </Container>
    </div>
  );
};

export default AppLayout;
