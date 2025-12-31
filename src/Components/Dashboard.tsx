import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import atm3 from "./Images/amit3.jpg";
import atm4 from "./Images/amit4.jpg";
import atm5 from "./Images/amit5.jpg";
import atm8 from "./Images/amit8.jpg";
import atm11 from "./Images/amit11.jpg";


type TabKey = "home" | "wishes" | "secrets" | "memories" | "Favourite";

const memories = [
  { img: atm4, text: "Always be happy and enjoy your life 🤍" },
  { img: atm3, text: "*Looing so Handsome with sweet smile*" },
  { img: atm5, text: "Explore the world and gain everything as you want 🤍" },
  { img: atm8, text: "Always achieve your dreams and goal 🤍" },
  { img: atm11, text: "You are such a lovely boy🤍" },
];

const secretSongs = ["tKSPiBWLS_M", "QAtn8SvK2nU"]; // YouTube IDs

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("home");
  // const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [memoryIndex, setMemoryIndex] = useState(0);
  
  // Secrets modal state
  const [isSecretModalOpen, setIsSecretModalOpen] = useState(false);
  const [secretInput, setSecretInput] = useState("");
  const [isSecretUnlocked, setIsSecretUnlocked] = useState(false);

  // Reset song index when Secrets tab is selected
  useEffect(() => {
    if (activeTab === "secrets") {
      // setCurrentSongIndex(0);
      setIsSecretModalOpen(true); // open modal first
      setIsSecretUnlocked(false); // reset unlock
      setSecretInput("");
    }
  }, [activeTab]);
const [playingVideos, setPlayingVideos] = useState<boolean[]>(
  secretSongs.map(() => false) // Initially, all videos are stopped
);

  // const handleSongEnd = () => {
  //   setCurrentSongIndex((prev) => (prev + 1) % secretSongs.length);
  // };
const handlePlayVideo = (index: number) => {
  setPlayingVideos((prev) =>
    prev.map((_, i) => i === index) // Only the clicked video is true, others false
  );
};

const handleStopVideo = (index: number) => {
  setPlayingVideos((prev) =>
    prev.map((v, i) => (i === index ? false : v))
  );
};



  const handleSecretSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (secretInput.toLowerCase() === "rosh" || secretInput.toLowerCase() === "babu") {
      setIsSecretUnlocked(true);
      setIsSecretModalOpen(false);
    } else {
      alert("❌ Wrong secret code! Try again.");
    }
  };

  // const renderSecrets = () => {
  //   if (!isSecretUnlocked) return null;

  //   return (
  //     <div className="secret-box">
  //       <h2>🤫 Secret Music & Love</h2>
  //       <p className="secret-text">Close your eyes… let this play for your heart 🎶💖</p>

  //       <div style={{ position: "relative", width: "100%", height: "50%", marginTop: "20px" }}>
  //         <iframe
  //           key={secretSongs[currentSongIndex]}
  //           src={`https://www.youtube.com/embed/${secretSongs[currentSongIndex]}`}
  //           title="Secret Music Video"
  //           style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
           
  //         />
  //       </div>

  //       {/* Stylish Hearts & Fireworks */}
  //       <div className="secret-bg" />
  //       <div className="secret-hearts">{Array.from({ length: 16 }).map((_, i) => (<span key={i} className="secret-heart">❤️</span>))}</div>
  //       <div className="secret-fireworks">{Array.from({ length: 8 }).map((_, i) => (<span key={i} className="secret-spark" />))}</div>
  //     </div>
  //   );
  // };
