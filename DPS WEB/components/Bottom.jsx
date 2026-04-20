/* Pricing + FAQ + CTA + Footer */
function Pricing() {
  const plans = [
    {
      name: 'Esencial', price: '1.290€', unit:'/proyecto',
      tagline:'Para empezar a estar online de forma profesional.',
      features:['Una página web profesional y clara','Una tarea automatizada para ahorrarte tiempo','Preparada para aparecer en Google','1 mes de soporte cercano'],
      cta:'Empezar',
    },
    {
      name: 'Avanzado', price:'3.490€', unit:'/proyecto', featured:true, badge:'Más elegido',
      tagline:'Para crecer con sistema y previsibilidad.',
      features:['Web profesional + procesos automatizados','Estrategia para aparecer en Google','Conexión entre tus herramientas digitales','Panel sencillo para ver resultados','3 meses de soporte y mejoras'],
      cta:'Solicitar propuesta',
    },
    {
      name: 'Completo', price:'A medida', unit:'',
      tagline:'Para negocios que quieren delegarlo todo.',
      features:['Web a medida + todo automatizado sin que tengas que hacer nada','Posicionamiento en Google continuo','Equipo dedicado a tu negocio','Soporte y mejoras cada mes','Atención prioritaria'],
      cta:'Hablar con ventas',
    }
  ];
  const openModal = ()=> window.dispatchEvent(new CustomEvent('openContactModal'));
  return (
    <section className="section-pad section-light" id="paquetes">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow"><span className="bar"/> Paquetes</span>
            <h2 className="section-title">Inversión clara, <span className="serif">resultados claros</span></h2>
            <p className="section-sub">Tres paquetes para distintos momentos del negocio. Personalizamos cada propuesta tras una consulta gratuita.</p>
          </div>
        </Reveal>
        <div className="pricing-grid">
          {plans.map((p,i)=>(
            <Reveal delay={i+1} key={i}>
              <div className={`price-card${p.featured?' featured':''}`}>
                {p.badge && <span className="price-badge">{p.badge}</span>}
                <div className="price-name">{p.name}</div>
                <div className="price-amount">{p.price}{p.unit && <span className="unit">{p.unit}</span>}</div>
                <div className="price-tagline">{p.tagline}</div>
                <ul className="price-features">
                  {p.features.map((f,j)=>(<li key={j}><Icon.Check s={16}/>{f}</li>))}
                </ul>
                <button className={`btn ${p.featured?'btn-dark price-cta':'btn-outline price-cta'}`} onClick={openModal}>{p.cta} <Icon.Arrow s={14}/></button>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="price-note">Todos los precios son orientativos. La propuesta final se ajusta a tu caso tras una consulta gratuita.</p>
        </Reveal>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    ['¿Cuánto cuesta trabajar con Digital Power Studios?','Nuestros paquetes empiezan en 1.290€ para una web profesional con una automatización básica. La propuesta final siempre se ajusta a tu caso tras una consulta gratuita, donde analizamos qué necesita realmente tu negocio.'],
    ['¿Cuánto tarda en lanzarse un proyecto?','La mayoría de nuestras webs y automatizaciones se entregan en 72 horas tras la fase de descubrimiento. Proyectos más complejos pueden tardar 2-3 semanas.'],
    ['¿Trabajáis con cualquier sector?','Sí. Hemos trabajado con clínicas, restaurantes, fisioterapeutas, reformas, coaches y más. Si tu negocio necesita clientes online, podemos ayudarte.'],
    ['¿Qué incluye la consulta gratuita?','30 minutos donde analizamos tu situación actual, identificamos oportunidades concretas y te decimos exactamente qué necesitas. Sin compromiso ni venta agresiva.'],
    ['¿Hacéis mantenimiento después del lanzamiento?','Sí. Todos los paquetes incluyen un período de soporte. Después puedes contratar mantenimiento mensual o llamarnos solo cuando lo necesites.'],
    ['¿Cómo se integra la IA en mi negocio?','La integramos donde realmente aporta valor: respuestas automáticas, captación de leads, seguimiento de clientes, generación de contenido, etc. Siempre con sentido común.'],
    ['¿Necesito tener conocimientos técnicos?','No. Nos encargamos de toda la parte técnica y te dejamos paneles sencillos para que veas resultados sin tener que aprender herramientas nuevas.'],
    ['¿Qué pasa si no quedo satisfecho?','Trabajamos por fases con revisiones constantes. Si algo no encaja, lo ajustamos hasta que funcione. Sin permanencia significa libertad real.'],
  ];
  const [open, setOpen] = React.useState(0);
  const openModal = ()=> window.dispatchEvent(new CustomEvent('openContactModal'));
  return (
    <section className="section-pad section-light" id="faq">
      <div className="wrap">
        <div className="faq-layout">
          <Reveal>
            <div className="faq-side">
              <span className="eyebrow"><span className="bar"/> FAQ</span>
              <h2 className="section-title">Todo lo que necesitas <span className="serif">saber</span></h2>
              <p className="section-sub" style={{textAlign:'left',marginLeft:0}}>¿No encuentras la respuesta? Escríbenos directamente y te respondemos en menos de 24h.</p>
              <button className="btn btn-dark" style={{marginTop:'12px'}} onClick={openModal}>Hablar con el equipo <Icon.Arrow s={14}/></button>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div className="faq-list">
              {items.map(([q,a],i)=>(
                <div className={`faq-item${open===i?' open':''}`} key={i}>
                  <button className="faq-q" onClick={()=>setOpen(open===i?-1:i)}>
                    <span className="faq-num">0{i+1}</span>
                    <span className="faq-q-text">{q}</span>
                    <span className="faq-toggle"><Icon.Plus/></span>
                  </button>
                  <div className="faq-a"><div className="faq-a-inner">{a}</div></div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CTAFinal() {
  const openModal = ()=> window.dispatchEvent(new CustomEvent('openContactModal'));
  return (
    <section className="cta-final" id="cta">
      <div className="aurora">
        <div className="blob aurora-1"/>
        <div className="blob aurora-2"/>
        <div className="blob aurora-3"/>
      </div>
      <div className="wrap" style={{position:'relative',zIndex:2}}>
        <Reveal>
          <span className="cta-badge"><span className="dot"/> Plazas reducidas este mes</span>
        </Reveal>
        <Reveal delay={1}>
          <h2>¿Listo para <span className="serif grad">transformar</span><br/>tu negocio?</h2>
        </Reveal>
        <Reveal delay={2}>
          <p>La primera consulta es gratuita y sin compromiso. En 30 minutos te decimos exactamente qué necesita tu negocio para crecer online.</p>
        </Reveal>
        <Reveal delay={3}>
          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={openModal}><span>Contactarnos <Icon.Sparkle s={14}/></span></button>
            <a href="mailto:digitalpower2121@gmail.com" className="btn-cta-secondary">o escríbenos por email <Icon.Arrow s={14}/></a>
          </div>
        </Reveal>
        <Reveal delay={4}>
          <p className="cta-note">Sin compromiso · Respuesta en menos de 24h</p>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <a href="index.html" className="logo">
              <span className="logo-mark"/>
              <span style={{color:'#fff'}}><b>Digital Power</b> <span style={{opacity:.85,fontWeight:400}}>Studios</span></span>
            </a>
            <p className="footer-tag" style={{marginTop:'14px'}}>Transformación digital real para negocios que quieren crecer.</p>
          </div>
          <div className="footer-col">
            <h5>Servicios</h5>
            <a href="paginas-web.html">Webs</a>
            <a href="automatizaciones.html">Automatizaciones</a>
            <a href="seo.html">SEO</a>
          </div>
          <div className="footer-col">
            <h5>Empresa</h5>
            <a href="#proceso">Proceso</a>
            <a href="#beneficios">Beneficios</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="footer-col">
            <h5>Contacto</h5>
            <a href="mailto:digitalpower2121@gmail.com">digitalpower2121@gmail.com</a>
            <span>País Vasco, España</span>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Digital Power Studios. Todos los derechos reservados.</span>
          <div className="footer-bottom-links">
            <a href="#">Política de privacidad</a>
            <a href="#">Términos y condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Pricing, FAQ, CTAFinal, Footer });
