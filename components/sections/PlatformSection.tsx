'use client'

export default function PlatformSection() {
  return (
    <section className="platforms">
      <div className="max-w-[1160px] mx-auto px-6">
        <p className="reveal">Propojeno s platformami, které denně používáte</p>
        <div className="platform-logos reveal reveal-delay-1">
          <div className="platform-logo">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google Ads
          </div>
          <div className="platform-logo">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
            </svg>
            Meta Ads
          </div>
          <div className="platform-logo">
            <svg width="15" height="16" viewBox="0 0 24 24" fill="none" style={{verticalAlign:'middle'}}>
              <rect width="24" height="24" rx="4" fill="#E63900"/>
              <path d="M6 8h12M6 12h8M6 16h10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            Sklik
          </div>
          <div className="platform-logo">
            <svg viewBox="0 0 24 24" fill="none">
              <rect x="6" y="2" width="5" height="20" rx="2.5" fill="#F9AB00"/>
              <circle cx="16" cy="18.5" r="3.5" fill="#E37400"/>
            </svg>
            Google Analytics
          </div>
          <div className="platform-logo">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M5.5 7L7 3h10l1.5 4H5.5z" fill="#4285F4"/>
              <path d="M5.5 7c0 1.38.9 2.5 2 2.5s2-1.12 2-2.5" fill="#4285F4"/>
              <path d="M9.5 7c0 1.38.9 2.5 2 2.5s2-1.12 2-2.5" fill="#34A853"/>
              <path d="M13.5 7c0 1.38.9 2.5 2 2.5s2-1.12 2-2.5" fill="#EA4335"/>
              <rect x="5.5" y="9.5" width="13" height="11.5" fill="none" stroke="#4285F4" strokeWidth="1.5"/>
              <rect x="9.5" y="14" width="5" height="7" fill="#FBBC05"/>
            </svg>
            Google Merchant Center
          </div>
        </div>
      </div>
    </section>
  )
}