const BestFriendWishes = () => {
  return (
    <div className="wish-wrapper">
      <div className="wish-glass">
        <h1 className="wish-title"><u>🤍 For My Best Friend 🤍</u></h1>

        <p className="wish-subtitle">
          Not just today… but for every day of your life ✨
        </p>

        <div className="wish-cards">
          <div className="wish-card">🌸 May your heart always feel light and happy</div>
          <div className="wish-card">🌈 May happiness follow you quietly and achieve everything</div>
          <div className="wish-card">✨ May your efforts turn into success and fame</div>
          <div className="wish-card">💫 May your dreams never feel too far ,get all as you want</div>
          <div className="wish-card">🤍 May you always know your worth and happiness</div>
          <div className="wish-card">🕊️ May peace dwell within you, and may God bless you always.</div>
        </div>

        <p className="wish-note">
          I don’t promise to fix everything for you…  
          but I promise to stand beside you  
          through everything 🤍
        </p>

        <div className="wish-sign">
          — Yours, <span>Roshani</span> 💖
        </div>
      </div>

      <div className="wish-floating-hearts">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i}>🤍</span>
        ))}
      </div>
    </div>
  );
};

  const renderContent = () => {
    switch (activeTab) {
    case "home":
  return (
    <div className="newyear-letter-container">
      <div className="newyear-letter">
        <h1 style={{fontSize:"25px",lineHeight:"0.1"}}><u>💕My Dear Best Friend 💕</u></h1>

        <p className="letter-text" style={{fontFamily:"cursive"}}>
          <br/>
          <div style={{justifyContent:"center"}}>
          i)  I wish you Happy New Year my bestie with lots of love. 💖  <br/>
          ii) You are very special for me, don't know why but it's true.Always stay with me.<br/>
          iii)I want to say thank you for being my best friend and always support and care for me and i always happy with you. <br/> 
          iv)I always pray only you are being my best friend in my all new birth.<br/>
          v)I don't ever want to lose you and i want -You will always be my true friend.<br/>
          vi)I want -you always chear up in your life, gain more happiness and be a successful man. 
          <br /><br />
         <b>"💕Always stay happy  with beautiful soul you are 💕"</b>
          </div>
          {/* i)  As this new year begins, I just want you to know how special you are 💖  
          May your days be filled with soft smiles, peaceful moments,  
          and dreams that gently come true 🌸  
          <br /><br />
          Thank you for being a part of my journey,  
          for every laugh, every memory, and every silent support 🤍  
          <br /><br />
          May this year wrap you in warmth,  
          paint your life with happiness 🌈  
          and give you reasons to smile every single day ✨  
          <br /><br />
          Always stay the beautiful soul you are 💕 */}
        </p>

        <div className="letter-sign">
          — With Love, <span>Roshani</span> 💖
        </div>
      </div>
    </div>
  );

      case "wishes":
  return <BestFriendWishes />;

