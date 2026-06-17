import './globals.css'

/**
 * Root layout. The <html>/<body> tags and all the analytics/consent scripts
 * live in app/[lang]/layout.tsx so the <html lang> attribute can follow the
 * active locale. Every user-facing route is under /[lang]; the bare root path
 * 308-redirects to /cs (see next.config.js).
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
