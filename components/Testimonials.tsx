'use client'

import { Star } from 'lucide-react'
import { StaggerContainer, StaggerItem } from '@/components/AnimateIn'
import AnimateIn from '@/components/AnimateIn'

const testimonials = [
  {
    quote:
      'Každé ráno jsem otevíral tři platformy zvlášť. Teď otevřu Custelu a za 2 minuty vím, jak si stojím. Ušetřím minimálně 10 hodin týdně na reportech.',
    name: 'Martin Novák',
    role: 'Majitel e-shopu',
    company: 'FitShop.cz',
    initials: 'MN',
    metric: '10 h/týden ušetřeno',
  },
  {
    quote:
      'Díky AI doporučením jsme snížili CPA o 22 % za první měsíc. Custela nám ukázala kampaně, které žraly rozpočet bez výsledků — to z jednotlivých platforem nebylo vidět.',
    name: 'Kateřina Dvořáková',
    role: 'Marketing manažer',
    company: 'ModaOnline.cz',
    initials: 'KD',
    metric: '−22 % CPA za měsíc',
  },
  {
    quote:
      'Spravujeme kampaně pro 12 klientů na Google i Metu. Custela nám ušetřila celý jeden pracovní den týdně, který jsme dříve trávili reportováním a kontrolou.',
    name: 'Tomáš Procházka',
    role: 'Jednatel',
    company: 'DigiMedia Agency',
    initials: 'TP',
    metric: '1 den/týden ušetřen',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[#F5F5F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn variant="blurUp">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#7AB800] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Reálné výsledky
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-dark">Co říkají ti, kdo</span>{' '}
              <span className="text-gradient-lime-dark">přestali přepínat</span>
            </h2>
          </div>
        </AnimateIn>

        {/* Testimonial cards */}
        <StaggerContainer
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          staggerDelay={0.15}
        >
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.name}>
              <div className="p-8 rounded-2xl card-light card-shine-light h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                {/* Metric highlight */}
                <div className="inline-flex self-start px-3 py-1 bg-[#7AB800]/10 rounded-full mb-4">
                  <span className="text-xs font-semibold text-[#7AB800]">{testimonial.metric}</span>
                </div>

                {/* Quote */}
                <p className="text-[#6B7280] leading-relaxed mb-8 text-sm flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0A0A0A]/[0.05] rounded-full flex items-center justify-center">
                    <span className="text-[#6B7280] text-sm font-semibold">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-[#0A0A0A] text-sm font-medium">
                      {testimonial.name}
                    </p>
                    <p className="text-[#9CA3AF] text-xs">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
