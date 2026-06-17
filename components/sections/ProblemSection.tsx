'use client'

import { X, Check } from 'lucide-react'

const EN = {
  label: 'Why Custela',
  todayLabel: 'Today',
  withLabel: 'With Custela',
  todayPrice: '€600–€1,200',
  todaySub: 'flat monthly fee',
  todayCopy: 'You pay the same every month — even when your campaigns aren’t earning.',
  withPriceSuffix: 'of revenue',
  withSub: 'you pay only for results',
  withCopy: 'When campaigns don’t earn, you pay nothing. Custela runs them on its own, 24/7.',
}

export default function ProblemSection({ lang = 'cs' }: { lang?: 'cs' | 'en' }) {
  const t = EN

  return (
    <section className="problem-section" style={{ padding: '24px 0 96px' }}>
      <div className="max-w-[920px] mx-auto px-6">
        <div className="sh reveal">
          <div className="section-label">{lang === 'en' ? t.label : 'Proč Custela'}</div>
          {lang === 'en' ? (
            <>
              <h2 style={{ fontWeight: 800 }}>
                Most online stores pay for campaign management.
                <br />
                Not for the results it brings.
              </h2>
              <p className="sh-sub">
                They pay a fixed amount every month — no matter whether the
                campaigns earn anything.{' '}
                <strong style={{ color: '#65a30d', fontWeight: 700 }}>
                  Don’t be one of them.
                </strong>
              </p>
            </>
          ) : (
            <>
              <h2 style={{ fontWeight: 800 }}>
                Většina e-shopů platí za správu kampaní.
                <br />
                Ne za jejich výsledky.
              </h2>
              <p className="sh-sub">
                Platí za ni fixní částku každý měsíc — bez ohledu na to, jestli
                kampaně vydělávají.{' '}
                <strong style={{ color: '#65a30d', fontWeight: 700 }}>
                  Nebuďte mezi nimi.
                </strong>
              </p>
            </>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Dnes — fixní paušál */}
          <div
            className="reveal problem-cmp-card"
            style={{
              background: '#fafafa',
              border: '1px solid #e5e7eb',
              borderRadius: 24,
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span
                style={{
                  width: 34, height: 34, borderRadius: 10, flexShrink: 0,
                  background: '#f3f4f6', color: '#9ca3af',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <X size={18} strokeWidth={2.5} />
              </span>
              <span style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#9ca3af' }}>
                {lang === 'en' ? t.todayLabel : 'Dnes'}
              </span>
            </div>
            <div style={{ fontSize: 'clamp(34px, 4.5vw, 48px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#6b7280', lineHeight: 1, marginTop: 4 }}>
              {lang === 'en' ? t.todayPrice : '15–30 tis. Kč'}
            </div>
            <div style={{ fontSize: 14, color: '#9ca3af', fontWeight: 600 }}>{lang === 'en' ? t.todaySub : 'fixní paušál měsíčně'}</div>
            {lang === 'en' ? (
              <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                You pay the same every month — even&nbsp;when your campaigns aren&rsquo;t earning.
              </p>
            ) : (
              <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                Platíte pořád stejně — i&nbsp;když kampaně zrovna nevydělávají.
              </p>
            )}
          </div>

          {/* S Custelou — 3–5 % z obratu */}
          <div
            className="reveal reveal-delay-1 problem-cmp-card"
            style={{
              background: 'linear-gradient(160deg, rgba(101,163,13,0.06), rgba(101,163,13,0.02))',
              border: '1.5px solid rgba(101,163,13,0.35)',
              borderRadius: 24,
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              boxShadow: '0 12px 40px rgba(101,163,13,0.10)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span
                style={{
                  width: 34, height: 34, borderRadius: 10, flexShrink: 0,
                  background: '#65a30d', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <Check size={18} strokeWidth={2.5} />
              </span>
              <span style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#65a30d' }}>
                {lang === 'en' ? t.withLabel : 'S Custelou'}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 4 }}>
              <span style={{ fontSize: 'clamp(34px, 4.5vw, 48px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#111827', lineHeight: 1 }}>
                3–5&nbsp;%
              </span>
              <span style={{ fontSize: 16, fontWeight: 600, color: '#65a30d' }}>{lang === 'en' ? t.withPriceSuffix : 'z obratu'}</span>
            </div>
            <div style={{ fontSize: 14, color: '#65a30d', fontWeight: 600 }}>{lang === 'en' ? t.withSub : 'platíte jen z výsledků'}</div>
            <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.6, margin: 0 }}>
              {lang === 'en' ? t.withCopy : 'Když kampaně nevydělávají, neplatíte nic. Custela je řídí sama, 24/7.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
