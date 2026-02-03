'use client'

import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-radial pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-dark-secondary border border-white/10 rounded-card p-8 md:p-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/10 border border-lime/20 rounded-full mb-8">
            <span className="text-lime text-sm font-medium">14 dní zdarma</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Připraveni začít?
          </h2>
          <p className="text-lg text-gray-text max-w-xl mx-auto mb-10">
            Vyzkoušejte Custela zdarma a zjistěte, kolik času a peněz můžete ušetřit na svém marketingu.
          </p>

          {/* Form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vas@email.cz"
                required
                className="flex-1 px-5 py-4 bg-dark border border-white/10 rounded-btn text-white placeholder:text-gray-text focus:border-lime focus:outline-none focus:ring-2 focus:ring-lime/20 transition-all"
              />
              <button
                type="submit"
                disabled={loading}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-lime hover:bg-lime-hover text-dark font-semibold rounded-btn transition-all disabled:opacity-50"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-dark/20 border-t-dark rounded-full animate-spin" />
                ) : (
                  <>
                    Začít
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 text-lime">
              <div className="w-10 h-10 bg-lime/20 rounded-full flex items-center justify-center">
                <Check size={24} />
              </div>
              <span className="text-lg font-medium">Děkujeme! Brzy se vám ozveme.</span>
            </div>
          )}

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-10 border-t border-white/10">
            <span className="flex items-center gap-2 text-sm text-gray-text">
              <Check size={16} className="text-lime" />
              Bez kreditní karty
            </span>
            <span className="flex items-center gap-2 text-sm text-gray-text">
              <Check size={16} className="text-lime" />
              14 dní zdarma
            </span>
            <span className="flex items-center gap-2 text-sm text-gray-text">
              <Check size={16} className="text-lime" />
              Zrušení kdykoliv
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
