import React from "react";
import FirecrackerCanvas from "../Components/FirecrackerCanvas";

interface Props {
  onClose: () => void;
}

const NewYearModal: React.FC<Props> = ({ onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0, 0, 0, 0.85)",
        backdropFilter: "blur(6px)",
        zIndex: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {/* Firecrackers Behind */}
      <FirecrackerCanvas />

      {/* Magical Floating Particles */}
      <div style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}>
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              width: "8px",
              height: "8px",
              background: "radial-gradient(circle, #ffeaff, #ff00cc)",
              borderRadius: "50%",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: 0.7,
              boxShadow: "0 0 15px #ff00dd",
              animation: `floatUp ${4 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Magical Card */}
      <div
        style={{
          position: "relative",
          zIndex: 40,
          padding: "40px 30px",
          width: "95%",
          maxWidth: "550px",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "25px",
          border: "2px solid rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(10px)",
          boxShadow:
            "0 0 25px rgba(255,255,255,0.3), 0 0 60px rgba(255,0,170,0.5)",
          textAlign: "center",
          animation: "fadeInUp 1s ease",
        }}
      >
        {/* Hand Holding Effect */}
        <div
          style={{
            position: "absolute",
            bottom: "-70px",
            left: "50%",
            transform: "translateX(-50%)",
            // backgroundImage:
            //   "url('https://i.imgur.com/0xLxY0r.png')", // hand image
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            width: "250px",
            height: "250px",
            pointerEvents: "none",
            opacity: 0.9,
          }}
        ></div>

        {/* Heading */}
        <h1
          style={{
            fontFamily:"fangsong",
            fontSize: "43px",
            fontWeight: "900",
            background:
              "linear-gradient(90deg, #ffdd55, #ff00c8, #8b5cf6)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            textShadow: "0 0 25px rgba(255,0,200,0.9)",
          }}
        >
          💖Happy New Year Bestie💖<br/>
          <span>"Amit"</span>
         
        </h1>
        <h2
        style={{
            fontFamily:"cursive",
            fontSize: "20px",
            fontWeight: "900",
            background:
              "linear-gradient(90deg, #ffdd55, #ff00c8, #8b5cf6)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            textShadow: "0 0 25px rgba(255,0,200,0.9)",
          }}
        >
           01/01/2026 - Wednesday
        </h2>

        {/* Lovely Sentence */}
        <p
          style={{
            fontFamily:"cursive",
            marginTop: "15px",
            fontSize: "20px",
            color: "white",
            lineHeight: 1.6,
            textShadow: "0 0 10px rgba(255,255,255,0.6)",
          }}
        >
          Wishing you for all time for your happiness and success. Achieve your goal with blessing of gods.  
          Your new year filled with 
          **love, success, magic, and endless happiness**. 
           ✨💖  
          Keep smiling, bestie — you deserve all the brightness in the world 🌟
        </p>

        {/* Enter Button */}
        <button
          onClick={onClose}
          style={{
            marginTop: "30px",
            padding: "14px 40px",
            fontSize: "22px",
            fontWeight: "700",
            background:
              "linear-gradient(135deg, #ff00a2, #ff8800, #ffe600)",
            border: "none",
            borderRadius: "15px",
            color: "black",
            cursor: "pointer",
            boxShadow: "0 0 30px #ff00d9, 0 0 60px #ffa600",
            transition: "0.3s",
          }}
        >
          Come To The New World ✨🚀
        </button>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) scale(0.8); opacity: 0.8; }
          50% { transform: translateY(-40px) scale(1.3); opacity: 1; }
          100% { transform: translateY(0) scale(0.8); opacity: 0.6; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default NewYearModal;
