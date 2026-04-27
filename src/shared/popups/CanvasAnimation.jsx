import React, { useEffect, useRef } from "react";

const CanvasAnimation = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas.getContext("2d");

    let particlesArray = [];
    const numberOfParticles = 120;

    const mouse = {
      x: null,
      y: null,
      radius: 60,
    };

    const setCanvasSize = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };

    setCanvasSize();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("touchmove", (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.touches[0].clientX - rect.left;
      mouse.y = e.touches[0].clientY - rect.top;
    });

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          this.x += dx / 5;
          this.y += dy / 5;
        }
      }

      draw() {
        ctx.fillStyle = "#00e5ff";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    const connect = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let dx = particlesArray[a].x - particlesArray[b].x;
          let dy = particlesArray[a].y - particlesArray[b].y;
          let distance = dx * dx + dy * dy;

          if (distance < 8000) {
            let opacity = 1 - distance / 8000;

            ctx.strokeStyle = `rgba(0,229,255,${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesArray.forEach((p) => {
        p.update();
        p.draw();
      });

      connect();
      requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      setCanvasSize();
      init();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="canvas-wrapper" ref={containerRef}>
      <canvas ref={canvasRef} className="canvas-bg" />
    </div>
  );
};

export default CanvasAnimation;
