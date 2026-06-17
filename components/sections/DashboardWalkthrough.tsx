'use client'

/**
 * DashboardWalkthrough — 3-step "how it works" animation (v2, enriched).
 *
 * Honest managed-service narrative, looped while in view:
 *  1) Zaregistrujete se                         (cursor clicks)
 *  2) Propojíte e-shop a řeknete, co inzerovat  (cursor clicks, then EXITS)
 *  3) Custela spouští a nepřetržitě ladí        (no cursor — self-resolves):
 *        a) "Zakládáme reklamní účty" provisioning checklist (real onboarding StepSnippet)
 *        b) the live Analytika dashboard (real demo data) with billing strip + DOPORUČENÍ
 *  B-variant (alternate loops): a before→after product-image fix cutaway (placeholder art).
 *
 * Data + copy mirror the real app (src/components/onboarding/StepSnippet.tsx and
 * src/components/analytics/AnalyticsDenseLive.tsx). Czech, vykání. No "AI"/"GDPR"/"3rd-party".
 * Engine: framer-motion only. DOM/SVG — retina-crisp, copy editable in this file.
 */

import { useEffect, useRef, useState } from 'react'
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  useReducedMotion,
} from 'framer-motion'
import { MousePointer2 } from 'lucide-react'

/* ------------------------------- tokens ----------------------------------- */
const LIME = '#84cc16'
const LIME_DK = '#65a30d'
const INK = '#0A0A0A'
const GREEN = '#22C55E'
const GREEN_DK = '#16A34A'
const ORANGE = '#F59E0B'
const INDIGO = '#6366F1'
const GOOGLE = '#4285F4'
const META = '#1877F2'
const EASE = [0.16, 1, 0.3, 1] as const
const EASE_CURSOR = [0.2, 0.8, 0.2, 1] as const

type Lang = 'cs' | 'en'

const nf = new Intl.NumberFormat('cs-CZ')
const fmtNum = (n: number) => nf.format(Math.round(n))
const czk = (n: number) => nf.format(Math.round(n)) + ' Kč'

/* ------------------------------- real data -------------------------------- */
const TRZBY = 2700234
const PREV = 2289798
const FEE = Math.round(TRZBY * 0.04) // honest: 4 % of revenue

const KPIS = (lang: Lang) => [
  { l: lang === 'en' ? 'Spend' : 'Útrata', v: '991 234 Kč', c: ORANGE, d: '↓ 4,2 %', dc: GREEN_DK },
  { l: 'ROAS', v: '2,72×', c: GREEN, d: '↑ 6,1 %', dc: GREEN_DK },
  { l: lang === 'en' ? 'ACoS' : 'PNO', v: '36,8 %', c: ORANGE, d: '↓ 2,3 %', dc: GREEN_DK },
  { l: lang === 'en' ? 'Orders' : 'Objednávky', v: '3 240', c: LIME, d: '↑ 12,4 %', dc: GREEN_DK },
  { l: lang === 'en' ? 'Clicks' : 'Prokliky', v: '78 540', c: INDIGO, d: '', dc: '' },
]
const FUNNEL = (lang: Lang) => [
  { l: lang === 'en' ? 'Impressions' : 'Zobrazení', v: 2240000, rate: '' },
  { l: lang === 'en' ? 'Clicks' : 'Prokliky', v: 78540, rate: '3,51 %' },
  { l: lang === 'en' ? 'Add to cart' : 'Košík', v: 13608, rate: '17,33 %' },
  { l: lang === 'en' ? 'Orders' : 'Objednávky', v: 3240, rate: '23,81 %' },
]
const PLATFORMS = [
  { l: 'Google Ads', v: 1674145, c: GOOGLE, share: 67 },
  { l: 'Meta Ads', v: 810070, c: META, share: 33 },
]
const NAV = (lang: Lang) =>
  lang === 'en'
    ? ['Dashboard', 'Campaigns', 'Analytics', 'Competitor monitoring', 'Feed diagnostics']
    : ['Dashboard', 'Kampaně', 'Analytika', 'Monitoring konkurence', 'Diagnostika feedu']
const TASKS = (lang: Lang) =>
  lang === 'en'
    ? [
        { l: 'Google Ads account', d: 'Sub-account created under Custela MCC' },
        { l: 'Merchant Center', d: 'Product catalog connected' },
        { l: 'Conversion actions', d: 'Purchase, Add to Cart, Page View' },
        { l: 'Meta Pixel', d: 'Tracking pixel for Facebook & Instagram' },
        { l: 'Tracking hookup', d: 'Conversions wired into the GTM container' },
      ]
    : [
        { l: 'Google Ads účet', d: 'Sub-účet vytvořen pod Custela MCC' },
        { l: 'Merchant Center', d: 'Produktový katalog propojen' },
        { l: 'Konverzní akce', d: 'Purchase, Add to Cart, Page View' },
        { l: 'Meta Pixel', d: 'Měřící pixel pro Facebook & Instagram' },
        { l: 'Napojení měření', d: 'Konverze napojené do GTM kontejneru' },
      ]
