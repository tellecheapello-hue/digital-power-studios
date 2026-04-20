/* Nav + Hero + ValueProps */

function Nav({ dark }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(()=>{
    const onScroll = ()=> setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return ()=>window.removeEventListener('scroll', onScroll);
  },[]);
  const openModal = (e)=>{ e.preventDefault(); window.dispatchEvent(new CustomEvent('openContactModal')); };
  return (
    <nav className={`nav${scrolled?' scrolled':''}${dark?' dark':''}`}>
      <div className="nav-inner">
        <a href="index.html" className="logo">
          <span className="logo-mark"/>
          <span><b>Digital Power</b> <span className="muted">Studios</span></span>
        </a>
        <div className="nav-links">
          <div className="dropdown">
            <a href="#servicios">Servicios ▾</a>
            <div className="dropdown-menu">
              <a href="paginas-web.html">Páginas Web</a>
              <a href="automatizaciones.html">Automatizaciones</a>
              <a href="seo.html">SEO</a>
            </div>
          </div>
          <a href="#proceso">Proceso</a>
          <a href="#beneficios">Beneficios</a>
          <a href="#faq">FAQ</a>
        </div>
        <button className="nav-cta" onClick={openModal}>Contactarnos</button>
      </div>
    </nav>
  );
}

function Hero() {
  const spinnerRef = React.useRef(null);
  const canvasRef  = React.useRef(null);
  const sectionRef = React.useRef(null);

  /* --- Scroll opacity fade --- */
  React.useEffect(()=>{
    const update = ()=>{
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const h = sectionRef.current.offsetHeight;
      const scrolled = Math.max(0, -rect.top);
      const p = Math.min(1, scrolled / (h * 0.55));
      if (spinnerRef.current) spinnerRef.current.style.opacity = (0.10 * (1-p)).toFixed(3);
      if (canvasRef.current)  canvasRef.current.style.opacity  = (1-p).toFixed(3);
    };
    window.addEventListener('scroll', update, { passive:true });
    update();
    return ()=>window.removeEventListener('scroll', update);
  },[]);

  /* --- Canvas particle system --- */
  React.useEffect(()=>{
    const canvas  = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;
    const ctx = canvas.getContext('2d');
    let W, H, particles=[], trails=[], waves=[], animId;
    let mouse = { x:-9999, y:-9999 };

    const resize = ()=>{
      W = canvas.width  = section.offsetWidth;
      H = canvas.height = section.offsetHeight;
    };
    const makeParticles = ()=>{
      particles = Array.from({length:100}, ()=>({
        x: Math.random()*W, y: Math.random()*H,
        vx:(Math.random()-.5)*.6, vy:(Math.random()-.5)*.6,
        size: 2.5+Math.random()*1.5,
        color: Math.random()<.6 ? [44,65,201] : [59,130,246],
      }));
    };
    resize(); makeParticles();

    const onResize = ()=>{ resize(); makeParticles(); };
    window.addEventListener('resize', onResize);

    let prevMx=-9999, prevMy=-9999;
    const onMouseMove = e=>{
      const r = canvas.getBoundingClientRect();
      const nx = e.clientX-r.left, ny = e.clientY-r.top;
      const speed = Math.hypot(nx-mouse.x, ny-mouse.y);
      if (speed>15) {
        for (let i=0;i<8;i++) trails.push({
          x: nx+(Math.random()-.5)*20, y: ny+(Math.random()-.5)*20,
          alpha:.75, size:1.5+Math.random()*2, decay:.87+Math.random()*.04,
        });
      }
      mouse.x=nx; mouse.y=ny;
    };
    const onClick = e=>{
      const r = canvas.getBoundingClientRect();
      const cx=e.clientX-r.left, cy=e.clientY-r.top;
      waves.push({x:cx,y:cy,r:5,alpha:.4});
      particles.forEach(p=>{
        const dx=p.x-cx, dy=p.y-cy, d=Math.hypot(dx,dy);
        if (d<250&&d>0){ const f=(250-d)/250*8; p.vx+=(dx/d)*f; p.vy+=(dy/d)*f; }
      });
    };
    section.addEventListener('mousemove', onMouseMove);
    section.addEventListener('click', onClick);
    section.addEventListener('mouseleave', ()=>{ mouse.x=-9999; mouse.y=-9999; });

    const animate = ()=>{
      ctx.clearRect(0,0,W,H);

      /* Spotlight */
      if (mouse.x>0&&mouse.x<W) {
        const g=ctx.createRadialGradient(mouse.x,mouse.y,0,mouse.x,mouse.y,400);
        g.addColorStop(0,'rgba(168,85,247,0.06)'); g.addColorStop(1,'rgba(168,85,247,0)');
        ctx.fillStyle=g; ctx.fillRect(0,0,W,H);
      }

      /* Trails */
      for(let i=trails.length-1;i>=0;i--){
        const t=trails[i]; t.alpha*=t.decay;
        if(t.alpha<.02){ trails.splice(i,1); continue; }
        ctx.beginPath(); ctx.arc(t.x,t.y,t.size,0,Math.PI*2);
        ctx.fillStyle=`rgba(96,165,250,${t.alpha})`; ctx.fill();
      }

      /* Waves */
      for(let i=waves.length-1;i>=0;i--){
        const w=waves[i]; w.r+=7; w.alpha*=.93;
        if(w.alpha<.01){ waves.splice(i,1); continue; }
        ctx.beginPath(); ctx.arc(w.x,w.y,w.r,0,Math.PI*2);
        ctx.strokeStyle=`rgba(109,91,255,${w.alpha})`; ctx.lineWidth=1.5; ctx.stroke();
      }

      /* Update particles */
      particles.forEach(p=>{
        p.vx+=(Math.random()-.5)*.04; p.vy+=(Math.random()-.5)*.04;
        p.vx*=.97; p.vy*=.97;
        const dx=mouse.x-p.x, dy=mouse.y-p.y, d=Math.hypot(dx,dy);
        if(d<200&&d>0){ const f=(200-d)/200*.06; p.vx+=(dx/d)*f; p.vy+=(dy/d)*f; }
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<-10) p.x=W+10; else if(p.x>W+10) p.x=-10;
        if(p.y<-10) p.y=H+10; else if(p.y>H+10) p.y=-10;
      });

      /* Connection lines */
      for(let i=0;i<particles.length;i++){
        for(let j=i+1;j<particles.length;j++){
          const dx=particles[i].x-particles[j].x, dy=particles[i].y-particles[j].y;
          const d=Math.hypot(dx,dy);
          if(d<150){
            const mx=(particles[i].x+particles[j].x)/2-mouse.x;
            const my=(particles[i].y+particles[j].y)/2-mouse.y;
            const md=Math.hypot(mx,my);
            const a=(md<150?.25:.08)*(1-d/150);
            ctx.beginPath(); ctx.moveTo(particles[i].x,particles[i].y);
            ctx.lineTo(particles[j].x,particles[j].y);
            ctx.strokeStyle=`rgba(44,65,201,${a})`; ctx.lineWidth=1; ctx.stroke();
          }
        }
      }

      /* Draw particles */
      particles.forEach(p=>{
        const dx=mouse.x-p.x, dy=mouse.y-p.y, d=Math.hypot(dx,dy);
        const near=d<150;
        const r=near?Math.min(p.size+1.5,5):p.size;
        const a=near?.55:.25;
        const [cr,cg,cb]=p.color;
        ctx.beginPath(); ctx.arc(p.x,p.y,r,0,Math.PI*2);
        ctx.fillStyle=`rgba(${cr},${cg},${cb},${a})`; ctx.fill();
      });

      animId=requestAnimationFrame(animate);
    };
    animate();

    return ()=>{
      cancelAnimationFrame(animId);
      section.removeEventListener('mousemove',onMouseMove);
      section.removeEventListener('click',onClick);
      window.removeEventListener('resize',onResize);
    };
  },[]);

  const openModal = ()=> window.dispatchEvent(new CustomEvent('openContactModal'));

  return (
    <section className="hero" id="hero" ref={sectionRef}>
      <div className="hero-bg">
        <div className="grid-bg"/>
        <div className="glow-orb orb-1"/>
        <div className="glow-orb orb-2"/>
        <div className="glow-orb orb-3"/>
        <div className="hero-spinner-bg" ref={spinnerRef}>
          <svg className="spinner" viewBox="0 0 50 50">
            <circle className="path-bg"   cx="25" cy="25" r="20" fill="none" strokeWidth="5"/>
            <circle className="path-main" cx="25" cy="25" r="20" fill="none" strokeWidth="5"/>
          </svg>
        </div>
      </div>
      <canvas ref={canvasRef} className="hero-canvas"/>
      <div className="wrap" style={{position:'relative',zIndex:2,width:'100%'}}>
        <div className="hero-centered">
          <Reveal>
            <h1 className="hero-title">
              Convertimos negocios en<br/>
              <span className="serif grad">potencias digitales</span>
            </h1>
          </Reveal>
          <Reveal delay={1}>
            <p className="hero-sub">Ayudamos a negocios locales y pymes a conseguir más clientes online, automatizar sus procesos y tener una web que vende.</p>
          </Reveal>
          <Reveal delay={2}>
            <div className="hero-cta-row">
              <button className="btn btn-primary" onClick={openModal}><span>Pide tu consulta gratis <Icon.Arrow s={14}/></span></button>
              <a href="#servicios" className="btn btn-ghost">Ver qué hacemos</a>
            </div>
          </Reveal>
          <Reveal delay={3}>
            <div className="hero-trust">
              <span><span className="stars">★★★★★</span> 5.0 · clientes satisfechos</span>
              <span className="sep"/>
              <span>Respuesta en menos de 24h</span>
              <span className="sep"/>
              <span>Sin compromiso</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ValueProps() {
  const items = [
    { ico:<Icon.Clock/>, h:'Entrega en 72h', p:'Webs y automatizaciones listas en tiempo récord' },
    { ico:<Icon.Shield/>, h:'Sin permanencia', p:'Sin contratos largos ni letra pequeña' },
    { ico:<Icon.Chat/>, h:'Respuesta en 24h', p:'Atención directa, sin intermediarios' },
  ];
  return (
    <section className="section-light" style={{paddingTop:'140px',paddingBottom:'120px'}}>
      <div className="wrap">
        <div className="value-grid">
          {items.map((it,i)=>(
            <Reveal delay={i+1} key={i}>
              <div className="value-card">
                <div className="value-icon">{it.ico}</div>
                <h3>{it.h}</h3>
                <p>{it.p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero, ValueProps });
