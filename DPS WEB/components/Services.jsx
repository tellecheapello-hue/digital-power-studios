/* Services + Process + Benefits */
function Services() {
  const services = [
    {
      ico: <Icon.Browser/>,
      h: 'Páginas Web', popular:true,
      d: 'Webs hechas a medida para convertir visitas en clientes reales y reflejar la esencia de tu marca.',
      bullets: ['Diseño a medida','Optimización de conversión','Diseño que refleja tu marca','Lista para recibir clientes desde el primer día'],
      href: 'paginas-web.html',
    },
    {
      ico: <Icon.Bolt/>,
      h: 'Automatizaciones',
      d: 'Sistemas que trabajan por ti: tu negocio funcionando incluso cuando tú no estás delante.',
      bullets: ['Deja de perder tiempo en tareas repetitivas','Tu negocio trabajando solo mientras tú descansas','Captación y seguimiento de clientes en automático','Atención más rápida y sin errores'],
      href: 'automatizaciones.html',
    },
    {
      ico: <Icon.Search/>,
      h: 'SEO',
      d: 'Aparece en Google cuando tus clientes te están buscando y atrae visitas sin pagar publicidad.',
      bullets: ['Aparece cuando tus clientes te buscan en Google','Más visitas sin pagar publicidad','Confianza y autoridad para tu marca','Resultados sostenibles a largo plazo'],
      href: 'seo.html',
    }
  ];
  const onMove = (e)=>{
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };
  return (
    <section className="section-pad section-light" id="servicios">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow"><span className="bar"/> Servicios</span>
            <h2 className="section-title">Tres pilares para tu <span className="serif">dominio digital</span></h2>
            <p className="section-sub">Cada servicio está diseñado para generar resultados medibles y transformar tu negocio desde la raíz.</p>
          </div>
        </Reveal>
        <div className="services-grid">
          {services.map((s,i)=>(
            <Reveal delay={i+1} key={i}>
              <div className={`service-card${s.popular?' featured':''}`} onMouseMove={onMove}>
                {s.popular && <span className="service-badge">Más popular</span>}
                <div className="service-icon">{s.ico}</div>
                <h3>{s.h}</h3>
                <p className="desc">{s.d}</p>
                <ul className="service-bullets">
                  {s.bullets.map((b,j)=>(
                    <li key={j}><Icon.Check s={16}/>{b}</li>
                  ))}
                </ul>
                <a href={s.href} className="service-link">Saber más <Icon.Arrow s={14}/></a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const lineRef = React.useRef(null);
  const [lineIn, setLineIn] = React.useState(false);
  React.useEffect(()=>{
    if (!lineRef.current) return;
    const io = new IntersectionObserver((es)=>{
      es.forEach(e=>{ if(e.isIntersecting){ setLineIn(true); io.disconnect(); }});
    },{threshold:0.3});
    io.observe(lineRef.current);
    return ()=>io.disconnect();
  },[]);
  const steps = [
    { n:'01', ico:<Icon.Analyze/>, h:'Analizamos tu negocio', p:'Estudiamos a fondo tus procesos, puntos de dolor y oportunidades para crear una estrategia digital personalizada.' },
    { n:'02', ico:<Icon.Build/>, h:'Construimos tu sistema', p:'Diseñamos e implementamos las herramientas, automatizaciones y sistemas que tu negocio necesita para funcionar al máximo.' },
    { n:'03', ico:<Icon.Scale/>, h:'Escalamos y optimizamos', p:'Monitoreamos, ajustamos y escalamos tus sistemas para garantizar un crecimiento continuo y sostenible.' },
  ];
  return (
    <section className="section-pad section-mid" id="proceso">
      <div className="wrap" style={{position:'relative',zIndex:2}}>
        <Reveal>
          <div className="section-head">
            <span className="eyebrow"><span className="bar"/> Cómo trabajamos</span>
            <h2 className="section-title">Un proceso probado en <span className="serif">3 pasos</span></h2>
          </div>
        </Reveal>
        <div className="process-grid" ref={lineRef}>
          <div className={`process-line${lineIn?' in':''}`} aria-hidden="true">
            <svg viewBox="0 0 1000 60" preserveAspectRatio="none">
              <defs>
                <linearGradient id="processGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#2C41C9"/>
                  <stop offset="100%" stopColor="#3B82F6"/>
                </linearGradient>
              </defs>
              <path d="M 30 30 C 250 -10, 500 70, 750 20 S 970 30, 970 30"/>
            </svg>
          </div>
          {steps.map((s,i)=>(
            <Reveal delay={i+1} key={i}>
              <div className="process-step">
                <span className="process-num">{s.n}</span>
                <div className="process-circle">{s.ico}</div>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    { ico:<Icon.Time/>, h:'Ahorra tiempo', p:'Automatiza tareas repetitivas y dedica tu tiempo a lo que realmente importa.' },
    { ico:<Icon.Money/>, h:'Aumenta ingresos', p:'Más clientes, más conversión y más ventas con menos esfuerzo manual.' },
    { ico:<Icon.Cog/>, h:'Reduce trabajo manual', p:'Procesos que se ejecutan solos mientras tú te dedicas a hacer crecer el negocio.' },
    { ico:<Icon.Smile/>, h:'Mejor experiencia', p:'Una atención más rápida, profesional y sin errores que tus clientes notan.' },
    { ico:<Icon.Layers/>, h:'Escalable', p:'Sistemas preparados para crecer contigo sin que tengas que rehacerlo todo.' },
    { ico:<Icon.Lock/>, h:'Seguro y confiable', p:'Infraestructura robusta y datos protegidos para que duermas tranquilo.' },
  ];
  return (
    <section className="section-pad section-light" id="beneficios">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow"><span className="bar"/> Beneficios</span>
            <h2 className="section-title">Resultados que <span className="serif">transforman</span></h2>
            <p className="section-sub">Lo que obtienes al trabajar con nosotros — sin promesas vacías.</p>
          </div>
        </Reveal>
        <div className="benefits-grid">
          {items.map((b,i)=>(
            <Reveal delay={Math.min(6,i+1)} key={i}>
              <div className="benefit">
                <div className="benefit-icon">{b.ico}</div>
                <h3>{b.h}</h3>
                <p>{b.p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Services, Process, Benefits });