const STEP_LABELS = (lang: Lang) =>
  lang === 'en'
    ? [
        'Sign up',
        'Connect your store and tell us what to advertise',
        'Custela launches and continuously tunes campaigns',
      ]
    : [
        'Zaregistrujete se',
        'Propojíte e-shop a řeknete, co inzerovat',
        'Custela spouští a nepřetržitě ladí kampaně',
      ]

export default function DashboardWalkthrough({ lang = 'cs' }: { lang?: 'cs' | 'en' }) {
  const stepLabels = STEP_LABELS(lang)
  const reduce = useReducedMotion()
  const stageRef = useRef<HTMLDivElement>(null)
  const inView = useInView(stageRef, { amount: 0.35 })

  const [step, setStep] = useState(0) // 0 signup,1 connect,2 provision,3 dashboard,4 imagefix
  const [cycle, setCycle] = useState(0)
  const [paused, setPaused] = useState(false)

  const cx = useMotionValue(0)
  const cy = useMotionValue(0)
  const cOpacity = useMotionValue(0)
  const stageOpacity = useMotionValue(1)

  const signupBtnRef = useRef<HTMLButtonElement>(null)
  const connectBtnRef = useRef<HTMLButtonElement>(null)
  const cursorInnerRef = useRef<HTMLDivElement>(null)
  const rippleRef = useRef<HTMLSpanElement>(null)

  const running = inView && !paused && !reduce

  useEffect(() => {
    if (!running) return
    let cancelled = false
    const pending = new Set<() => void>()
    const sleep = (ms: number) =>
      new Promise<void>((res) => {
        const f = () => {
          pending.delete(f)
          res()
        }
        pending.add(f)
        setTimeout(f, ms)
      })
    const guard = () => cancelled
    const stageBox = () => stageRef.current?.getBoundingClientRect()
    const fin = (c: any) => (c && c.finished ? c.finished : Promise.resolve())

    async function moveTo(ref: React.RefObject<HTMLElement>, duration: number) {
      const s = stageBox()
      const el = ref.current
      if (!s || !el) return
      const b = el.getBoundingClientRect()
      cOpacity.set(1)
      await Promise.all([
        fin(animate(cx, b.left - s.left + b.width / 2 - 6, { duration, ease: EASE_CURSOR })),
        fin(animate(cy, b.top - s.top + b.height / 2 - 4, { duration, ease: EASE_CURSOR })),
      ])
    }
    async function click(ref: React.RefObject<HTMLElement>) {
      if (cursorInnerRef.current) animate(cursorInnerRef.current, { scale: [1, 0.82, 1] }, { duration: 0.2 })
      if (rippleRef.current) animate(rippleRef.current, { scale: [0, 2.6], opacity: [0.5, 0] }, { duration: 0.55, ease: 'easeOut' })
      if (ref.current) animate(ref.current, { scale: [1, 0.97, 1] }, { duration: 0.22 })
      await sleep(230)
    }
    async function cursorExit() {
      const s = stageBox()
      if (!s) return
      await Promise.all([
        fin(animate(cx, s.width + 48, { duration: 0.6, ease: 'easeIn' })),
        fin(animate(cy, s.height + 48, { duration: 0.6, ease: 'easeIn' })),
        fin(animate(cOpacity, 0, { duration: 0.5 })),
      ])
    }

    let n = 0
    async function run() {
      const s0 = stageBox()
      if (s0) {
        cx.set(s0.width * 0.82)
        cy.set(s0.height * 0.92)
      }
      cOpacity.set(0)
      stageOpacity.set(1)

      while (!cancelled) {
        const variant = n % 2 // 0 = normal, 1 = image-fix cutaway
        n += 1
        setCycle(n)
        setStep(0)
        stageOpacity.set(1)
        await sleep(160); if (guard()) break
        await moveTo(signupBtnRef, 0.7); if (guard()) break
        await sleep(180); if (guard()) break
        await click(signupBtnRef); if (guard()) break
        await sleep(560); if (guard()) break
        setStep(1)
        await sleep(760); if (guard()) break
        await moveTo(connectBtnRef, 0.55); if (guard()) break
        await sleep(160); if (guard()) break
        await click(connectBtnRef); if (guard()) break
        await sleep(280); if (guard()) break
        await cursorExit(); if (guard()) break
        await sleep(220); if (guard()) break
        setStep(2) // provisioning — self-resolves
        await sleep(3300); if (guard()) break
        setStep(3) // dashboard — self-animates
        await sleep(5400); if (guard()) break
        if (variant === 1) {
          setStep(4) // image-fix cutaway
          await sleep(3000); if (guard()) break
        }
        // loop restarts: setStep(0) crossfades the last screen -> sign-up via
        // AnimatePresence (no blank seam). Brief hold so the final state reads.
        await sleep(250)
      }
    }
    run()
    return () => {
      cancelled = true
      pending.forEach((f) => f())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running])

  const narrative = step <= 1 ? step : 2

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <div
        ref={stageRef}
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 9',
          overflow: 'hidden',
          background: 'linear-gradient(180deg,#fbfdf5 0%,#f4f9ea 100%)',
          fontFamily: 'inherit',
        }}
      >
        <motion.div style={{ position: 'absolute', inset: 0, opacity: reduce ? 1 : stageOpacity }}>
          {reduce ? (
            <DashboardScreen reduce lang={lang} />
          ) : (
            <AnimatePresence mode="wait" initial={false}>
              {step === 0 && <ScreenWrap key={`s0-${cycle}`}><SignupScreen btnRef={signupBtnRef} lang={lang} /></ScreenWrap>}
              {step === 1 && <ScreenWrap key={`s1-${cycle}`}><ConnectScreen btnRef={connectBtnRef} lang={lang} /></ScreenWrap>}
              {step === 2 && <ScreenWrap key={`s2-${cycle}`}><ProvisioningScreen lang={lang} /></ScreenWrap>}
              {step === 3 && <ScreenWrap key={`s3-${cycle}`}><DashboardScreen lang={lang} /></ScreenWrap>}
              {step === 4 && <ScreenWrap key={`s4-${cycle}`}><ImageFixScreen lang={lang} /></ScreenWrap>}
            </AnimatePresence>
          )}

          {!reduce && (
            <motion.div
              aria-hidden
              style={{ position: 'absolute', top: 0, left: 0, x: cx, y: cy, opacity: cOpacity, pointerEvents: 'none', zIndex: 30 }}
            >
              <span
                ref={rippleRef}
                style={{ position: 'absolute', top: -2, left: -2, width: 26, height: 26, borderRadius: '50%', background: 'rgba(132,204,22,0.35)', transform: 'scale(0)', opacity: 0 }}
              />
              <div ref={cursorInnerRef} style={{ filter: 'drop-shadow(0 3px 6px rgba(0,0,0,.25))' }}>
                <MousePointer2 size={22} color={INK} fill="#fff" strokeWidth={1.5} />
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* caption + dots + control */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginTop: 16, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: 8 }}>
          {stepLabels.map((_, i) => (
            <span key={i} style={{ width: i === narrative ? 22 : 8, height: 8, borderRadius: 4, background: i === narrative ? LIME : '#d6e0c4', transition: 'all .3s ease' }} />
          ))}
        </div>
        <span style={{ fontSize: 14, fontWeight: 600, color: '#374151' }}>{narrative + 1} · {stepLabels[narrative]}</span>
        {!reduce && (
          <button
            onClick={() => setPaused((p) => !p)}
            style={{ fontSize: 12, fontWeight: 700, color: LIME_DK, background: '#fff', border: '1px solid #e5e7eb', borderRadius: 999, padding: '5px 12px', cursor: 'pointer' }}
          >
            {paused ? (lang === 'en' ? 'Play' : 'Přehrát') : (lang === 'en' ? 'Pause' : 'Pauza')}
          </button>
        )}
      </div>
    </div>
  )
}

