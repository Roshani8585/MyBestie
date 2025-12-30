import React from "react";

const RoseRain: React.FC = () => {
  const roses = Array.from({ length: 20 });

  return (
    <div className="rose-container">
      {roses.map((_, index) => (
        <span key={index} className="rose">🌹</span>
      ))}
    </div>
  );
};

export default RoseRain;
