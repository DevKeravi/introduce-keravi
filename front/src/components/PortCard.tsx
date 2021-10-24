import React from "react";
import CardHeader from "./CardHeader";
import styled from "styled-components";
import PortfolioCard from "./PortfolioCard";
import { portfolioPropsArray } from "./PortfolioCard";

const webData: portfolioPropsArray = {
  props: [
    {
      src: "/images/develop.jpg",
      title: "프론트 엔드 포트폴리오 ( 개발중 )",
      desc: "API 를 이용한 프론트엔드 포트폴리오 입니다.",
      footer: "사용된 기술 : React, Redux, Redux-Toolkit, Next.js, Semantic UI",
      link: "#",
    },
    {
      src: "/images/develop.jpg",
      title: "풀스택 포트폴리오 ( 개발중 )",
      desc: "프론트엔드와 백엔드 그리고 AWS를 다룬 풀스택 포트폴리오 입니다.",
      footer:
        "사용된 기술 : React, Redux, Next.js, Antd, Golang, Gin-gonic, MongoDB, AWS",
      link: "#",
    },
  ],
};

const gameData: portfolioPropsArray = {
  props: [
    {
      src: "/images/kirby.png",
      title: "별의 커비",
      desc: "WinApi로 작업한 별의 커비 모작 포트폴리오입니다.",
      footer: "작업기간: 12일",
      link: "https://www.youtube.com/watch?v=nL6MzJg9ZfQ",
    },
    {
      src: "/images/slay.jpg",
      title: "슬레이 더 스파이어",
      desc: "Cocos2dx 로 작업한 슬레이 더 스파이어 모작 포트폴리오입니다.",
      footer: "작업기간: 1주",
      link: "https://www.youtube.com/watch?v=dfBMEfIsmc8",
    },
    {
      src: "/images/monster.jpg",
      title: "몬스터 헌터",
      desc: "DirectX11 로 작업한 몬스터 헌터 모작 포트폴리오입니다.",
      footer: "작업기간: 3주",
      link: "https://www.youtube.com/watch?v=PfDJAFqLdfs",
    },
    {
      src: "/images/portal.jpg",
      title: "포탈",
      desc: "Unity Engine 으로 작업한 포탈 모작 포트폴리오입니다.",
      footer: "작업기간: 1달",
      link: "https://www.youtube.com/watch?v=IAM2nbftdw0",
    },
  ],
};

const SubWraper = styled.div`
  color: #525266;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 1.5rem;
  font-family: "SansNeo";
`;
const PortCard = () => {
  return (
    <div>
      <CardHeader header="Portfolio" subtitle="포트폴리오" />
      <div
        style={{
          fontFamily: "SansNeo",
          textAlign: "center",
          marginBottom: "1rem",
          fontSize: "1.2rem",
        }}
      >
        사진을 클릭 시 포트폴리오 소개 유튜브 영상 페이지가 열립니다.
      </div>
      <div>
        <SubWraper>
          웹 프로그래밍 포트폴리오
          <hr />
        </SubWraper>
        <PortfolioCard {...webData} />
        <SubWraper>
          게임 프로그래밍 포트폴리오
          <hr />
        </SubWraper>
        <PortfolioCard {...gameData} />
      </div>
    </div>
  );
};

export default PortCard;