/* ----------------------------- shared bits -------------------------------- */
function ScreenWrap({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 26 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -26 }}
      transition={{ duration: 0.32, ease: EASE }}
      style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      {children}
    </motion.div>
  )
}

function Counter({ to, fmt, delay = 0, dur = 1.3, reduce }: { to: number; fmt: (n: number) => string; delay?: number; dur?: number; reduce?: boolean }) {
  const mv = useMotionValue(reduce ? to : 0)
  const out = useTransform(mv, (v) => fmt(v))
  useEffect(() => {
    if (reduce) return
    const c = animate(mv, to, { duration: dur, delay, ease: EASE })
    return () => c.stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <motion.span>{out}</motion.span>
}

/* ------------------------------- screen 1 --------------------------------- */
function SignupScreen({ btnRef, lang }: { btnRef: React.RefObject<HTMLButtonElement>; lang: Lang }) {
  const en = lang === 'en'
  return (
    <div style={card(370)}>
      <div style={{ width: 34, height: 34, borderRadius: 9, background: INK, display: 'grid', placeItems: 'center', marginBottom: 14 }}>
        <span style={{ color: LIME, fontWeight: 800, fontSize: 16 }}>C</span>
      </div>
      <h4 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: INK }}>{en ? 'Create your account' : 'Vytvořte si účet'}</h4>
      <p style={{ margin: '6px 0 18px', fontSize: 13, color: '#6b7280' }}>{en ? 'Up and running in minutes. No card.' : 'Spustíte za pár minut. Bez karty.'}</p>
      <label style={fieldLabel}>{en ? 'Email' : 'E-mail'}</label>
      <div style={field}>jan@muj-eshop.cz</div>
      <button ref={btnRef} style={primaryBtn}>{en ? 'Create account' : 'Založit účet'}</button>
      <div style={{ display: 'flex', gap: 12, marginTop: 14, flexWrap: 'wrap' }}>
        {(en ? ['No credit card', 'Pay only for results', 'No commitment'] : ['Bez platební karty', 'Platíte jen za výsledky', 'Bez závazků']).map((t) => (
          <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 11, color: '#6b7280', fontWeight: 600 }}>
            <Check /> {t}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------- screen 2 --------------------------------- */
function ConnectScreen({ btnRef, lang }: { btnRef: React.RefObject<HTMLButtonElement>; lang: Lang }) {
  const en = lang === 'en'
  const pills = en ? ['Products', 'Brand', 'Promotions'] : ['Produkty', 'Značka', 'Akce']
  return (
    <div style={card(390)}>
      <h4 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: INK }}>{en ? 'Connect your store' : 'Propojte svůj e-shop'}</h4>
      <p style={{ margin: '6px 0 18px', fontSize: 13, color: '#6b7280' }}>{en ? 'We set up the ad accounts and campaigns for you.' : 'Reklamní účty a kampaně už nastavíme my.'}</p>
      <label style={fieldLabel}>{en ? 'Your store' : 'Váš e-shop'}</label>
      <div style={{ ...field, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>muj-eshop.cz</span>
        <span style={{ fontSize: 16, color: '#9ca3af' }}>▾</span>
      </div>
      <label style={{ ...fieldLabel, marginTop: 14 }}>{en ? 'What do you want to advertise?' : 'Co chcete inzerovat?'}</label>
      <div style={{ display: 'flex', gap: 8, marginBottom: 18 }}>
        {pills.map((p, i) => (
          <span key={p} style={{ fontSize: 12.5, fontWeight: 700, padding: '7px 13px', borderRadius: 999, border: `1.5px solid ${i === 0 ? LIME : '#e5e7eb'}`, background: i === 0 ? '#f2fbe0' : '#fff', color: i === 0 ? LIME_DK : '#6b7280' }}>
            {p}
          </span>
        ))}
      </div>
      <button ref={btnRef} style={primaryBtn}>{en ? 'Connect store' : 'Propojit e-shop'}</button>
    </div>
  )
}

/* --------------------------- screen 2.5 (handoff) ------------------------- */
function ProvisioningScreen({ lang }: { lang: Lang }) {
  const en = lang === 'en'
  const tasks = TASKS(lang)
  const reduce = useReducedMotion()
  const [active, setActive] = useState(reduce ? tasks.length : 0) // index currently "running"; < active = done
  useEffect(() => {
    if (reduce) return
    let i = 0
    const timers: any[] = []
    const tick = () => {
      i += 1
      setActive(i)
      if (i < tasks.length) timers.push(setTimeout(tick, 560))
    }
    timers.push(setTimeout(tick, 500))
    return () => timers.forEach(clearTimeout)
  }, [reduce])

  const allDone = active >= tasks.length
  const progress = Math.round((Math.min(active, tasks.length) / tasks.length) * 100)

  return (
    <div style={{ ...card(420), paddingTop: 22 }}>
      <div style={{ width: 48, height: 48, borderRadius: 14, margin: '0 auto 12px', display: 'grid', placeItems: 'center', background: allDone ? 'rgba(34,197,94,0.10)' : 'rgba(10,10,10,0.04)' }}>
        {allDone ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 13L9.5 17.5L19 7" stroke={GREEN} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        ) : (
          <div style={{ width: 22, height: 22, border: '2.5px solid #E5E5E3', borderTopColor: INK, borderRadius: '50%', animation: 'cwSpin 0.8s linear infinite' }} />
        )}
      </div>
      <h4 style={{ margin: 0, textAlign: 'center', fontSize: 21, fontWeight: 800, color: INK, letterSpacing: '-0.02em' }}>
        {allDone ? (en ? 'Custela is ready!' : 'Custela je připravena!') : (en ? 'Creating your ad accounts' : 'Zakládáme reklamní účty')}
      </h4>
      <p style={{ margin: '7px 0 16px', textAlign: 'center', fontSize: 12.5, color: '#6b7280', lineHeight: 1.5 }}>
        {allDone ? (en ? 'Accounts are set up. Launching your campaigns.' : 'Účty jsou založené. Spouštíme vaše kampaně.') : (en ? 'We create the ad accounts for you. There is nothing left for you to do.' : 'Reklamní účty zakládáme za vás. Vy už nemusíte nic dělat.')}
      </p>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#9b9b9b' }}>{en ? 'Creating accounts' : 'Zakládám účty'}</span>
        <span style={{ fontSize: 12.5, fontWeight: 800, color: INK }}>{progress} %</span>
      </div>
      <div style={{ height: 5, background: '#eef0ea', borderRadius: 4, overflow: 'hidden', marginBottom: 14 }}>
        <div style={{ height: '100%', borderRadius: 4, width: `${progress}%`, background: allDone ? GREEN : `linear-gradient(90deg,${LIME},${LIME_DK})`, transition: 'width 280ms ease' }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
        {tasks.map((t, i) => {
          const s = i < active ? 'done' : i === active ? 'running' : 'waiting'
          return (
            <div key={t.l} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '9px 12px', borderRadius: 11, border: `1px solid ${s === 'done' ? 'rgba(34,197,94,0.18)' : '#e5e7eb'}`, background: s === 'done' ? 'rgba(34,197,94,0.03)' : '#fff', transition: 'all .3s ease' }}>
              <span style={{ width: 22, height: 22, flexShrink: 0, display: 'grid', placeItems: 'center' }}>
                {s === 'done' && (
                  <span style={{ width: 22, height: 22, borderRadius: '50%', background: GREEN, display: 'grid', placeItems: 'center' }}>
                    <svg width="11" height="11" viewBox="0 0 10 10" fill="none"><path d="M2 5.5L4 7.5L8 3" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                )}
                {s === 'running' && <span style={{ width: 18, height: 18, border: '2px solid #e5e7eb', borderTopColor: INK, borderRadius: '50%', animation: 'cwSpin 0.8s linear infinite' }} />}
                {s === 'waiting' && <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#e5e7eb' }} />}
              </span>
              <span style={{ flex: 1, minWidth: 0 }}>
                <span style={{ display: 'block', fontSize: 13, fontWeight: 600, color: s === 'waiting' ? '#c5c5c3' : INK }}>{t.l}</span>
                <span style={{ display: 'block', fontSize: 11, color: s === 'waiting' ? '#d6d6d4' : '#9ca3af' }}>{t.d}</span>
              </span>
              {s === 'done' && <span style={{ fontSize: 10.5, fontWeight: 700, color: GREEN_DK, background: 'rgba(34,197,94,0.08)', padding: '3px 9px', borderRadius: 999 }}>{en ? 'Done' : 'Hotovo'}</span>}
              {s === 'running' && <span style={{ fontSize: 10.5, fontWeight: 600, color: INK }}>{en ? 'In progress…' : 'Probíhá…'}</span>}
              {s === 'waiting' && <span style={{ fontSize: 10.5, color: '#c5c5c3' }}>{en ? 'Waiting' : 'Čeká'}</span>}
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ------------------------------- screen 3 --------------------------------- */
function DashboardScreen({ reduce = false, lang }: { reduce?: boolean; lang: Lang }) {
  const r = reduce
  const en = lang === 'en'
  const kpis = KPIS(lang)
  const nav = NAV(lang)
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: '19% 1fr', background: '#fff' }}>
      {/* sidebar */}
      <div style={{ background: '#fafbf7', borderRight: '1px solid #eef0ea', padding: '13px 11px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontWeight: 800, fontSize: 14, color: INK, marginBottom: 13 }}>Custela</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 14, padding: '7px 8px', borderRadius: 9, border: '1px solid #eef0ea', background: '#fff' }}>
          <span style={{ width: 22, height: 22, borderRadius: 6, background: LIME, color: INK, display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 800 }}>V</span>
          <span style={{ lineHeight: 1.15 }}>
            <span style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#374151' }}>Velora</span>
            <span style={{ display: 'block', fontSize: 9.5, color: '#9ca3af' }}>velora.cz</span>
          </span>
        </div>
        {nav.map((n, i) => (
          <div key={n} style={{ fontSize: 11, fontWeight: i === 2 ? 700 : 500, color: i === 2 ? INK : '#6b7280', background: i === 2 ? '#eaf7cf' : 'transparent', borderRadius: 7, padding: '7px 9px', marginBottom: 2 }}>{n}</div>
        ))}
        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 7, padding: '8px 9px', borderRadius: 9, background: INK }}>
          <span style={{ fontSize: 9, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: 0.5 }}>{en ? 'Credit' : 'Kredit'}</span>
          <span style={{ fontSize: 12, fontWeight: 800, color: LIME, marginLeft: 'auto' }}>24 800 Kč</span>
        </div>
      </div>

      {/* main */}
      <div style={{ position: 'relative', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden' }}>
        {/* hero */}
        <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: EASE }} style={{ background: INK, borderRadius: 14, padding: '13px 16px', color: '#fff', position: 'relative', overflow: 'hidden', boxShadow: `0 0 50px -14px rgba(132,204,22,.4)` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: 9.5, letterSpacing: 1, color: '#9ca3af', textTransform: 'uppercase' }}>{en ? 'Total revenue' : 'Celkové tržby'}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 9, marginTop: 2 }}>
                <span style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.02em' }}><Counter to={TRZBY} fmt={czk} reduce={r} dur={1.4} /></span>
                <span style={{ fontSize: 12, fontWeight: 700, color: LIME }}>▲ 17,9 %</span>
              </div>
              <div style={{ fontSize: 10.5, color: '#9ca3af', marginTop: 2 }}>{en ? 'vs previous' : 'vs předchozí'} · {czk(PREV)}</div>
            </div>
            <div style={{ display: 'flex', gap: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 8, padding: 3 }}>
              {(en ? ['All', 'Google', 'Meta'] : ['Vše', 'Google', 'Meta']).map((t, i) => (
                <span key={t} style={{ fontSize: 10, fontWeight: 700, padding: '4px 9px', borderRadius: 6, background: i === 0 ? '#fff' : 'transparent', color: i === 0 ? INK : '#9ca3af' }}>{t}</span>
              ))}
            </div>
          </div>
          <HeroSpark reduce={r} />
          <span style={{ position: 'absolute', bottom: 12, right: 14, fontSize: 10, fontWeight: 700, color: LIME, border: `1px solid ${LIME_DK}`, borderRadius: 999, padding: '3px 9px' }}>{en ? 'Custela optimizes 24/7' : 'Custela optimalizuje 24/7'}</span>
        </motion.div>

        {/* KPI strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 7 }}>
          {kpis.map((k, i) => (
            <motion.div key={k.l} initial={false} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 + i * 0.05, duration: 0.45, ease: EASE }} style={{ background: '#fbfcf8', border: '1px solid #eef0ea', borderRadius: 10, padding: '7px 9px' }}>
              <div style={{ fontSize: 9, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: 0.4 }}>{k.l}</div>
              <div style={{ fontSize: 14, fontWeight: 800, color: INK, marginTop: 1 }}>{k.v}</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 3 }}>
                {k.d ? <span style={{ fontSize: 9.5, fontWeight: 700, color: k.dc }}>{k.d}</span> : <span />}
                <MiniSpark color={k.c} seed={i} reduce={r} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* funnel (the self-animating star) */}
        <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.34, duration: 0.45, ease: EASE }} style={{ background: '#fbfcf8', border: '1px solid #eef0ea', borderRadius: 12, padding: '10px 14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#374151' }}>{en ? 'Conversion funnel' : 'Konverzní trychtýř'}</span>
            <span style={{ fontSize: 9.5, color: '#9ca3af' }}>{en ? 'step-to-step progression' : 'postup mezi kroky'}</span>
          </div>
          <Funnel reduce={r} lang={lang} />
        </motion.div>

        {/* bottom row: platforms + billing */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: 9 }}>
          <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.46, duration: 0.45, ease: EASE }} style={{ background: '#fbfcf8', border: '1px solid #eef0ea', borderRadius: 12, padding: '10px 12px' }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#374151', marginBottom: 8 }}>{en ? 'Platform performance' : 'Výkon platforem'}</div>
            {PLATFORMS.map((p, i) => (
              <div key={p.l} style={{ marginBottom: i === 0 ? 9 : 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 3 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontWeight: 700, color: '#374151' }}><span style={{ width: 9, height: 9, borderRadius: '50%', background: p.c }} />{p.l}</span>
                  <span style={{ fontWeight: 800, color: INK }}>{czk(p.v)}</span>
                </div>
                <div style={{ height: 7, background: '#eef2e6', borderRadius: 4, overflow: 'hidden' }}>
                  <motion.div initial={r ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.56 + i * 0.1, duration: 0.6, ease: EASE }} style={{ height: '100%', width: `${p.share}%`, background: p.c, borderRadius: 4, transformOrigin: 'left' }} />
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.45, ease: EASE }} style={{ background: 'linear-gradient(135deg,#f2fbe0,#eaf7cf)', border: `1px solid ${LIME}`, borderRadius: 12, padding: '10px 12px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: 10, color: '#5b6b3e', textTransform: 'uppercase', letterSpacing: 0.4, fontWeight: 700 }}>{en ? 'Billed this month' : 'Účtováno tento měsíc'}</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: INK, marginTop: 2 }}><Counter to={FEE} fmt={czk} reduce={r} dur={1.6} delay={0.6} /></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginTop: 5, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: LIME_DK, background: '#fff', borderRadius: 999, padding: '2px 8px', border: `1px solid ${LIME}` }}>{en ? 'rate: 4% of revenue' : 'sazba 4 % z obratu'}</span>
              <span style={{ fontSize: 10, fontWeight: 700, color: '#5b6b3e' }}>{en ? 'No results, no fee' : 'Nefunguje = neplatíte'}</span>
            </div>
          </motion.div>
        </div>

        {/* DOPORUČENÍ — slides up near the end (autonomous 24/7 nudge) */}
        {!r && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.6, duration: 0.5, ease: EASE }}
            style={{ position: 'absolute', right: 14, bottom: 12, width: 220, background: '#fff', borderRadius: 12, padding: '10px 12px', borderLeft: `3px solid ${LIME}`, boxShadow: '0 12px 34px rgba(0,0,0,.14)' }}
          >
            <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: 0.6, color: LIME_DK, textTransform: 'uppercase' }}>{en ? 'Recommendation' : 'Doporučení'}</div>
            <div style={{ fontSize: 13, fontWeight: 800, color: INK, marginTop: 2 }}>{en ? 'Increase budget' : 'Navýšit rozpočet'}</div>
            <div style={{ fontSize: 11, color: '#6b7280', marginTop: 1, lineHeight: 1.35 }}>{en ? "You'll show up in another 18% of auctions." : 'Zobrazíte se v dalších 18 % aukcí.'}</div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

