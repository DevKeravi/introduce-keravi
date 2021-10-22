import React from "react";
import styled from "styled-components";
import CardHeader from "./CardHeader";

const CareerLine = styled.div`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-family: "SansNeo";
`;
const CareerCard = () => {
  return (
    <div>
      <CardHeader header="Career" subtitle="경력사항" />
      <div>
        <CareerLine>
          2016.03 ~ 2018.03 : 백제예술대학교 실용음악과 베이스 전공 졸업
        </CareerLine>
        <CareerLine>
          2018.10 ~ 2019.12 : 게임 알고리즘 및 그래픽프로그래머 양성과정 수료
        </CareerLine>
        <CareerLine>(서울게임아카데미 인증 국가 NCS 수료증)</CareerLine>
        <CareerLine> - [0803020526_16v3] 게임 알고리즘</CareerLine>
        <CareerLine> - [0803020530_16v3] 게임 인공지능</CareerLine>
        <CareerLine> - [0803020531_16v3] 게임 그래픽 프로그래밍</CareerLine>
        <CareerLine> - [0803020529_16v3] 게임 UI/UX 프로그래밍</CareerLine>
        <CareerLine> - [0803020516_16v3] 게임 UI/UX기획</CareerLine>
      </div>
      <div>
        <CardHeader header="Awards and Honors" subtitle="수상 및 대외활동" />
        <div>
          <CareerLine>2016.03 : 백제예술대학교 입학 실기 장학생</CareerLine>
          <CareerLine>
            2018.02 : 실용음악공연 " 겨울밤 " 개최 ( 공연책임자 및 밴드마스터
            자격 )
          </CareerLine>
          <CareerLine>
            2019.03 : SGA 우수포트폴리오 선정 ( SlayTheSpire 모작 )
          </CareerLine>
        </div>
      </div>
    </div>
  );
};
export default CareerCard;
