import { useEffect, useMemo, useRef, useState, useCallback } from "react";

/* ── Icons (14×14, currentColor) ─────────────────────────── */
const I: Record<string, React.ReactNode> = {
  steps: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="10" y1="6" x2="21" y2="6" /><line x1="10" y1="12" x2="21" y2="12" /><line x1="10" y1="18" x2="21" y2="18" />
      <path d="M4 6h1v4" /><path d="M4 10h2" /><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  ),
  portfolio: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  fit: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  audit: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V22a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09A1.65 1.65 0 0 0 15 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  pricing: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  begin: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
};

/* ── Types ──────────────────────────────────────────────── */
type NavSection = { id: string; label: string; icon?: string };
type Props = {
  sections: NavSection[];
  showAfterPx?: number;
  offsetTopPx?: number;
  position?: "right" | "left";
};

/* ── Component ───────────────────────────────────────────── */
export default function ScrollSpyNav({
  sections,
  showAfterPx = 280,
  offsetTopPx = 96,
  position = "right",
}: Props) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isIdle, setIsIdle] = useState(false);

  const ids = useMemo(() => sections.map((s) => s.id), [sections]);
  const rafRef = useRef<number | null>(null);
  const expandedRef = useRef(expanded);
  expandedRef.current = expanded;
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const collapseOnScroll = useCallback(() => {
    if (expandedRef.current) setExpanded(false);
  }, []);

  /* ── Idle fade: 1s inactivity → fade out ── */
  const resetIdleTimer = useCallback(() => {
    setIsIdle(false);
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(() => setIsIdle(true), 1000);
  }, []);

  useEffect(() => {
    const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 1023px)").matches;

    // Mobile: only listen to scroll + touchstart (reduced overhead)
    // Desktop: full set for mouse/keyboard idle detection
    const events = isMobile
      ? ["scroll", "touchstart"]
      : ["scroll", "wheel", "mousemove", "keydown"];

    const handler = () => resetIdleTimer();
    events.forEach((evt) => window.addEventListener(evt, handler, { passive: true }));
    resetIdleTimer();
    return () => {
      events.forEach((evt) => window.removeEventListener(evt, handler));
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [resetIdleTimer]);

  /* Visibility */
  useEffect(() => {
    const fn = () => { setVisible(window.scrollY > showAfterPx); collapseOnScroll(); };
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, [showAfterPx, collapseOnScroll]);

  /* Active section */
  useEffect(() => {
    if (!ids.length) return;
    const detect = () => {
      const anchor = offsetTopPx + 24;
      let next = ids[0] ?? "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= anchor) next = id; else break;
      }
      setActiveId(next);
    };
    const fn = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => { rafRef.current = null; detect(); });
    };
    detect();
    window.addEventListener("scroll", fn, { passive: true });
    window.addEventListener("resize", fn);
    return () => {
      window.removeEventListener("scroll", fn);
      window.removeEventListener("resize", fn);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [ids, offsetTopPx]);

  if (!sections.length) return null;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    setActiveId(id);
    window.scrollTo({ top: window.scrollY + el.getBoundingClientRect().top - (offsetTopPx + 12), behavior: "smooth" });
  };

  const icon = (s: NavSection) =>
    s.icon && I[s.icon] ? I[s.icon] : <span className="text-[11px] font-bold">{s.label[0]}</span>;

  const pill = "rounded-2xl border border-white/20 shadow-[0_6px_18px_rgba(0,0,0,0.12)] backdrop-blur-md";
  const side = position === "left" ? { left: 24 } : { right: 24 };

  return (
    <>
      {/* ═══════════════ DESKTOP (lg+) ═══════════════════════════════ */}
      <nav
        aria-label="Page sections"
        className={[
          "hidden lg:block fixed z-50 top-1/2 -translate-y-1/2",
          visible ? "translate-x-0" : "pointer-events-none translate-x-4",
        ].join(" ")}
        style={{
          ...side,
          opacity: visible ? 1 : 0,
          transition: "opacity 600ms ease, transform 300ms ease",
        }}
      >
        <div className={`${pill} bg-white/65 px-2 py-3`}>
          <ul className="flex flex-col gap-1">
            {sections.map((s) => {
              const on = s.id === activeId;
              return (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(s.id)}
                    aria-current={on ? "true" : undefined}
                    className={[
                      "flex items-center gap-2 w-full text-left rounded-lg px-2 py-1.5 text-[14px] leading-5 transition-colors",
                      on ? "font-semibold text-black bg-black/10" : "text-black/70 hover:text-black hover:bg-black/5",
                    ].join(" ")}
                  >
                    <span className="shrink-0 opacity-60">{icon(s)}</span>
                    <span className="whitespace-nowrap">{s.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* ═══════════════ MOBILE (<lg) ════════════════════════════════ */}
      {/*
        FIX: Anchored to bottom instead of top-1/2 -translate-y-1/2.
        This prevents the ~30px jump caused by mobile browser UI
        bars expanding/collapsing and changing the viewport height.
        Safe-area inset added via inline style for iPhone home indicator.
      */}
<nav
  aria-label="Page sections"
  className={[
    "lg:hidden fixed right-4 z-50",
    visible ? "translate-x-0" : "pointer-events-none translate-x-4",
  ].join(" ")}
  style={{
    top: "auto",
    bottom: "calc(32px + env(safe-area-inset-bottom, 0px))",
    opacity: visible ? (expanded ? 1 : isIdle ? 0.25 : 1) : 0,
    transition: "opacity 600ms ease, transform 300ms ease",
    willChange: "opacity, transform",
  }}
>
<div
  className={`${pill} relative bg-white/92 border border-white/60 backdrop-blur-lg shadow-[0_18px_40px_rgba(0,0,0,0.30)] overflow-hidden`}
  style={{
    width: expanded ? 170 : 46,
    transition: "width 280ms cubic-bezier(.4,0,.2,1)",
    willChange: "width",
  }}
>
  {/* subtle glossy highlight */}
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent opacity-60" />
          <div className="flex flex-col items-center py-1.5">

            {/* ── Toggle area ── */}
            <div className="relative w-full flex justify-center" style={{ height: 42, marginBottom: 6 }}>
              <button
                type="button"
                onClick={() => setExpanded(true)}
                aria-label="Expand navigation"
                className="absolute inset-0 m-auto w-9 h-9 flex items-center justify-center rounded-full border-2 border-black/60 bg-white/70 text-black/60 hover:bg-white hover:text-black backdrop-blur-md shadow-md"
                style={{
                  top: -10,
                  opacity: expanded ? 0 : 1,
                  transform: expanded ? "scale(0.9)" : "scale(1)",
                  pointerEvents: expanded ? "none" : "auto",
                  transition: "opacity 250ms ease, transform 250ms ease, background 200ms ease",
                }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => setExpanded(false)}
                aria-label="Collapse navigation"
                className="absolute inset-0 m-auto flex items-center justify-center gap-1 text-[11px] font-medium text-black/35 hover:text-black/60"
                style={{
                  opacity: expanded ? 1 : 0,
                  transform: expanded ? "scale(1)" : "scale(0.7)",
                  pointerEvents: expanded ? "auto" : "none",
                  transition: "opacity 250ms ease, transform 250ms ease",
                }}
              >
                <span>Hide</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            {/* ── Separator ── */}
            <div
              className="h-px bg-black/8 my-1"
              style={{
                width: expanded ? "calc(100% - 16px)" : 20,
                transition: "width 280ms cubic-bezier(.4,0,.2,1)",
              }}
            />

            {/* ── Section buttons ── */}
            {sections.map((s) => {
              const on = s.id === activeId;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => { scrollTo(s.id); if (expanded) setExpanded(false); }}
                  aria-label={s.label}
                  aria-current={on ? "true" : undefined}
                  title={s.label}
                  className={[
                    "flex items-center rounded-lg",
                    "transition-[background-color,color] duration-200 ease-out",
                    on ? "text-black bg-black/10 font-semibold" : "text-black/50 hover:text-black/80 hover:bg-black/5",
                  ].join(" ")}
                  style={{
                    width: expanded ? "calc(100% - 8px)" : 38,
                    height: 38,
                    paddingLeft: expanded ? 12 : 0,
                    justifyContent: expanded ? "flex-start" : "center",
                    gap: expanded ? 10 : 0,
                    margin: "0 auto",
                    transition: "width 280ms cubic-bezier(.4,0,.2,1), padding 280ms cubic-bezier(.4,0,.2,1), gap 280ms cubic-bezier(.4,0,.2,1), background-color 200ms ease, color 200ms ease",
                    willChange: "width, padding-left",
                  }}
                >
                  <span className="shrink-0" style={{ opacity: expanded ? 0.7 : 1, transition: "opacity 200ms ease" }}>
                    {icon(s)}
                  </span>
                  <span
                    className="whitespace-nowrap text-[13px] leading-5 overflow-hidden"
                    style={{
                      maxWidth: expanded ? 110 : 0,
                      opacity: expanded ? 1 : 0,
                      transition: "max-width 280ms cubic-bezier(.4,0,.2,1), opacity 200ms ease 80ms",
                    }}
                  >
                    {s.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