function Funnel({ reduce, lang }: { reduce?: boolean; lang: Lang }) {
  const funnel = FUNNEL(lang)
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginTop: 12, marginBottom: 4 }}>
      {funnel.map((f, i) => (
        <div key={f.l} style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <motion.div
              initial={reduce ? false : { scale: 0.5, opacity: 0.3 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.36, duration: 0.4, ease: EASE }}
              style={{ width: 30, height: 30, borderRadius: '50%', margin: '0 auto', display: 'grid', placeItems: 'center', color: '#fff', fontWeight: 800, fontSize: 13, background: i === funnel.length - 1 ? LIME : INK, boxShadow: i === funnel.length - 1 ? `0 0 0 5px rgba(132,204,22,0.18)` : 'none' }}
            >
              {i + 1}
            </motion.div>
            <div style={{ fontSize: 9.5, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: 0.4, marginTop: 6 }}>{f.l}</div>
            <div style={{ fontSize: 14, fontWeight: 800, color: i === funnel.length - 1 ? LIME_DK : INK, marginTop: 1 }}>
              <Counter to={f.v} fmt={fmtNum} reduce={reduce} delay={0.2 + i * 0.36} dur={0.8} />
            </div>
            {f.rate && <div style={{ fontSize: 9.5, color: '#9ca3af', marginTop: 1 }}>→ {f.rate}</div>}
          </div>
          {i < funnel.length - 1 && (
            <div style={{ width: 28, height: 3, background: '#eef0ea', borderRadius: 2, overflow: 'hidden', flexShrink: 0 }}>
              <motion.div initial={reduce ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.4 + i * 0.36, duration: 0.45, ease: EASE }} style={{ height: '100%', background: `linear-gradient(90deg,${LIME},${LIME_DK})`, transformOrigin: 'left' }} />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function HeroSpark({ reduce }: { reduce?: boolean }) {
  const d = 'M0,30 L26,25 L52,28 L78,17 L104,21 L130,12 L160,15 L190,8 L220,12 L260,5 L300,9'
  return (
    <svg viewBox="0 0 300 36" style={{ width: '100%', height: 26, marginTop: 6, display: 'block' }} preserveAspectRatio="none">
      <motion.path d={d} fill="none" stroke={LIME} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.3, ease: EASE, delay: 0.2 }} />
    </svg>
  )
}

function MiniSpark({ color, seed, reduce }: { color: string; seed: number; reduce?: boolean }) {
  const pts = [10, 14, 9, 16, 12, 19, 15, 22][((seed * 3) % 6) + 0] // unused but keeps deterministic
  void pts
  const series = [
    [12, 9, 14, 10, 16, 13, 18],
    [10, 12, 11, 14, 16, 15, 19],
    [16, 14, 13, 12, 10, 11, 9],
    [9, 11, 10, 13, 15, 17, 20],
    [12, 13, 11, 14, 13, 16, 18],
  ][seed % 5]
  const d = series.map((y, i) => `${i === 0 ? 'M' : 'L'}${i * 9},${24 - y}`).join(' ')
  return (
    <svg viewBox="0 0 54 24" width="54" height="16" preserveAspectRatio="none">
      <motion.path d={d} fill="none" stroke={color} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.9, ease: EASE, delay: 0.3 }} />
    </svg>
  )
}

