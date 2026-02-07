import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'Před Custelou jsem trávil 2 hodiny denně přepínáním mezi platformami. Teď mám vše na jednom místě a ušetřím minimálně 10 hodin týdně.',
    name: 'Martin Novák',
    role: 'Majitel e-shopu',
    company: 'FitShop.cz',
    initials: 'MN',
  },
  {
    quote: 'Díky AI tipům jsme snížili náklady na akvizici o 28 % za první měsíc. Reporty, které dříve trvaly hodiny, mám teď během vteřin.',
    name: 'Kateřina Dvořáková',
    role: 'Marketing manažer',
    company: 'ModaOnline.cz',
    initials: 'KD',
  },
  {
    quote: 'Spravujeme kampaně pro 15+ klientů. Custela nám ušetřila obrovské množství času a naši klienti milují přehledné reporty.',
    name: 'Tomáš Procházka',
    role: 'CEO',
    company: 'DigiMedia Agency',
    initials: 'TP',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-lime-hover text-sm font-semibold uppercase tracking-wider mb-4">
            Reference
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6">
            Co říkají naši <span className="bg-lime/20 px-1">zákazníci</span>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-8 bg-white border border-black/[0.06] rounded-card shadow-card"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-text leading-relaxed mb-8 text-sm">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F5F5F5] rounded-full flex items-center justify-center">
                  <span className="text-gray-text text-sm font-semibold">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="text-dark text-sm font-medium">{testimonial.name}</p>
                  <p className="text-gray-muted text-xs">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
