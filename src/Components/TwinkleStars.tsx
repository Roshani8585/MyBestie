// import React from "react";

const TwinkleStars = () => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        background: "black",
        backgroundImage:
          "radial-gradient(white 1px, transparent 1px), radial-gradient(white 1px, transparent 1px)",
        backgroundSize: "3px 3px, 2px 2px",
        backgroundPosition: "0 0, 1px 1px",
        animation: "twinkle 2s infinite alternate",
        zIndex: 0,
      }}
    />
  );
};

export default TwinkleStars;
