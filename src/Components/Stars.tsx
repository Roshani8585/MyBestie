import React, { useEffect, useState } from "react";

// Star type
interface StarType {
  top: number;
  left: number;
  size: number;
}

// Component (memoized so it never re-renders)
const Stars: React.FC = React.memo(() => {
  const [stars, setStars] = useState<StarType[]>([]);

  useEffect(() => {
    const generatedStars: StarType[] = Array.from({ length: 120 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 3 + 1,
    }));

    setStars(generatedStars);
  }, []); // Runs once only

  return (
    <>
      {stars.map((star, i) => (
        <span
          key={i}
          className="star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            position: "absolute",
          }}
        />
      ))}
    </>
  );
});

export default Stars;
