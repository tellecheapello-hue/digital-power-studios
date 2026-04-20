/* Testimonials + About */
function Testimonials() {
  const tests = [
    { i:'MG', n:'María G.', r:'Clínica dental', t:'En 3 semanas mi web empezó a aparecer en Google y recibí mis primeras consultas online. Algo que llevaba años intentando.' },
    { i:'JS', n:'Javier S.', r:'Fisioterapia', t:'Automatizaron la reserva de citas y dejé de perder horas al teléfono. Ahora todo entra solo al calendario.' },
    { i:'LM', n:'Lucía M.', r:'Estética y belleza', t:'La web nueva convierte el doble que la anterior y se nota la diferencia desde el primer mes.' },
    { i:'AG', n:'Andrés G.', r:'Restaurante familiar', t:'Por fin alguien que me explica las cosas claras, sin tecnicismos. Pasé de no entender nada a tener mi negocio online en marcha.' },
    { i:'SO', n:'Sara O.', r:'Reformas y obras', t:'Recibo presupuestos nuevos cada semana desde la web. Antes dependía solo del boca a boca.' },
    { i:'DN', n:'Diego N.', r:'Coach personal', t:'Trato cercano, rápido y profesional. Me hicieron sentir que mi proyecto les importaba de verdad.' },
  ];
  const [idx, setIdx] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(3);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(()=>{
    const calc = ()=>{
      const w = window.innerWidth;
      setPageSize(w < 700 ? 1 : (w < 1024 ? 2 : 3));
    };
    calc();
    window.addEventListener('resize', calc);
    return ()=>window.removeEventListener('resize', calc);
  },[]);
  const pages = Math.max(1, tests.length - pageSize + 1);

  React.useEffect(()=>{
    if (paused) return;
    const id = setInterval(()=> setIdx(i => (i+1) % pages), 4500);
    return ()=>clearInterval(id);
  },[paused, pages]);

  React.useEffect(()=>{ if (idx >= pages) setIdx(0); },[pages,idx]);

  const next = ()=> setIdx(i => (i+1) % pages);
  const prev = ()=> setIdx(i => (i - 1 + pages) % pages);
  const offset = `calc(${idx} * (-100% / ${pageSize}) + ${idx} * (-24px / ${pageSize}))`;

  return (
    <section className="section-pad section-dark" id="testimonios">
      <div className="dotted-bg"/>
      <div className="wrap" style={{position:'relative',zIndex:2}}>
        <Reveal>
          <div className="section-head">
            <span className="eyebrow"><span className="bar"/> Testimonios</span>
            <h2 className="section-title">Hablan por <span className="serif" style={{color:'#a89bff'}}>nosotros</span></h2>
            <p className="section-sub">Negocios reales que ya confían en Digital Power Studios para crecer.</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="testimonial-track-wrap" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)}>
            <div className="testimonial-track" style={{transform:`translateX(${offset})`}}>
              {tests.map((t,i)=>(
                <div className="testimonial" key={i}>
                  <span className="t-quote">"</span>
                  <p className="t-text">{t.t}</p>
                  <div className="t-meta">
                    <div className="t-avatar">{t.i}</div>
                    <div>
                      <div className="t-name">{t.n}</div>
                      <div className="t-role">{t.r}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="t-controls">
          <button className="t-btn" onClick={prev} aria-label="Anterior">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <div className="t-dots">
            {Array.from({length:pages}).map((_,i)=>(
              <span key={i} className={`t-dot${i===idx?' active':''}`} onClick={()=>setIdx(i)} style={{cursor:'pointer'}}/>
            ))}
          </div>
          <button className="t-btn" onClick={next} aria-label="Siguiente">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section-pad section-light">
      <div className="wrap">
        <div className="about-grid">
          <Reveal>
            <div className="about-text">
              <span className="eyebrow"><span className="bar"/> Quiénes somos</span>
              <h2 className="section-title" style={{textAlign:'left'}}>Un equipo joven del <span className="serif">País Vasco</span></h2>
              <p>Somos un equipo joven con sede en el País Vasco, apasionados por ayudar a negocios locales a crecer en el mundo digital. Sin humos, sin agencias enormes: trabajamos contigo de tú a tú.</p>
              <p className="muted">Combinamos diseño, automatización con IA y SEO para que tu negocio tenga una presencia online que de verdad te traiga clientes.</p>
              <div className="about-pin" style={{marginTop:'24px'}}>
                <span className="pin-ico"><Icon.Pin/></span>
                País Vasco, España
              </div>
              <div className="about-socials">
                <a href="#" aria-label="LinkedIn"><Icon.Linkedin/></a>
                <a href="#" aria-label="Instagram"><Icon.Instagram/></a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div className="about-visual">
              <div className="about-content">
                <div className="about-dp">DP</div>
                <div className="about-tagline">Equipo Digital Power Studios</div>
                <div className="about-services-list">Diseño · Automatización · SEO</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Testimonials, About });
