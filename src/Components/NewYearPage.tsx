import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Balloons.css";

const NewYearPage: React.FC = () => {
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  const now = new Date();

  const isNewYear =
    now.getDate() === 31 &&
    now.getMonth() === 11 &&
    now.getFullYear() === 2025;

  const handleClick = () => {
    if (isNewYear) {
      navigate("/login");
    } else {
      setShowMessage(true);
    }
  };

  return (
    <div className={`ny-container ${showMessage ? "blur-bg" : ""}`}>

      {/* 💦 Water Bubbles */}
      <div className="bubble-layer">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="bubble"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${12 + Math.random() * 25}px`,
              height: `${12 + Math.random() * 25}px`,
              animationDuration: `${8 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* 🎈 Balloons */}
      <div className="balloon-container">
        {Array.from({ length: 40 }).map((_, i) => (
          <span key={i} className="balloon" style={{ "--i": i } as any} />
        ))}
      </div>

      {/* ✨ Sparkles */}
      <div className="sparkle-layer">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="sparkle" />
        ))}
      </div>

      <h3 className="ny-title" style={{fontFamily:"cursive"}}>
        🌙 Hey, My Hero ✨<br />
        <span>Welcome <br/>To The Magical World 2026 ✨</span>
      </h3>

      <button onClick={handleClick} className="ny-button" style={{fontFamily:"cursive"}}>
       Welcome 2026 💖
      </button>

      {showMessage && <div className="night-stars"></div>}

      {showMessage && (
        <div className="ny-modal">
          <div className="ny-modal-content" style={{fontFamily:"initial"}}>
            <h1 style={{fontSize:"30px",color:"#b21111"}}>🌸 Just a Little Wait, My Bestie 🌸</h1>         
            <p style={{fontSize:"20px",fontFamily:"cursive"}}
            >
              {/* ✨ My Dear Friend ✨ <br /> */}
              The magical gates of New Year open only when the universe says so 💫
              <br /><br />
              🎆 Please wait Sometime.. 
              🎆 
            </p>
            <span>
              Open at 01/01/2026 12:00 AM
            </span><br />
            <button onClick={() => setShowMessage(false)} className="ny-close" style={{fontFamily:"initial",fontSize:"19px"}}>
              Okay 💗
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewYearPage;
