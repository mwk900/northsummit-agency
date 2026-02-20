import { useEffect, useMemo, useRef, useState } from "react";

type NavSection = {
  id: string;
  label: string;
};

type Props = {
  sections: NavSection[];
  showAfterPx?: number;
  offsetTopPx?: number;
  position?: "right" | "left";
};

export default function ScrollSpyNav({
  sections,
  showAfterPx = 280,
  offsetTopPx = 96,
  position = "right",
}: Props) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const [visible, setVisible] = useState(false);

  const ids = useMemo(() => sections.map((s) => s.id), [sections]);
  const rafRef = useRef<number | null>(null);

  // Show / hide based on scroll
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > showAfterPx);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfterPx]);

  // Reliable active-section detection (works consistently on iOS Safari)
  useEffect(() => {
    if (!ids.length) return;

    const getActiveFromScroll = () => {
      const anchorY = offsetTopPx + 24; // "activation line" below sticky header
      let nextActive = ids[0] ?? "";

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;

        // If section top has passed the activation line, it becomes the active section
        if (top <= anchorY) {
          nextActive = id;
        } else {
          // ids are in page order, so once we hit a section below anchor, stop
          break;
        }
      }

      setActiveId(nextActive);
    };

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        getActiveFromScroll();
      });
    };

    // run once on mount + whenever ids change
    getActiveFromScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [ids, offsetTopPx]);

  if (!sections.length) return null;

  // Desktop gutter positioning
  const GUTTER = "clamp(10px, calc((100vw - 72rem) / 2 - 10px), 56px)";

  // Mobile alignment near the up-arrow (your chosen value)
  const SMALL_EDGE = "calc(1.5rem + 5px)";

  const sideStyle =
    position === "left"
      ? { left: `max(${GUTTER}, ${SMALL_EDGE})` }
      : { right: `max(${GUTTER}, ${SMALL_EDGE})` };

  // Tap handler: set active immediately + scroll with header offset
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    setActiveId(id);

    const y =
      window.scrollY +
      el.getBoundingClientRect().top -
      (offsetTopPx + 12);

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Page sections"
      className={[
        // Lower it on mobile so it competes less with readability
        "fixed z-50 bottom-25 lg:top-1/2 lg:-translate-y-1/2 lg:bottom-auto",
        "transition-all duration-300",
        visible ? "opacity-100 translate-x-0" : "opacity-0 pointer-events-none translate-x-2",
      ].join(" ")}
      style={sideStyle}
    >
      <div
        className={[
          "rounded-2xl border border-white/20",
          "px-2 py-3 shadow-[0_6px_18px_rgba(0,0,0,0.12)]",
          "bg-white/55 backdrop-blur-md",
        ].join(" ")}
      >
        <ul className="flex flex-col gap-1">
          {sections.map((s) => {
            const isActive = s.id === activeId;

            return (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => scrollToId(s.id)}
                  className={[
                    "block w-full text-left rounded-lg",
                    "px-3 py-3 lg:px-2 lg:py-1.5",
                    "text-[16px] lg:text-[14px] leading-5",
                    "transition-all",
                    // Make active obvious in light mode too (your old style was too subtle)
                    isActive
                      ? "font-semibold text-black bg-black/10"
                      : "text-black/70 hover:text-black hover:bg-black/5",
                  ].join(" ")}
                  aria-current={isActive ? "true" : undefined}
                >
                  <span className="whitespace-nowrap">{s.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}