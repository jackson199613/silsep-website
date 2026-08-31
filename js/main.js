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
          pts=Array.from({length:Math.min(70,W/16)},()=>({x:Math.random()*W,y:Math.random()*H,
            r:Math.random()*2.6+.8,vx:(Math.random()-.5)*.25,vy:-Math.random()*.3-.06,a:Math.random()*.45+.2}))};
        init();addEventListener('resize',init);
        const LINK=110;
        (function draw(){ctx.clearRect(0,0,W,H);
          // connecting lines — molecular network effect
          for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){
            const a=pts[i],b=pts[j],dx=a.x-b.x,dy=a.y-b.y,d=dx*dx+dy*dy;
            if(d<LINK*LINK){ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);
              ctx.strokeStyle=`rgba(160,230,220,${.15*(1-d/(LINK*LINK))})`;ctx.lineWidth=1;ctx.stroke()}}
          for(const p of pts){p.x+=p.vx;p.y+=p.vy;
            if(p.y<-6)p.y=H+6;if(p.x<-6)p.x=W+6;if(p.x>W+6)p.x=-6;
            ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,7);
            ctx.shadowColor='rgba(140,235,222,.8)';ctx.shadowBlur=6;
            ctx.fillStyle=`rgba(200,245,238,${p.a})`;ctx.fill();ctx.shadowBlur=0}
          requestAnimationFrame(draw)})();
      }
    }
  }

  // Product showcase (Lingwe-style, scoped per container)
  document.querySelectorAll('.showcase').forEach(sc=>{
    const tabs=[...sc.querySelectorAll('.sc-tab')];
    if(!tabs.length)return;
    const imgs=[...sc.querySelectorAll('.stage-img')];
    const tt=sc.querySelector('.stage-title'),dd=sc.querySelector('.stage-desc'),lk=sc.querySelector('.stage-link');
    const sel=b=>{
      tabs.forEach(x=>x.classList.remove('active'));b.classList.add('active');
      imgs.forEach(im=>im.classList.toggle('active',im.dataset.i===b.dataset.i));
      tt.textContent=b.dataset.title;dd.textContent=b.dataset.desc;lk.href=b.dataset.href;
    };
    tabs.forEach(b=>{b.addEventListener('click',()=>sel(b));b.addEventListener('mouseenter',()=>sel(b))});
  });
  // Mode toggle
  const modeBtns=[...document.querySelectorAll('.mode-btn')];
  modeBtns.forEach(b=>b.addEventListener('click',()=>{
    modeBtns.forEach(x=>x.classList.remove('active'));b.classList.add('active');
    document.querySelectorAll('.showcase').forEach(sc=>sc.classList.toggle('hidden',sc.id!==b.dataset.mode));
  }));

  // Accordion
  document.querySelectorAll('.acc-head').forEach(b=>b.addEventListener('click',()=>{
    const it=b.parentElement,was=it.classList.contains('open');
    document.querySelectorAll('.acc-item').forEach(x=>{x.classList.remove('open');x.querySelector('.acc-head span').textContent='+'});
    if(!was){it.classList.add('open');b.querySelector('span').textContent='\u2212'}
  }));

  // Solutions tabs
  const tabs=[...document.querySelectorAll('.tabs button')];
  tabs.forEach(b=>b.addEventListener('click',()=>{
    tabs.forEach(x=>x.classList.remove('active'));b.classList.add('active');
    document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
    document.getElementById(b.dataset.tab).classList.add('active');
  }));
})();
