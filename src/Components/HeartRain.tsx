import React from "react";
import "./HeartRain.css";

const HeartRain: React.FC = () => {
  const hearts = Array.from({ length: 15 });

  return (
    <div className="heart-rain">
      {hearts.map((_, i) => (
        <span key={i} className="heart" style={{ left: `${Math.random() * 100}%` }}>
          ❤️
        </span>
      ))}
    </div>
  );
};

export default HeartRain;
