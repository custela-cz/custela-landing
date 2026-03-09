import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface LegalPageProps {
  title: string
  effectiveDate: string
  children: React.ReactNode
}

export default function LegalPage({
  title,
  effectiveDate,
  children,
}: LegalPageProps) {
  return (
    <main className="min-h-screen bg-white">
      <Navbar forceScrolled />

      <article className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-12 pb-8 border-b border-gray-200">
            <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#111827' }}>
              {title}
            </h1>
            <p style={{ color: '#6b7280' }}>
              <strong style={{ color: '#111827' }}>Platné od:</strong> {effectiveDate}
            </p>
          </header>

          <div className="legal-content">{children}</div>
        </div>
      </article>

      <Footer />
    </main>
  )
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id?: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="mb-12">
      <h2>{title}</h2>
      {children}
    </section>
  )
}

export function LegalTable({
  headers,
  rows,
}: {
  headers: string[]
  rows: string[][]
}) {
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
    <footer className="pt-8 border-t border-gray-200" style={{ color: '#6b7280' }}>
      <p>
        <strong style={{ color: '#111827' }}>Poslední aktualizace:</strong> 3. března
        2026
      </p>
      <p className="mt-2">
        &copy; 2026 Michael Cetl - Custela. Všechna práva vyhrazena.
      </p>
    </footer>
  )
}