/* --------------------------- screen 4 (B-variant) ------------------------- */
function ImageFixScreen({ lang }: { lang: Lang }) {
  const en = lang === 'en'
  return (
    <div style={{ ...card(560), padding: '22px 26px' }}>
      <h4 style={{ margin: 0, textAlign: 'center', fontSize: 19, fontWeight: 800, color: INK }}>{en ? 'Fixing your product images' : 'Opravujeme obrázky produktů'}</h4>
      <p style={{ margin: '6px 0 18px', textAlign: 'center', fontSize: 12.5, color: '#6b7280' }}>{en ? 'We standardize to 1024×1024 px on a white background and sharpen.' : 'Srovnáme na 1024×1024 px na bílém pozadí a doostříme.'}</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, justifyContent: 'center' }}>
        <ProductTile variant="before" lang={lang} />
        <motion.span initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.4 }} style={{ fontSize: 22, color: LIME_DK }}>→</motion.span>
        <ProductTile variant="after" lang={lang} />
      </div>
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.4, ease: EASE }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 18 }}>
        <span style={{ width: 22, height: 22, borderRadius: '50%', background: GREEN, display: 'grid', placeItems: 'center' }}>
          <svg width="11" height="11" viewBox="0 0 10 10" fill="none"><path d="M2 5.5L4 7.5L8 3" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
        <span style={{ fontSize: 13.5, fontWeight: 700, color: GREEN_DK }}>{en ? 'Image successfully fixed.' : 'Obrázek úspěšně upraven.'}</span>
      </motion.div>
    </div>
  )
}