case "secrets":
  return (
    <>
      {isSecretModalOpen && (
        <div className="modal-overlay">
          <div className="modal-card">
            <h2>🤫 Secret Code Required</h2>
            <form onSubmit={handleSecretSubmit}>
              <input
                type="text"
                placeholder="Enter secret code"
                value={secretInput}
                onChange={(e) => setSecretInput(e.target.value)}
                className="input-box"
                autoFocus
              />
              <button type="submit" className="submit-btn">Unlock</button>
            </form>
          </div>
        </div>
      )}

      {isSecretUnlocked && (
        <div className="secret-box">
          <h2>🤫 Secret Love & Music</h2>
          <p className="secret-text">Dedicated to you...🎶💖</p>

          <div className="secret-video-container">
            {secretSongs.map((videoId, index) => (
              <div key={index} className="video-wrapper">
                {!playingVideos[index] && (
                  <div
                    className="video-overlay"
                    onClick={() => handlePlayVideo(index)}
                  >
                    <span className="play-icon">▶</span>
                  </div>
                )}

                {playingVideos[index] && (
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1`}
                    title={`Secret Video ${index + 1}`}
                    className="secret-video-iframe"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                )}

                {playingVideos[index] && (
                  <button
                    className="stop-btn"
                    onClick={() => handleStopVideo(index)}
                  >
                    ⏹ Stop
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Decorative floating hearts */}
          <div className="secret-hearts">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i}>❤️</span>
            ))}
          </div>
        </div>
      )}
    </>
  );

      case "memories":
        return (
          <div className="memory-split">
            <div className="memory-left">
              <span className="arrow left" onClick={() => setMemoryIndex((prev) => (prev - 1 + memories.length) % memories.length)}>❮</span>
              <img src={memories[memoryIndex].img} alt="Memory" className="memory-img-full" />
              <span className="arrow right" onClick={() => setMemoryIndex((prev) => (prev + 1) % memories.length)}>❯</span>
            </div>
            <div className="memory-right">
              <h2 style={{fontFamily:"emoji",color:"white", fontSize:"25px"}}><u>❤️A Sweet Moment ❤️</u></h2>
              <p className="memory-text-right" style={{fontSize:"20px"}}>{memories[memoryIndex].text}</p>
              <div className="memory-dots">
                {memories.map((_, i) => <span key={i} className={`dot ${i === memoryIndex ? "active" : ""}`} onClick={() => setMemoryIndex(i)} />)}
              </div>
            </div>
          </div>
        );

        return <>
          <h2>😊 One Gentle Smile</h2>
          <p>If you’re here, smile softly 💖 The world feels brighter with you 🌸</p>
        </>;
case "Favourite":
  return (
    <div className="fav-love-wrapper">
      <div className="fav-glow-bg" />

      <h2 className="fav-heading" style={{fontFamily:"cursive",color:"rgb(218 6 81)"}}><u>❤️ My Favourite Person ❤️</u></h2>

      <p className="fav-intro" style={{fontFamily:"auto",color:"#121362"}}>
        Some people don’t enter your life loudly…  
        they enter softly and stay forever 🤍
      </p>

      <div className="fav-cards">
        <div className="fav-card">💙 Your smile is made a beatiful day</div>
        <div className="fav-card">✨ You are looking  handsome</div>
        <div className="fav-card">🌸 I like your silence<br/>
        and your calmness</div>
        <div className="fav-card">🌙Talking to you makes everything feel better</div>
        <div className="fav-card">💫I like your dressing sense and talking</div>
        <div className="fav-card">💫 You are very special for me ,it's true</div>
        <div className="fav-card">🤝 This bond I never want to lose</div>
        <div className="fav-card">💫 My always & forever best friend</div>
      </div>

      <p className="fav-love-note" style={{color:"#943a06"}}>
        I don’t say it often,  
        but you mean more to me than words can explain 💖  
        <br />
        You are truly… my favourite.
      </p>

      <div className="fav-signature">
        — Yours, <span>Roshani</span> 🤍
      </div>

      <div className="fav-floating-hearts">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i}>💖</span>
        ))}
      </div>
    </div>
  );

      default:
        return null;
    }
  };

  return (
    <div className="dashboard-root">
      <div className="aurora-bg" />
      <div className="floating-3d">{Array.from({ length: 10 }).map((_, i) => (<span key={i} className="orb" />))}</div>

      <header className="header">
        <div className="logo">
          <span className="heart">💖</span>
          <span style={{color:"red"}}>My Hero</span>
          <span className="shine" />
        </div>

        <nav className="stylish-navbar" style={{color:" red",fontWeight:"bold",fontSize:"19px"}}>
          {[
            { key: "home", label: "Home" },
            { key: "Favourite", label: "Favourite" },
            { key: "memories", label: "Memories" },
            { key: "wishes", label: "Wishes" },
            { key: "secrets", label: "Secrets" },
          ].map(item => (
            <button key={item.key} className={`nav-btn ${activeTab === item.key ? "active" : ""}`} onClick={() => setActiveTab(item.key as TabKey)}>
              {item.label}<span className="glow-line" />
            </button>
          ))}
        </nav>
      </header>

      <main className="content">
        <div className="content-card">{renderContent()}</div>
      </main>

      <footer className="dream-footer">
        <div className="footer-glow" />
        <div className="footer-content">
          <p className="footer-text">Made <span className="pulse-heart">💖</span> for someone special</p>
          <p className="footer-sub">Sometimes Say Nothing,Only Feel✨</p>
          <div className="footer-sign">— Roshani</div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
