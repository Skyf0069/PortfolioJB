/* =====================================================================
   hearts.js — Eurovision 2025 heart animations (canvas)
   · Background field : regular grid of small twinkling red hearts
   · Floating hearts  : slow drifting hearts rising up
   · Hero mosaic      : big "heart of hearts" with a lub-dub heartbeat
   ===================================================================== */
(function(){
  "use strict";
  const RED = "#ff1126", RED_BRIGHT = "#ff2d44";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const INTENSITY = (typeof window.HEART_INTENSITY === "number") ? window.HEART_INTENSITY : 0.6;

  // ---- heart path centered at (cx,cy) with bounding size s ----
  function heartPath(ctx, cx, cy, s){
    const x = cx, y = cy - s*0.38, t = s*0.3;
    ctx.beginPath();
    ctx.moveTo(x, y + t);
    ctx.bezierCurveTo(x, y, x - s/2, y, x - s/2, y + t);
    ctx.bezierCurveTo(x - s/2, y + (s+t)/2, x, y + (s+t)/1.25, x, y + s);
    ctx.bezierCurveTo(x, y + (s+t)/1.25, x + s/2, y + (s+t)/2, x + s/2, y + t);
    ctx.bezierCurveTo(x + s/2, y, x, y, x, y + t);
    ctx.closePath();
  }
  // implicit heart membership, normalized coords (-1.3..1.3)
  function inHeart(nx, ny){
    const x = nx, y = -ny;
    const v = Math.pow(x*x + y*y - 1, 3) - x*x*y*y*y;
    return v <= 0;
  }
  // lub-dub heartbeat, p in [0,1)
  function beat(p){
    const a = Math.exp(-Math.pow((p-0.10)/0.055,2));
    const b = 0.55*Math.exp(-Math.pow((p-0.26)/0.07,2));
    return a + b;
  }

  function setup(canvas){
    const ctx = canvas.getContext("2d");
    let w=0,h=0,dpr=Math.min(window.devicePixelRatio||1,2);
    function resize(){
      const r = canvas.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = Math.max(1,Math.floor(w*dpr));
      canvas.height = Math.max(1,Math.floor(h*dpr));
      ctx.setTransform(dpr,0,0,dpr,0,0);
    }
    return {ctx,resize,get w(){return w;},get h(){return h;}};
  }

  /* ---------------- BACKGROUND FIELD ---------------- */
  function initField(){
    const canvas = document.getElementById("heart-field");
    if(!canvas) return;
    const S = setup(canvas);
    let floats = [];
    function seedFloats(){
      const n = reduce ? 0 : Math.round(10 + INTENSITY*22);
      floats = Array.from({length:n},()=>spawnFloat(true));
    }
    function spawnFloat(initial){
      return {
        x: Math.random()*S.w,
        y: initial ? Math.random()*S.h : S.h + 40,
        size: 9 + Math.random()*22,
        speed: 12 + Math.random()*26,
        drift: (Math.random()-0.5)*18,
        phase: Math.random()*Math.PI*2,
        alpha: 0.10 + Math.random()*0.30
      };
    }
    function onResize(){ S.resize(); seedFloats(); }
    window.addEventListener("resize", onResize);
    S.resize(); seedFloats();

    const gap = 58;            // grid spacing
    let last = performance.now();
    function frame(now){
      const dt = Math.min(0.05,(now-last)/1000); last = now;
      const t = now/1000;
      S.ctx.clearRect(0,0,S.w,S.h);

      // static twinkling grid
      const cols = Math.ceil(S.w/gap)+1, rows = Math.ceil(S.h/gap)+1;
      for(let i=0;i<cols;i++){
        for(let j=0;j<rows;j++){
          const x = i*gap + (j%2?gap/2:0);
          const y = j*gap;
          const tw = reduce ? 1 : (0.6 + 0.4*Math.sin(t*1.3 + i*0.7 + j*0.9));
          S.ctx.globalAlpha = 0.16 + 0.12*tw;
          S.ctx.fillStyle = RED;
          heartPath(S.ctx, x, y, 7 + tw*1.6);
          S.ctx.fill();
        }
      }
      // floating hearts
      if(!reduce){
        for(const f of floats){
          f.y -= f.speed*dt;
          f.x += Math.sin(t*0.6 + f.phase)*f.drift*dt;
          if(f.y < -50){ Object.assign(f, spawnFloat(false)); }
          S.ctx.globalAlpha = f.alpha;
          S.ctx.fillStyle = RED_BRIGHT;
          heartPath(S.ctx, f.x, f.y, f.size);
          S.ctx.fill();
        }
      }
      S.ctx.globalAlpha = 1;
      raf = requestAnimationFrame(frame);
    }
    let raf;
    frame(performance.now());
  }

  /* ---------------- HERO MOSAIC (heart of hearts) ---------------- */
  // Explicit heart bitmap (11 wide × 9 tall) — two lobes, centre notch, point.
  const HEART = [
    "01110001110",
    "11111111111",
    "11111111111",
    "11111111111",
    "01111111110",
    "00111111100",
    "00011111000",
    "00001110000",
    "00000100000"
  ];
  const HW = 11, HH = 9;
  function initMosaic(){
    const canvas = document.getElementById("heart-mosaic");
    if(!canvas) return;
    const S = setup(canvas);
    window.addEventListener("resize", S.resize);
    S.resize();

    const COLS = 13, ROWS = 13;      // grid resolution
    const offX = 1, offY = 2;        // centre the 11×9 heart in the 13×13 grid
    const period = 1.35;             // heartbeat seconds
    function frame(now){
     try{
      const t = now/1000;
      S.ctx.clearRect(0,0,S.w,S.h);
      const size = Math.min(S.w,S.h);
      const cell = size/COLS;
      const ox = (S.w-size)/2, oy = (S.h-size)/2;
      const cx = S.w/2, cy = S.h/2;
      const maxR = size*0.62;

      for(let i=0;i<COLS;i++){
        for(let j=0;j<ROWS;j++){
          const px = ox + (i+0.5)*cell;
          const py = oy + (j+0.5)*cell;
          const bi = i-offX, bj = j-offY;
          const inside = bj>=0 && bj<HH && bi>=0 && bi<HW && HEART[bj][bi]==="1";

          // ripple delay from centre for the heartbeat
          const dist = Math.hypot(px-cx,py-cy);
          const delay = (dist/maxR)*0.16;
          const p = reduce ? 0 : (((t/period) - delay) % 1 + 1) % 1;
          const b = reduce ? 0.4 : beat(p);

          if(inside){
            const s = cell*(0.9 + b*0.14);
            S.ctx.globalAlpha = 0.95;
            S.ctx.fillStyle = RED;
            heartPath(S.ctx, px, py, s);
            S.ctx.fill();
            if(b>0.5){
              S.ctx.globalAlpha = (b-0.5)*0.55;
              S.ctx.fillStyle = RED_BRIGHT;
              heartPath(S.ctx, px, py, s*1.04);
              S.ctx.fill();
            }
          } else {
            const tw = reduce ? 1 : (0.6+0.4*Math.sin(t*1.6 + i + j));
            S.ctx.globalAlpha = 0.16 + 0.12*tw;
            S.ctx.fillStyle = RED;
            heartPath(S.ctx, px, py, cell*0.2);
            S.ctx.fill();
          }
        }
      }
      S.ctx.globalAlpha = 1;
     }catch(e){ console.error("mosaic frame error", e); }
      requestAnimationFrame(frame);
    }
    frame(performance.now());
  }

  function init(){
    try{ initField(); }catch(e){ console.error("initField error", e); }
    try{ initMosaic(); }catch(e){ console.error("initMosaic error", e); }
  }
  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
