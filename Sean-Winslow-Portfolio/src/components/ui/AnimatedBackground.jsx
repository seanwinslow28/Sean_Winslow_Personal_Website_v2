import React, { useRef, useEffect } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let mouseX = 0.5;
    let mouseY = 0.5;
    let time = 0;

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking
    const handleMouseMove = (e) => {
      mouseX = e.clientX / window.innerWidth;
      mouseY = e.clientY / window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Simplified color palette - darker base colors
    const colors = [
      '#002651',      // Deep blue
      '#00478C',      // Medium blue  
      '#006DD3',      // Light blue
      '#459AFF',      // Bright blue
      '#9CC7FF',      // Very light blue
      '#E8F2FF'       // Almost white blue
    ];

    // Particles for flow field effect
    const particles = [];
    const numParticles = 150;

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: 0,
        vy: 0,
        life: Math.random(),
        size: Math.random() * 3 + 1
      });
    }

    // Noise function for flow field
    const noise = (x, y, t) => {
      return Math.sin(x * 0.01 + t) * Math.cos(y * 0.01 + t * 0.5) * 0.5;
    };

    const animate = () => {
      time += 0.01;
      
      // Clear with solid dark background first
      ctx.fillStyle = '#1a1a2e';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Create animated gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      
      // Create animated gradient that shifts based on time and mouse
      const offset = Math.sin(time * 0.5) * 0.05; // Reduced offset
      const mouseInfluence = (mouseX - 0.5) * 0.05; // Reduced influence
      
      // Ensure color stops stay within 0-1 range
      gradient.addColorStop(Math.max(0, Math.min(1, 0 + offset + mouseInfluence)), colors[0]);
      gradient.addColorStop(Math.max(0, Math.min(1, 0.2 + offset)), colors[1]);
      gradient.addColorStop(Math.max(0, Math.min(1, 0.4 + offset)), colors[2]);
      gradient.addColorStop(Math.max(0, Math.min(1, 0.6 + offset)), colors[3]);
      gradient.addColorStop(Math.max(0, Math.min(1, 0.8 + offset)), colors[4]);
      gradient.addColorStop(Math.max(0, Math.min(1, 1 + offset)), colors[5]);

      // Apply gradient with some transparency
      ctx.globalAlpha = 0.8;
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1;

      // Add flowing orange/yellow blobs (like in your shader)
      const blob1X = canvas.width * (0.3 + Math.sin(time * 0.3) * 0.2 + (mouseX - 0.5) * 0.1);
      const blob1Y = canvas.height * (0.7 + Math.cos(time * 0.2) * 0.1 + (mouseY - 0.5) * 0.05);
      
      const blob2X = canvas.width * (0.7 + Math.cos(time * 0.4) * 0.2 + (mouseX - 0.5) * 0.15);
      const blob2Y = canvas.height * (0.3 + Math.sin(time * 0.3) * 0.15 + (mouseY - 0.5) * 0.1);

      // Draw blurred blobs
      const drawBlob = (x, y, radius, color, opacity) => {
        const blobGradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        blobGradient.addColorStop(0, `rgba(234, 155, 1, ${opacity})`);
        blobGradient.addColorStop(0.5, `rgba(234, 155, 1, ${opacity * 0.6})`);
        blobGradient.addColorStop(1, 'rgba(234, 155, 1, 0)');
        
        ctx.globalCompositeOperation = 'screen';
        ctx.fillStyle = blobGradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      };

      drawBlob(blob1X, blob1Y, 300, '', 0.3);
      drawBlob(blob2X, blob2Y, 250, '', 0.2);

      ctx.globalCompositeOperation = 'source-over';

      // Update and draw flow field particles
      particles.forEach(particle => {
        // Calculate flow field force
        const noiseX = noise(particle.x, particle.y, time);
        const noiseY = noise(particle.x + 100, particle.y + 100, time);
        
        // Mouse influence
        const dx = mouseX * canvas.width - particle.x;
        const dy = mouseY * canvas.height - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const mouseForce = Math.max(0, 100 - distance) * 0.0001;
        
        // Update velocity
        particle.vx += noiseX * 0.1 + dx * mouseForce;
        particle.vy += noiseY * 0.1 + dy * mouseForce;
        
        // Apply friction
        particle.vx *= 0.98;
        particle.vy *= 0.98;
        
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Update life
        particle.life += 0.01;
        if (particle.life > 1) particle.life = 0;
        
        // Draw particle
        const alpha = Math.sin(particle.life * Math.PI) * 0.3;
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Simple grain effect
      if (Math.random() < 0.02) {
        ctx.globalAlpha = 0.03;
        for (let i = 0; i < 20; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          ctx.fillStyle = Math.random() > 0.5 ? 'white' : 'black';
          ctx.fillRect(x, y, 1, 1);
        }
        ctx.globalAlpha = 1;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Fallback solid background */}
      <div 
        className="fixed inset-0 -z-20"
        style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f2027 100%)'
        }}
      />
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10"
        style={{
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}
      />
    </>
  );
};

export default AnimatedBackground; 