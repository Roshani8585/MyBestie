import React from "react";
import "./BubbleBackground.css";

const BubbleBackground: React.FC = () => {
  const bubbles = Array.from({ length: 12 });

  return (
    <div className="bubble-container">
      {bubbles.map((_, i) => (
        <span key={i} style={{ "--i": i } as React.CSSProperties}></span>
      ))}
    </div>
  );
};

export default BubbleBackground;
