import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Stars from "./Stars";
import NewYearModal from "./NewYearModal"; // 👈 import modal

const Login: React.FC = () => {
  const [password, setPassword] = useState("");
  const [isPortal, setIsPortal] = useState(false);
  const [showModal, setShowModal] = useState(false); // 👈 NEW
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password === "hero" || password === "atm") {
      setIsPortal(true); // portal + fireworks

      // show modal AFTER animation
      setTimeout(() => {
        setShowModal(true);
      }, 1500);
    } else {
      alert("❌ Wrong Password! Try: roshani");
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate("/dashboard"); // 👉 finally go to dashboard
  };

  return (
    <>
      <div className={`night-sky ${isPortal ? "portal-transition" : ""}`}>
        {/* Stars */}
        <Stars />

        {/* Fireworks */}
        {isPortal && <div className="fireworks"></div>}

        {/* Login Card */}
        <div className="login-card">
          <h2 className="title" style={{ fontFamily: "cursive" ,fontSize:"35px"}}>
            !! Happy New Year !!
          </h2>
          <h3
            className="title"
            style={{ fontSize: "30px", fontFamily: "cursive" }}
          >
            💖 My Hero 💖
          </h3>

          <p className="subtitle">
            ❤️ You are my best friend forever and ever ❤️ <br />
            "My Dearest Friend"
          </p>

          <p className="love-text">
            ❤️ “I pray to God, you always stay happy and keep smiling,
            with me or without me” ❤️
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="password"
              placeholder="What I Call You !"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-box"
              required
            />

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
      </div>

      {/* 🎉 NEW YEAR MODAL */}
      {showModal && <NewYearModal onClose={handleModalClose} />}
    </>
  );
};

export default Login;
