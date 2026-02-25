import Link from "next/link";
import { siteConfig } from "@/data/site";
import LogoMark from "@/components/LogoMark";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-color" style={{ backgroundColor: "var(--secondary-bg)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <LogoMark size={45} />
              <span className="text-lg font-bold text-text-primary">
                {siteConfig.agency.name}
                <span className="text-accent">.agency</span>
              </span>
            </Link>
            <p className="mt-2 text-sm text-text-secondary">{siteConfig.agency.description}</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-3">Navigation</h3>
            <ul className="space-y-2">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-text-secondary hover:text-accent transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/audit" className="text-sm text-text-secondary hover:text-accent transition-colors">
                  Free Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-3">Get in touch</h3>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href="https://calendly.com/north-summit-tuta/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-accent text-sm font-semibold hover:opacity-90 transition-opacity"
                  style={{ color: "var(--primary-bg)" }}
                >
                  Book a call
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-border-color text-sm font-medium text-text-secondary hover:text-accent hover:border-accent transition-colors"
                >
                  Get a quote
                </Link>

              </div>

              {/* Payment logos */}
              <div className="mt-1">
                <div className="flex items-center gap-2 flex-wrap">
                  {/* Visa */}
                  <svg width="38" height="24" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Visa" className="shrink-0">
                    <rect width="38" height="24" rx="4" fill="#1A1F71" />
                    <path d="M16.5 16.5H14.1L15.6 7.5H18L16.5 16.5Z" fill="white" />
                    <path d="M23.4 7.7C22.9 7.5 22.1 7.3 21.2 7.3C18.9 7.3 17.3 8.5 17.3 10.2C17.3 11.5 18.4 12.2 19.3 12.6C20.2 13 20.5 13.3 20.5 13.7C20.5 14.3 19.8 14.6 19.1 14.6C18.1 14.6 17.6 14.4 16.8 14.1L16.5 13.9L16.2 16C16.8 16.3 17.9 16.5 19 16.5C21.5 16.5 23 15.3 23 13.5C23 12.5 22.4 11.8 21.1 11.2C20.3 10.8 19.8 10.6 19.8 10.1C19.8 9.7 20.2 9.3 21.1 9.3C21.9 9.3 22.4 9.5 22.8 9.7L23 9.8L23.4 7.7Z" fill="white" />
                    <path d="M26.4 13.4C26.6 12.9 27.4 10.8 27.4 10.8C27.4 10.8 27.6 10.3 27.7 10L27.9 10.7C27.9 10.7 28.4 13 28.5 13.4H26.4ZM29.3 7.5H27.4C26.8 7.5 26.3 7.7 26.1 8.3L22.9 16.5H25.4C25.4 16.5 25.8 15.4 25.9 15.1H28.9C29 15.5 29.2 16.5 29.2 16.5H31.5L29.3 7.5Z" fill="white" />
                    <path d="M14.1 7.5L11.8 13.4L11.6 12.4C11.1 11 9.8 9.4 8.4 8.6L10.5 16.5H13L16.6 7.5H14.1Z" fill="white" />
                    <path d="M9.7 7.5H5.8L5.8 7.7C8.8 8.5 10.8 10.4 11.6 12.4L10.7 8.3C10.6 7.7 10.2 7.5 9.7 7.5Z" fill="#F9A533" />
                  </svg>
                  {/* Mastercard */}
                  <svg width="38" height="24" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mastercard" className="shrink-0">
                    <rect width="38" height="24" rx="4" fill="#252525" />
                    <circle cx="15" cy="12" r="6" fill="#EB001B" />
                    <circle cx="23" cy="12" r="6" fill="#F79E1B" />
                    <path d="M19 7.8C20.3 8.8 21.2 10.3 21.2 12C21.2 13.7 20.3 15.2 19 16.2C17.7 15.2 16.8 13.7 16.8 12C16.8 10.3 17.7 8.8 19 7.8Z" fill="#FF5F00" />
                  </svg>
                  {/* Apple Pay */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-apple" viewBox="0 0 16 16">
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                  </svg>
                  {/* Google Pay */}
                  <svg width="38" height="24" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Google Pay" className="shrink-0">
                    <rect width="38" height="24" rx="4" fill="#fff" stroke="#E0E0E0" strokeWidth="0.5"/>
                    <g transform="translate(5.5, 5.5)">
                      <path d="M6.5 0.2C5 0.2 3.6 0.8 2.5 1.8L4.2 3.5C4.8 2.9 5.6 2.5 6.5 2.5C7.4 2.5 8.1 2.8 8.7 3.3L10.3 1.7C9.2 0.8 7.9 0.2 6.5 0.2Z" fill="#EA4335"/>
                      <path d="M2.5 1.8C1.6 2.8 1 4.1 1 5.5C1 6.9 1.6 8.2 2.5 9.2L4.2 7.5C3.8 7 3.5 6.3 3.5 5.5C3.5 4.7 3.8 4 4.2 3.5L2.5 1.8Z" fill="#FBBC05"/>
                      <path d="M2.5 9.2C3.6 10.2 5 10.8 6.5 10.8C8 10.8 9.2 10.4 10.1 9.5L8.4 7.9C7.9 8.3 7.3 8.5 6.5 8.5C5.2 8.5 4.1 7.7 3.7 6.5L2.5 9.2Z" fill="#34A853"/>
                      <path d="M12 5.5C12 5 11.9 4.5 11.8 4H6.5V6.5H9.6C9.4 7.3 8.9 7.7 8.4 7.9L10.1 9.5C11.2 8.5 12 7.1 12 5.5Z" fill="#4285F4"/>
                    </g>
                    <text x="20" y="16" fontFamily='system-ui, -apple-system, "Segoe UI", sans-serif' fontSize="8.5" fontWeight="500" fill="#5F6368">Pay</text>
                  </svg>
                  {/* Klarna */}
                  <svg width="38" height="24" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Klarna" className="shrink-0">
                    <rect width="38" height="24" rx="4" fill="#FFB3C7" />
                    <text x="19" y="15" fontFamily='system-ui, -apple-system, "Segoe UI", sans-serif' fontSize="9" fontWeight="800" fill="#0A0B09" textAnchor="middle">Klarna</text>
                  </svg>
                </div>
              </div>

<div className="text-sm text-text-secondary flex flex-col gap-1">
  <a
    href={`tel:${siteConfig.agency.phone}`}
    className="hover:text-accent transition-colors font-medium"
  >
    Call me on {siteConfig.agency.phone}
  </a>

  <a
    href={`https://wa.me/${(siteConfig.agency.whatsapp || siteConfig.agency.phone).replace(/[^\d]/g, "")}`}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-accent transition-colors"
  >
    Message on WhatsApp
  </a>

  <a
    href={`mailto:${siteConfig.agency.email}`}
    className="hover:text-accent transition-colors"
  >
    Email me {siteConfig.agency.email}
  </a>

  <span className="mt-1 text-xs text-text-secondary">
    UK Based • Usually replies within a few hours
  </span>
</div>    </div>
          </div>
            
                

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-sm text-text-secondary hover:text-accent transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="text-sm text-text-secondary hover:text-accent transition-colors">Terms</Link></li>
              <li><Link href="/cookies" className="text-sm text-text-secondary hover:text-accent transition-colors">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border-color text-center text-sm text-text-secondary">
          &copy; {currentYear} {siteConfig.agency.domain}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
