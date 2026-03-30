'use client'

const rows = [
  { label: 'Rychlost reakce', agency: 'Hodiny–dny', manual: 'Když si vzpomenete', custela: 'Minuty' },
  { label: 'Náklady', agency: '10 000+ Kč/měs', manual: 'Váš čas', custela: 'Od 990 Kč/měs' },
  { label: 'Pokrytí pravidel', agency: 'Záleží na člověku', manual: 'Záleží na vás', custela: '170+ pravidel 24/7' },
  { label: 'Transparentnost', agency: 'Reporty 1× měsíčně', manual: 'Vy víte všechno', custela: 'Real-time + schvalování' },
]

export default function CompareSection() {
  return (
    <section className="compare-section" id="compare">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="sh reveal">
          <div className="section-label">Srovnání</div>
          <h2>Custela vs. alternativy</h2>
        </div>
        <div className="reveal">
          <table className="compare-table">
            <thead>
              <tr>
                <th></th>
                <th>Agentura</th>
                <th>Ruční správa</th>
                <th>Custela</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label}>
                  <td>{row.label}</td>
                  <td>{row.agency}</td>
                  <td>{row.manual}</td>
                  <td>{row.custela}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
