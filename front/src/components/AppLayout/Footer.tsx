import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";

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
  div {
    margin-bottom: 0.5rem;
  }
  span {
    margin-right: 1rem;
  }
`;

const Footer = () => {
  return (
    <>
      <FooterCard>
        <div>웹과 게임 개발을 즐기는 프로그래머 채성렬입니다.</div>
        <div>
          <span>
            <a href="https://github.com/DevKeravi">GitHub</a>
          </span>
          <span>
            <a href="https://devkeravi.site">HomePage</a>
          </span>
        </div>
      </FooterCard>
    </>
  );
};

export default Footer;
