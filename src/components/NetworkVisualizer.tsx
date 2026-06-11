import { useEffect, useRef, useState } from 'react';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

export default function NetworkVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 500 });
  const [activeNodes, setActiveNodes] = useState(45);
  const [hoverStrength, setHoverStrength] = useState(1);

  // Resize handler
  useEffect(() => {
    if (!containerRef.current) return;
    const updateSize = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        setDimensions({
          width: rect.width || 800,
          height: rect.height || 500
        });
      }
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Generate network nodes
    const nodesCount = Math.min(activeNodes, Math.floor((dimensions.width * dimensions.height) / 10000) + 15);
    const points: Point[] = [];
    const colors = [
      'rgba(6, 182, 212, 0.45)', // Cyan
      'rgba(14, 116, 144, 0.35)', // Teal/Blue
      'rgba(139, 92, 246, 0.4)',  // Purple (Security theme)
      'rgba(59, 130, 246, 0.4)'   // Enterprise Blue
    ];

    for (let i = 0; i < nodesCount; i++) {
      points.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2.5 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    let mouse = { x: -1000, y: -1000, radius: 150 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Draw active connection grids
      ctx.strokeStyle = 'rgba(14, 116, 144, 0.05)';
      ctx.lineWidth = 0.5;

      // Update and draw nodes
      points.forEach((p, idx) => {
        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce boundaries
        if (p.x < 0 || p.x > dimensions.width) p.vx *= -1;
        if (p.y < 0 || p.y > dimensions.height) p.vy *= -1;

        // Mouse attraction
        if (mouse.x > 0) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            p.x += (dx / dist) * force * 0.6 * hoverStrength;
            p.y += (dy / dist) * force * 0.6 * hoverStrength;
          }
        }

        // Draw node pulse halo on active security node
        if (idx % 8 === 0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = p.color.replace('0.45', '0.05').replace('0.4', '0.05');
          ctx.fill();
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Connection range
          const maxDist = 120;
          if (dist < maxDist) {
            // Check if mouse is near connection to highlight
            let isHighlighted = false;
            if (mouse.x > 0) {
              const mdx1 = mouse.x - points[i].x;
              const mdy1 = mouse.y - points[i].y;
              const mdist1 = Math.sqrt(mdx1 * mdx1 + mdy1 * mdy1);

              const mdx2 = mouse.x - points[j].x;
              const mdy2 = mouse.y - points[j].y;
              const mdist2 = Math.sqrt(mdx2 * mdx2 + mdy2 * mdy2);

              if (mdist1 < 100 || mdist2 < 100) {
                isHighlighted = true;
              }
            }

            const alpha = (1 - dist / maxDist) * (isHighlighted ? 0.35 : 0.15);
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.strokeStyle = isHighlighted 
              ? `rgba(6, 182, 212, ${alpha * 1.5})` 
              : `rgba(148, 163, 184, ${alpha})`;
            ctx.lineWidth = isHighlighted ? 1.2 : 0.6;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [dimensions, activeNodes, hoverStrength]);

  return (
    <div id="network-visualizer-container" ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-auto bg-transparent overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full opacity-60 dark:opacity-85" />
      
      {/* Network control overlay - very modern cyber touch */}
      <div className="absolute bottom-4 left-4 z-20 hidden md:flex items-center gap-4 bg-slate-900/80 dark:bg-slate-950/90 backdrop-blur border border-slate-700/50 p-2 rounded-lg text-[10px] font-mono text-cyan-400">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
        <span>INTELLIGENT FIBER GRID</span>
        <div className="h-3 w-px bg-slate-700"></div>
        <div className="flex items-center gap-1">
          <span className="text-slate-400">NODES:</span>
          <button 
            type="button"
            className={`px-1 rounded ${activeNodes === 25 ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
            onClick={() => setActiveNodes(25)}
          >
            LOW
          </button>
          <button 
            type="button"
            className={`px-1 rounded ${activeNodes === 45 ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
            onClick={() => setActiveNodes(45)}
          >
            MID
          </button>
          <button 
            type="button"
            className={`px-1 rounded ${activeNodes === 75 ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
            onClick={() => setActiveNodes(75)}
          >
            HIGH
          </button>
        </div>
        <div className="h-3 w-px bg-slate-700"></div>
        <div className="flex items-center gap-1">
          <span className="text-slate-400">FORCE:</span>
          <button 
            type="button"
            className={`px-1.5 rounded transition ${hoverStrength === 0.5 ? 'bg-violet-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
            onClick={() => setHoverStrength(0.5)}
          >
            x0.5
          </button>
          <button 
            type="button"
            className={`px-1.5 rounded transition ${hoverStrength === 1 ? 'bg-violet-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
            onClick={() => setHoverStrength(1)}
          >
            x1.0
          </button>
          <button 
            type="button"
            className={`px-1.5 rounded transition ${hoverStrength === 2 ? 'bg-violet-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
            onClick={() => setHoverStrength(2)}
          >
            x2.0
          </button>
        </div>
      </div>
    </div>
  );
}
