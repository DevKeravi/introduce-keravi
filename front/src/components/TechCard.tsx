import React from "react";
import styled from "styled-components";
import CardHeader from "./CardHeader";
import SkillLogo from "./SkillLogo";

const SubWraper = styled.div`
  color: #525266;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 1.5rem;
  font-family: "SansNeo";
`;

const TechCard = () => {
  return (
    <div>
      <div>
        <CardHeader header="Skills" subtitle="보유 기술" />
      </div>
      <SubWraper>
        <div>Language</div>
        <hr />
      </SubWraper>
      <SkillLogo src="/images/c++.png" title="C++" />
      <SkillLogo src="/images/javascript.png" title="ES6" />
      <SkillLogo src="/images/typescript.png" title="TypeScript" />
      <SkillLogo src="/images/golang.png" title="GO" />
      <SubWraper>
        <div>Front-End</div>
        <hr />
      </SubWraper>
      <div></div>
      <SkillLogo src="/images/html5.png" title="HTML5" />
      <SkillLogo src="/images/css.png" title="CSS3" />
      <SkillLogo src="/images/react.png" title="React" />
      <SkillLogo src="/images/redux.png" title="Redux" />
      <SkillLogo src="/images/saga.png" title="ReduxSaga" />
      <SkillLogo src="/images/next-js.svg" title="Next.js" />
      <SkillLogo src="/images/scss.png" title="Scss" />
      <SubWraper>
        Back-End
        <hr />
      </SubWraper>
      <SkillLogo src="/images/node.png" title="Node" />
      <SkillLogo src="/images/express.png" title="Express" />
      <SkillLogo src="/images/gin.png" title="Gin-gonic" />
      <SkillLogo src="/images/mongo.png" title="MongoDB" />
      <SkillLogo src="/images/github.png" title="Github" />
      <SkillLogo src="/images/source.png" title="SoureTree" />
      <SubWraper>
        <div>Game</div>
        <hr />
      </SubWraper>
      <SkillLogo src="/images/cocos2dx.png" title="Cocos2dX" />
      <SkillLogo src="/images/direct.png" title="DX12" />
      <SkillLogo src="/images/unity.png" title="Unity" />
      <SubWraper>
        <div>Environment</div>
        <hr />
      </SubWraper>
      <SkillLogo src="/images/ubuntu.png" title="Ubuntu" />
      <SkillLogo src="/images/vim.png" title="Vim" />
      <SkillLogo src="/images/vscode.png" title="VsCode" />
    </div>
  );
};

export default TechCard;
