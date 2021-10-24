import React from "react";
import { Row, Col } from "react-bootstrap";
import CardHeader from "./CardHeader";

const ProfileCard = () => {
  return (
    <Row>
      <CardHeader header="Who are you?" subtitle="93.01.21" />
      <Col lg={4} sm={12}>
        <div
          className="card-wrapper"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div style={{ float: "left" }}>
            <img src="/images/profile.jpg" alt="profile" />
          </div>
        </div>
      </Col>
      <Col lg={8} sm={12}>
        <div
          style={{
            float: "left",
            lineHeight: "140%",
            wordSpacing: 4,
            textAlign: "center",
            fontSize: "1.3rem",
            fontFamily: "SansNeo",
          }}
        >
          안녕하세요 ! 웹 개발자 채성렬입니다. <br />
          SGA부산에서 게임 그래픽 프로그래머 국가 과정을 이수 한 후, <br />
          웹이 주는 매력에 빠져, 풀스택을 독학으로 시작 하였습니다. <br />
          빠르게 변하는 웹의 트렌드에 맞춰 다양한 시도를 해보고 있으며, <br />
          좀 더 나은 유저 경험을 위해, 항상 고민하고 있습니다. <br />
          프론트 업무가 주력이지만, 백엔드 업무도 겸하면서 작업을 진행해와서,{" "}
          <br />
          서로의 고충과 이해관계를 잘 수용할 수 있습니다. <br />
          현재는 개발에 집중하고있지만, 기획에도 관심이 많아 <br />
          아이디어를 실현 시키는 일도 도전해보고 싶습니다. <br />" 소통하고,
          이해하는 개발을 꿈꾸는 개발자 채성렬이었습니다. "
        </div>
      </Col>
    </Row>
  );
};

export default ProfileCard;
