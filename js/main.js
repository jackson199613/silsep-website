// SILSEP — shared interactions
(function(){
  const nav=document.querySelector('.nav');
  const onScroll=()=>nav.classList.toggle('scrolled',scrollY>24);
  onScroll();addEventListener('scroll',onScroll,{passive:true});

  const tg=document.querySelector('.nav-toggle');
  if(tg)tg.addEventListener('click',()=>document.querySelector('.nav-links').classList.toggle('open'));

  // Reveal on scroll
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  // Stats counter
  const fmt=(n,d)=>d?n.toFixed(d):Math.round(n).toLocaleString('en-US');
  const so=new IntersectionObserver(es=>es.forEach(e=>{
    if(!e.isIntersecting)return;so.unobserve(e.target);
    const el=e.target,end=parseFloat(el.dataset.count),dec=+(el.dataset.dec||0),suf=el.dataset.suf||'';
    const t0=performance.now(),dur=1600;
    (function tick(t){const p=Math.min((t-t0)/dur,1),ease=1-Math.pow(1-p,3);
      el.textContent=fmt(end*ease,dec)+suf;if(p<1)requestAnimationFrame(tick)})(t0);
  }),{threshold:.5});
  document.querySelectorAll('[data-count]').forEach(el=>so.observe(el));

  // Hero carousel
  const slides=[...document.querySelectorAll('.slide')];
  if(slides.length){
    const dots=[...document.querySelectorAll('.hero-dots button')];
    let cur=0,timer;
    const go=i=>{slides[cur].classList.remove('active');dots[cur].classList.remove('active');
      cur=(i+slides.length)%slides.length;
      slides[cur].classList.add('active');dots[cur].classList.add('active');restart()};
    const restart=()=>{clearInterval(timer);timer=setInterval(()=>go(cur+1),8000)};
    dots.forEach((d,i)=>d.addEventListener('click',()=>go(i)));
    restart();

    // Floating particle overlay (subtle, reduced-motion aware)
    if(!matchMedia('(prefers-reduced-motion: reduce)').matches){
      const cv=document.getElementById('particles');
      if(cv){const ctx=cv.getContext('2d');let W,H,pts;
        const init=()=>{W=cv.width=cv.offsetWidth;H=cv.height=cv.offsetHeight;
          pts=Array.from({length:Math.min(46,W/28)},()=>({x:Math.random()*W,y:Math.random()*H,
            r:Math.random()*2.2+.6,vx:(Math.random()-.5)*.18,vy:-Math.random()*.22-.05,a:Math.random()*.4+.15}))};
        init();addEventListener('resize',init);
        (function draw(){ctx.clearRect(0,0,W,H);
          for(const p of pts){p.x+=p.vx;p.y+=p.vy;
            if(p.y<-6)p.y=H+6;if(p.x<-6)p.x=W+6;if(p.x>W+6)p.x=-6;
            ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,7);
            ctx.fillStyle=`rgba(180,235,228,${p.a})`;ctx.fill()}
          requestAnimationFrame(draw)})();
      }
    }
  }

  // Solutions tabs
  const tabs=[...document.querySelectorAll('.tabs button')];
  tabs.forEach(b=>b.addEventListener('click',()=>{
    tabs.forEach(x=>x.classList.remove('active'));b.classList.add('active');
    document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
    document.getElementById(b.dataset.tab).classList.add('active');
  }));
})();
