import React from "react";

interface headerProps {
  header: string;
  subtitle: string;
}

const CardHeader = ({ header, subtitle }: headerProps) => {
  return (
    <div style={{ marginBottom: "2rem", marginTop: "3rem" }}>
      <div>
        <span style={{ fontSize: "2rem", color: "#ff6666" }}>{header}</span>
        <span
          style={{
            float: "right",
            color: "#525266",
            paddingTop: "1rem",
            fontFamily: "SansNeo",
          }}
        >
          {subtitle}
        </span>
        <hr style={{ color: "#423f3b" }} />
      </div>
    </div>
  );
};

export default CardHeader;
