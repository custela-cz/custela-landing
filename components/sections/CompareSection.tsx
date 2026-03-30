'use client'

import { motion } from 'framer-motion'

const compareItems = [
  { topic: 'Měsíční náklady', agency: 'Fixní paušál', custela: '5 % z tržeb' },
  { topic: 'Správa kampaní', agency: 'Závislá na kapacitě týmu', custela: 'Autonomní, 24/7' },
  { topic: 'Optimalizace', agency: 'Podle kapacity specialisty', custela: 'Průběžná, každé 4 hodiny' },
  { topic: 'Reporting', agency: 'Většinou 1× měsíčně', custela: 'Real-time dashboard + email reporty' },
  { topic: 'Platformy', agency: 'Záleží na agentuře', custela: 'Google + Meta + Sklik' },
  { topic: 'Nasazení', agency: 'Dny až týdny', custela: '3 minuty' },
]

const cubicEase = [0.16, 1, 0.3, 1] as const

const itemVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.4 + i * 0.08,
      duration: 0.45,
      ease: cubicEase as unknown as [number, number, number, number],
    },
  }),
}

export default function CompareSection() {
  return (
    <section className="compare-section">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="sh reveal">
          <div className="section-label">Srovnání</div>
          <h2>Dva přístupy ke správě kampaní</h2>
          <p className="sh-sub" style={{ color: '#7a8494' }}>
            Profesionální správa kampaní za 5 % z tržeb. Bez paušálu, bez závazků.
          </p>
        </div>

        <div className="compare-stage compare-animated">
          {/* Agency */}
          <motion.div
            className="compare-card compare-card--without"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <div className="compare-card__header">
              <span className="compare-card__icon compare-card__icon--x">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <div>
                <span className="compare-card__label compare-card__label--old">Tradiční správa</span>
                <h3>PPC agentura</h3>
              </div>
            </div>
            <ul className="compare-card__list">
              {compareItems.map((row, i) => (
                <motion.li
                  key={i}
                  style={{ '--item-index': i } as React.CSSProperties}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                >
                  <span className="compare-item-icon compare-item-icon--x">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span className="compare-strike">
                    <span className="compare-item-topic">{row.topic}</span>
                    <span className="compare-strike__text">{row.agency}</span>
                    <span className="compare-strike__line" />
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* VS Divider */}
          <div className="compare-divider">
            <span className="compare-divider__line" />
            <motion.span
              initial={{ scale: 0.6, rotate: -15, opacity: 0 }}
              whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.3 }}
              style={{ display: 'flex', flexShrink: 0 }}
            >
              <motion.span
                className="compare-vs"
                animate={{
                  scale: [1, 1.08, 1],
                  rotate: [0, 3, -3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.span>
            <span className="compare-divider__line" />
          </div>

          {/* With Custela */}
          <motion.div
            className="compare-card compare-card--with"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <div className="compare-card__header">
              <span className="compare-card__icon compare-card__icon--check">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <span className="compare-card__label compare-card__label--new">Autonomní správa</span>
                <h3>Custela</h3>
              </div>
            </div>
            <ul className="compare-card__list">
              {compareItems.map((row, i) => (
                <motion.li
                  key={i}
                  style={{ '--item-index': i } as React.CSSProperties}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                >
                  <span className="compare-item-icon compare-item-icon--check">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6.5l2.5 2.5 4.5-5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="compare-item-content">
                    <span className="compare-item-topic">{row.topic}</span>
                    <span>{row.custela}</span>
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