function ProductTile({ variant, lang }: { variant: 'before' | 'after'; lang: Lang }) {
  const after = variant === 'after'
  const en = lang === 'en'
  return (
    <div style={{ textAlign: 'center' }}>
      <motion.div
        initial={after ? { opacity: 0, clipPath: 'inset(0 100% 0 0)' } : false}
        animate={after ? { opacity: 1, clipPath: 'inset(0 0% 0 0)' } : undefined}
        transition={after ? { delay: 0.6, duration: 0.7, ease: EASE } : undefined}
        style={{
          width: 150,
          height: 150,
          borderRadius: 14,
          border: `1.5px solid ${after ? LIME : '#e5e7eb'}`,
          overflow: 'hidden',
          position: 'relative',
          display: 'grid',
          placeItems: 'center',
          background: after ? '#fff' : 'linear-gradient(135deg,#cdd6df,#e7ccc0)',
        }}
      >
        {/* placeholder product = a simple bottle silhouette */}
        <svg width={after ? 56 : 44} height={after ? 100 : 78} viewBox="0 0 56 100" style={{ transform: after ? 'none' : 'rotate(-11deg)', filter: after ? 'none' : 'blur(0.4px)' }}>
          <rect x="22" y="2" width="12" height="16" rx="2" fill="#7a8a52" />
          <path d="M20 18 Q20 28 14 36 Q8 44 8 60 L8 92 Q8 98 14 98 L42 98 Q48 98 48 92 L48 60 Q48 44 42 36 Q36 28 36 18 Z" fill={after ? '#8aa64f' : '#88965f'} />
          <rect x="12" y="58" width="32" height="26" rx="3" fill={after ? '#f2fbe0' : '#e8e2d2'} />
        </svg>
        <span style={{ position: 'absolute', top: 7, left: 7, fontSize: 9, fontWeight: 700, color: after ? LIME_DK : '#6b7280', background: 'rgba(255,255,255,0.85)', borderRadius: 6, padding: '2px 6px' }}>{after ? '1024×1024 px' : '480×480 px'}</span>
      </motion.div>
      <div style={{ fontSize: 11.5, fontWeight: 700, color: after ? LIME_DK : '#9ca3af', marginTop: 7 }}>{after ? (en ? 'Fixed' : 'Opravený') : (en ? 'Original' : 'Původní')}</div>
    </div>
  )
}

/* --------------------------------- atoms ---------------------------------- */
function Check() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke={LIME_DK} strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8l3.5 3.5L13 5" />
    </svg>
  )
}

/* --------------------------------- styles --------------------------------- */
const card = (w: number): React.CSSProperties => ({
  width: `min(${w}px, 88%)`,
  background: '#fff',
  borderRadius: 18,
  padding: '24px 26px',
  boxShadow: '0 18px 50px rgba(0,0,0,.10), 0 0 0 1px rgba(0,0,0,.03)',
})
const fieldLabel: React.CSSProperties = { display: 'block', fontSize: 11, fontWeight: 700, color: '#6b7280', marginBottom: 6 }
const field: React.CSSProperties = { fontSize: 13.5, color: '#374151', background: '#f7f8f4', border: '1.5px solid #e5e7eb', borderRadius: 10, padding: '11px 13px', marginBottom: 16 }
const primaryBtn: React.CSSProperties = { width: '100%', background: LIME, color: INK, fontWeight: 800, fontSize: 14, border: 'none', borderRadius: 10, padding: '12px 16px', cursor: 'default' }
