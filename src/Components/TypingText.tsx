import React, { useEffect, useState } from "react";

interface Props {
  text: string;
}

const TypingText: React.FC<Props> = ({ text }) => {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplay("");
    const interval = setInterval(() => {
      setDisplay((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [text]);

  return <p className="typing-text">{display}</p>;
};

export default TypingText;
