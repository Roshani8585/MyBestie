import React, { useEffect, useRef } from "react";

const FirecrackerCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const particles: any[] = [];
    const fireworks: any[] = [];
    let cw = (canvas.width = window.innerWidth);
    let ch = (canvas.height = window.innerHeight);

    const colors = ["#ff004d", "#ffbd39", "#00eaff", "#9d4edd", "#ff007f"];

    window.addEventListener("resize", () => {
      cw = canvas.width = window.innerWidth;
      ch = canvas.height = window.innerHeight;
    });

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      alpha: number;
      color: string;

      constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.vx = Math.random() * 6 - 3;
        this.vy = Math.random() * 6 - 3;
        this.alpha = 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 0.015;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3 + Math.random() * 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    class Firework {
      x: number;
      y: number;
      targetY: number;
      speed: number;
      color: string;

      constructor() {
        this.x = Math.random() * cw;
        this.y = ch;
        this.targetY = Math.random() * (ch / 2);
        this.speed = 5 + Math.random() * 3;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.y -= this.speed;
        if (this.y <= this.targetY) {
          this.explode();
          return true;
        }
        return false;
      }

      explode() {
        for (let i = 0; i < 60; i++) {
          particles.push(new Particle(this.x, this.y, this.color));
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function loop() {
      ctx.fillStyle = "rgba(0,0,0,0.2)";
      ctx.fillRect(0, 0, cw, ch);

      if (Math.random() < 0.04) {
        fireworks.push(new Firework());
      }

      fireworks.forEach((f, i) => {
        f.draw();
        if (f.update()) fireworks.splice(i, 1);
      });

      particles.forEach((p, i) => {
        p.draw();
        p.update();
        if (p.alpha <= 0) particles.splice(i, 1);
      });

      requestAnimationFrame(loop);
    }

    loop();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default FirecrackerCanvas;
