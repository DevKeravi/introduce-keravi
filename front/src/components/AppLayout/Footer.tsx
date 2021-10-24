import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import {
  Github,
  Bootstrap,
  House,
  Envelope,
  Youtube,
} from "react-bootstrap-icons";

const FooterCard = styled(Card)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  text-align: center;
  width: 60%;
  margin-top: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  span {
    margin-right: 1rem;
    a {
      margin-left: 0.5rem;
    }
  }
  font-family: "SansNeo";
`;

const Footer = () => {
  return (
    <>
      <FooterCard>
        <div style={{ marginBottom: "0.5rem" }}>
          웹과 게임 개발을 즐기는 프로그래머 채성렬입니다.
        </div>
        <div>
          <span>
            <Github />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/DevKeravi"
            >
              GitHub
            </a>
          </span>
          <span>
            <Bootstrap />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://keravi.tistory.com"
            >
              Blog
            </a>
          </span>
          <span>
            <House />
            <a target="_blank" rel="noreferrer" href="https://devkeravi.site">
              HomePage
            </a>
          </span>
          <span>
            <Youtube />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/channel/UC9gYsn_M_jv7vzENBhKZHtA"
            >
              Youtube{" "}
            </a>
          </span>
          <div style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
            <span>
              <Envelope />
              <span style={{ marginLeft: "0.5rem" }}>cmkrosp@gmail.com</span>
            </span>
          </div>
        </div>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.8rem" }}>
          " 본 사이트는 반응형으로 제작되어 모바일에서도 보실 수 있습니다."
        </div>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}>
          Made By Dev.Keravi
        </div>
      </FooterCard>
    </>
  );
};

export default Footer;
