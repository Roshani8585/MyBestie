import React, { useEffect, useRef } from "react";

const Snowfall3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });

    // ❄ Snowflake object
    class Snowflake {
      x: number;
      y: number;
      size: number;
      speed: number;
      drift: number;
      glow: number;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * w;
        this.y = Math.random() * h - h;
        this.size = Math.random() * 4 + 1;
        this.speed = Math.random() * 1.5 + 0.5;
        this.drift = Math.random() * 1 - 0.5;
        this.glow = Math.random() * 20 + 10;
      }

      update() {
        this.y += this.speed;
        this.x += this.drift * 0.5;

        if (this.y > h) this.reset();
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        // Glow shine
        ctx.shadowBlur = this.glow;
        ctx.shadowColor = "white";

        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx.fill();
        ctx.closePath();

        ctx.shadowBlur = 0;
      }
    }

    const snowflakes: Snowflake[] = [];
    for (let i = 0; i < 200; i++) snowflakes.push(new Snowflake());

    function animate() {
      ctx.clearRect(0, 0, w, h);

      snowflakes.forEach((flake) => {
        flake.update();
        flake.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
};

export default Snowfall3D;
