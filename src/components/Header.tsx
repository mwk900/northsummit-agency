import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { siteConfig } from "@/data/site";
import LogoMark from "@/components/LogoMark";
import MobileContactWidget from "@/components/MobileContactWidget";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleMobileRoute = (href: string) => {
    // Close menu first, then navigate.
    setMobileMenuOpen(false);

    // Use router.push for internal routes. For hash links, push as-is.
    void router.push(href);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change (safety)
  useEffect(() => {
    const onStart = () => setMobileMenuOpen(false);
    router.events.on("routeChangeStart", onStart);
    return () => router.events.off("routeChangeStart", onStart);
  }, [router.events]);

  // Scroll-lock while menu is open
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const originalOverflow = document.body.style.overflow;
    const originalMenuOpenDataset = document.body.dataset.mobileMenuOpen;

    document.body.style.overflow = "hidden";
    document.body.dataset.mobileMenuOpen = "true";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      if (originalMenuOpenDataset) {
        document.body.dataset.mobileMenuOpen = originalMenuOpenDataset;
      } else {
        delete document.body.dataset.mobileMenuOpen;
      }
      window.removeEventListener("keydown", handleEscape);
    };
  }, [mobileMenuOpen]);

  const isActive = (href: string) =>
    router.pathname === href || (href !== "/" && router.pathname.startsWith(href));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[90] transition-shadow ${
        scrolled ? "shadow-lg shadow-black/10" : ""
      }`}
      style={{ backgroundColor: "var(--primary-bg)" }}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity shrink-0">
          <LogoMark size={55} />
          <span className="text-base sm:text-lg font-bold text-text-primary">
            {siteConfig.agency.name}
            <span className="text-accent">.agency</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-3.5">
          {siteConfig.navigation.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative py-1 text-sm font-medium transition-colors hover:text-accent ${
                isActive(link.href) ? "text-accent" : "text-text-secondary"
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
              )}
            </Link>
          ))}

          <MobileContactWidget />
          <ThemeToggle />

          <a
            href="https://calendly.com/north-summit-tuta/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium text-text-secondary border border-border-color rounded-lg hover:text-accent hover:border-accent transition-colors"
          >
            Book a call
          </a>

          <Link
            href="/contact"
            className="px-4 py-2 rounded-lg bg-accent text-sm font-semibold hover:opacity-90 transition-opacity"
            style={{ color: "var(--primary-bg)" }}
          >
            Get a quote
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-3 ml-1">
          <MobileContactWidget />
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary-bg border border-border-color"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-text-primary"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="md:hidden fixed inset-0 z-[70] bg-black/58 backdrop-blur-[1px]"
            onClick={closeMobileMenu}
          >
            <motion.div
              initial={{ x: 14, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 14, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="ml-auto h-full w-full max-w-md overflow-y-auto px-5 pt-6 pb-[calc(1.25rem+env(safe-area-inset-bottom,0px))]"
              style={{
                background:
                  "linear-gradient(132deg, rgba(7,12,20,0.95) 0%, rgba(10,16,28,0.93) 52%, rgba(5,10,18,0.95) 100%)",
              }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mx-auto flex h-full w-full max-w-xl flex-col">
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={closeMobileMenu}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/8 text-white shadow-[0_12px_32px_rgba(0,0,0,0.35)] hover:bg-white/14 transition-colors"
                    aria-label="Close menu"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      aria-hidden="true"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>

                <nav className="mt-12 flex-1">
                  <ul className="space-y-4">
                    {siteConfig.navigation.map((link) => (
                      <li key={link.href}>
                        <button
                          type="button"
                          onClick={() => handleMobileRoute(link.href)}
                          className={`block w-full text-left text-[2.9rem] font-semibold leading-[1.05] tracking-[-0.015em] transition-colors ${
                            router.pathname === link.href ? "text-[#86c3ff]" : "text-white/94 hover:text-white"
                          }`}
                        >
                          {link.label}
                        </button>
                      </li>
                    ))}
                    <li>
                      <a
                        href="https://calendly.com/north-summit-tuta/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMobileMenu}
                        className="block pt-2 text-[2.1rem] font-medium leading-tight text-white/84 hover:text-white transition-colors"
                      >
                        Book a call
                      </a>
                    </li>
                  </ul>
                </nav>

                <div className="pt-4">
                  <div className="rounded-[28px] border border-white/80 bg-white/8 p-2 shadow-[0_24px_48px_rgba(0,0,0,0.38)]">
                    <button
                      type="button"
                      onClick={() => handleMobileRoute("/contact")}
                      className="block w-full rounded-[20px] bg-[#142136] px-6 py-4 text-center text-xl font-semibold text-white hover:opacity-90 transition-opacity"
                    >
                      Get started
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}