import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface LegalPageProps {
  title: string
  effectiveDate: string
  children: React.ReactNode
}

export default function LegalPage({ title, effectiveDate, children }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Navbar />

      <article className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-12 pb-8 border-b border-black/[0.06]">
            <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              {title}
            </h1>
            <p className="text-gray-text">
              <strong className="text-dark">Platné od:</strong> {effectiveDate}
            </p>
          </header>

          {/* Content */}
          <div className="legal-content">
            {children}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}

export function LegalSection({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-12">
      <h2>{title}</h2>
      {children}
    </section>
  )
}

export function LegalTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto my-6">
      <table>
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function LegalFooter() {
  return (
    <footer className="pt-8 border-t border-black/[0.06] text-gray-text">
      <p><strong className="text-dark">Poslední aktualizace:</strong> 1. února 2025</p>
      <p className="mt-2">&copy; 2025 Michael Cetl – Custela. Všechna práva vyhrazena.</p>
    </footer>
  )
}
