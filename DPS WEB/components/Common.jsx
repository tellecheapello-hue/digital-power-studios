/* Shared icons + small components + ContactModal */
const Icon = {
  Diamond: ({s=16})=>(<svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M12 2 L22 12 L12 22 L2 12 Z" fill="currentColor"/></svg>),
  Arrow: ({s=14})=>(<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>),
  Check: ({s=16})=>(<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7"/></svg>),
  Star: ({s=14})=>(<svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>),
  Clock: ({s=22})=>(<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>),
  Shield: ({s=22})=>(<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v7c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5l-8-3z"/></svg>),
  Chat: ({s=22})=>(<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a8 8 0 0 1-12 7l-5 1 1-4a8 8 0 1 1 16-4z"/></svg>),
  Browser: ({s=24})=>(<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 7h.01M10 7h.01"/></svg>),
  Bolt: ({s=24})=>(<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/></svg>),
  Search: ({s=24})=>(<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>),
  Analyze: ({s=22})=>(<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 14l3-3 4 4 6-7"/></svg>),
  Build: ({s=22})=>(<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2 8 8l-6 .5L7 13l-1 6 6-3 6 3-1-6 5-4.5L16 8z" fill="none"/><path d="M3 21l4-4M21 3l-4 4"/></svg>),
  Scale: ({s=22})=>(<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>),
  Time: ({s=20})=>(<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>),
  Money: ({s=20})=>(<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 6c-1.5-1.5-3.5-2-5-2-3 0-5 2-5 4s2 3 5 4 5 1 5 4-2 4-5 4c-1.5 0-3.5-.5-5-2"/></svg>),
  Cog: ({s=20})=>(<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>),
  Smile: ({s=20})=>(<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>),
  Layers: ({s=20})=>(<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m12 2 10 5-10 5L2 7l10-5z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/></svg>),
  Lock: ({s=20})=>(<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>),
  Pin: ({s=14})=>(<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>),
  Linkedin: ({s=18})=>(<svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v15H.22V8zm7.93 0h4.37v2.05h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.48 3.04 5.48 7v8.33h-4.56v-7.4c0-1.77-.03-4.04-2.46-4.04-2.46 0-2.84 1.92-2.84 3.91V23H8.15V8z"/></svg>),
  Instagram: ({s=18})=>(<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>),
  Plus: ({s=14})=>(<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>),
  Mail: ({s=14})=>(<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>),
  Sparkle: ({s=14})=>(<svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.5 6L20 9.5 13.5 11 12 17l-1.5-6L4 9.5 10.5 8z"/></svg>),
  X: ({s=16})=>(<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>),
  SpinLoader: ({s=16})=>(<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="spin-ico"><circle cx="12" cy="12" r="10" strokeOpacity=".25"/><path d="M12 2a10 10 0 0 1 10 10"/></svg>),
  ChevDown: ({s=14})=>(<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 9l6 6 6-6"/></svg>),
};

function useReveal() {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(()=>{
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) { setSeen(true); return; }
    let done = false;
    const io = new IntersectionObserver((es)=>{
      es.forEach(e=>{ if(e.isIntersecting && !done){ done=true; setSeen(true); io.disconnect(); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    io.observe(ref.current);
    const t = setTimeout(()=>{ if(!done){ done=true; setSeen(true); io.disconnect(); } }, 800);
    return ()=>{ io.disconnect(); clearTimeout(t); };
  },[]);
  return [ref, seen];
}

function Reveal({ children, delay=0, className="", as="div" }) {
  const [ref, seen] = useReveal();
  const Tag = as;
  const dCls = delay ? ` d${delay}` : "";
  return <Tag ref={ref} className={`reveal${seen?' in':''}${dCls} ${className}`}>{children}</Tag>;
}

function Counter({ to, suffix="", duration=1400, prefix="" }) {
  const ref = React.useRef(null);
  const [val, setVal] = React.useState(0);
  React.useEffect(()=>{
    if (!ref.current) return;
    let started = false;
    const start = ()=>{
      if (started) return; started = true;
      const t0 = performance.now();
      const tick = (t)=>{
        const p = Math.min(1, (t-t0)/duration);
        const eased = 1 - Math.pow(1-p, 3);
        setVal(Math.round(to * eased));
        if (p<1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const r = ref.current.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) { start(); return; }
    const io = new IntersectionObserver((es)=>{
      es.forEach(e=>{ if (e.isIntersecting) { start(); io.disconnect(); } });
    },{threshold:0.3});
    io.observe(ref.current);
    const tm = setTimeout(()=>{ start(); io.disconnect(); }, 800);
    return ()=>{ io.disconnect(); clearTimeout(tm); };
  },[to,duration]);
  return <span ref={ref}>{prefix}{val.toLocaleString('es-ES')}{suffix}</span>;
}

/* ===== CONTACT MODAL ===== */
function ContactModal({ open, onClose }) {
  const EMPTY = { nombre:'', empresa:'', telefono:'', email:'', servicio:'', mensaje:'' };
  const [form, setForm] = React.useState(EMPTY);
  const [errors, setErrors] = React.useState({});
  const [status, setStatus] = React.useState('idle');

  React.useEffect(()=>{
    document.body.style.overflow = open ? 'hidden' : '';
    return ()=>{ document.body.style.overflow = ''; };
  },[open]);

  React.useEffect(()=>{
    if (!open) { const t = setTimeout(()=>{ setStatus('idle'); setErrors({}); setForm(EMPTY); },350); return ()=>clearTimeout(t); }
  },[open]);

  const set = (k,v)=>{ setForm(f=>({...f,[k]:v})); if(errors[k]) setErrors(e=>({...e,[k]:null})); };

  const validate = ()=>{
    const e={};
    if (!form.nombre.trim()) e.nombre='Campo obligatorio';
    if (!form.empresa.trim()) e.empresa='Campo obligatorio';
    if (!form.telefono.trim() || form.telefono.replace(/\D/g,'').length<9) e.telefono='Mínimo 9 dígitos';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email='Email válido requerido';
    if (!form.servicio) e.servicio='Selecciona un servicio';
    return e;
  };

  const submit = (e)=>{
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length){ setErrors(errs); return; }
    setStatus('sending');
    setTimeout(()=>{
      try {
        const now = new Date().toLocaleString('es-ES');
        const subject = `Nuevo contacto desde la web — ${form.nombre}`;
        const body = [
          'Nuevo cliente potencial contactó desde la web:','',
          `Nombre: ${form.nombre}`,`Empresa: ${form.empresa}`,
          `Teléfono: ${form.telefono}`,`Email: ${form.email}`,
          `Servicio de interés: ${form.servicio}`,
          `Mensaje: ${form.mensaje||'No especificado'}`,'',
          `Fecha: ${now}`,
        ].join('\n');
        const a = document.createElement('a');
        a.href = `mailto:digitalpower2121@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        setStatus('success');
        setTimeout(()=>{ onClose(); },3000);
      } catch(err){ setStatus('error'); }
    },1000);
  };

  const Field = ({id,label,error,children})=>(
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      {children}
      {error && <span className="field-error">{error}</span>}
    </div>
  );

  if (!open && status !== 'sending') return (
    <div className="modal-overlay" style={{display:'none'}}/>
  );

  return (
    <div className={`modal-overlay${open?' open':''}`} onClick={e=>{ if(e.target===e.currentTarget) onClose(); }}>
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Cerrar"><Icon.X s={15}/></button>

        {status==='success' ? (
          <div className="form-success">
            <div className="success-ico">✅</div>
            <h3>¡Solicitud enviada!</h3>
            <p>Te contactaremos en menos de 24h para agendar tu consulta gratuita.</p>
          </div>
        ) : (
          <>
            <div className="modal-title">Cuéntanos sobre tu proyecto</div>
            <div className="modal-sub">Te contactaremos en menos de 24h para agendar tu consulta gratuita.</div>
            <form onSubmit={submit} noValidate>
              <div className="form-row-2">
                <Field id="nombre" label="Nombre y apellidos" error={errors.nombre}>
                  <input id="nombre" type="text" placeholder="Ej. María González" value={form.nombre} onChange={e=>set('nombre',e.target.value)}/>
                </Field>
                <Field id="empresa" label="Empresa" error={errors.empresa}>
                  <input id="empresa" type="text" placeholder="Ej. Clínica Dental Bihotz" value={form.empresa} onChange={e=>set('empresa',e.target.value)}/>
                </Field>
              </div>
              <div className="form-row-2">
                <Field id="telefono" label="Teléfono" error={errors.telefono}>
                  <input id="telefono" type="tel" placeholder="Ej. +34 600 000 000" value={form.telefono} onChange={e=>set('telefono',e.target.value)}/>
                </Field>
                <Field id="email" label="Correo electrónico" error={errors.email}>
                  <input id="email" type="email" placeholder="tu@email.com" value={form.email} onChange={e=>set('email',e.target.value)}/>
                </Field>
              </div>
              <Field id="servicio" label="Servicio de interés" error={errors.servicio}>
                <select id="servicio" value={form.servicio} onChange={e=>set('servicio',e.target.value)}>
                  <option value="">Selecciona un servicio...</option>
                  <option>Páginas Web</option>
                  <option>Automatizaciones</option>
                  <option>SEO</option>
                  <option>No estoy seguro</option>
                </select>
              </Field>
              <Field id="mensaje" label="Mensaje (opcional)" error={errors.mensaje}>
                <textarea id="mensaje" placeholder="Cuéntanos brevemente qué necesitas..." value={form.mensaje} onChange={e=>set('mensaje',e.target.value)}/>
              </Field>
              <button type="submit" className="btn-submit" disabled={status==='sending'}>
                {status==='sending' ? <><Icon.SpinLoader s={16}/>Enviando...</> : 'Enviar solicitud →'}
              </button>
              {status==='error' && (
                <div className="form-error-banner">
                  Hubo un problema. Escríbenos directamente a{' '}
                  <a href="mailto:digitalpower2121@gmail.com" style={{fontWeight:600,color:'#DC2626'}}>digitalpower2121@gmail.com</a>
                </div>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { Icon, useReveal, Reveal, Counter, ContactModal });
