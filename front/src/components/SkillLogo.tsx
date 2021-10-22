import React from "react";
import { Image } from "react-bootstrap";

interface logoProps {
  src: string;
  title: string;
}
const SkillLogo = ({ src, title }: logoProps) => {
  return (
    <div
      style={{
        display: "inline-block",
        marginTop: "1.5rem",
        marginLeft: "3rem",
      }}
    >
      <div style={{ alignContent: "center" }}>
        <Image src={src} alt={title} roundedCircle style={{ width: "100px" }} />
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "1.5rem",
          fontSize: "1.2rem",
          marginBottom: "1.5rem",
          color: "#423f3b",
          letterSpacing: 2,
          fontFamily: "SansNeo",
          width: "100px",
        }}
      >
        {title}
      </div>
    </div>
  );
};

export default SkillLogo;
