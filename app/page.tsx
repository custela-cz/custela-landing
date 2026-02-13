export default function ComingSoon() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-[-40%] w-[600px] h-[600px] bg-[radial-gradient(ellipse,rgba(191,255,55,0.12)_0%,transparent_65%)] pointer-events-none" />

      {/* Logo */}
      <div className="text-3xl md:text-4xl font-bold text-white mb-6 z-10">
        Custela<span className="text-[#BFFF37]">.</span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 z-10">
        {"\u0050\u0159ipravujeme"}
      </h1>

      <p className="text-lg md:text-xl text-gray-400 max-w-lg mb-10 z-10">
        {"Pracujeme na nov\u00e9 verzi webu. Brzy tu najdete v\u0161echny informace o Custela platform\u011b."}
      </p>

      {/* CTA to app */}
      <a
        href="https://app.custela.com/auth"
        className="inline-flex items-center gap-2 px-8 py-4 bg-[#BFFF37] hover:bg-[#A8E62E] text-black font-semibold rounded-xl transition z-10"
      >
        {"P\u0159ej\u00edt do aplikace"}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>

      {/* Footer */}
      <p className="absolute bottom-8 text-sm text-gray-600 z-10">
        © {new Date().getFullYear()} Custela s.r.o.
      </p>
    </main>
  )
}
